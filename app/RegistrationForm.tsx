"use client";

import { FormEvent, useEffect, useState } from "react";

const programSets = {
  online: [{ value: "marketing", label: "Programa de Marketing" }],
  tifton: [{ value: "tifton-intensivo", label: "Programa Intensivo de Estrategia Empresarial" }],
} as const;

const attributionFields = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "campaign_id",
  "ad_id",
] as const;

const genderOptions = ["Mujer", "Hombre", "Prefiero no responder"];
const militaryOptions = [
  "Sin servicio militar",
  "Veterano",
  "Veterano con discapacidad relacionada con el servicio",
  "Reserva o Guardia Nacional",
  "Servicio activo",
  "Cónyuge de un miembro de las Fuerzas Armadas",
  "Prefiero no responder",
];
const raceOptions = [
  "Blanca",
  "Negra o afroamericana",
  "Asiática",
  "Indígena americana o nativa de Alaska",
  "Nativa de Hawái o de las islas del Pacífico",
  "Multirracial",
  "Prefiero no responder",
];
const ethnicityOptions = [
  "Hispano o latino",
  "No hispano o latino",
  "Prefiero no responder",
];

const retryableSubmissionStatuses = new Set([408, 425, 429, 500, 502, 503, 504]);

function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function submitRegistration(payload: Record<string, string>) {
  let lastResponse: Response | null = null;

  for (let attempt = 1; attempt <= 2; attempt += 1) {
    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Registration-Id": payload.registration_id,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) return response;
      lastResponse = response;
      if (!retryableSubmissionStatuses.has(response.status)) break;
    } catch {
      // A second attempt covers brief connectivity interruptions.
    }

    if (attempt < 2) await wait(600);
  }

  return lastResponse;
}

type MetaPixelFunction = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: MetaPixelFunction;
  loaded: boolean;
  version: string;
};

function initializeMetaPixel() {
  const metaWindow = window as typeof window & {
    fbq?: MetaPixelFunction;
    _fbq?: MetaPixelFunction;
  };

  if (metaWindow.fbq) return;

  const fbq = ((...args: unknown[]) => {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  }) as MetaPixelFunction;

  metaWindow.fbq = fbq;
  metaWindow._fbq = fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  fbq("init", "1034539289433580");
  fbq("track", "PageView");
}

function trackLead(program: string, formName: string) {
  const metaWindow = window as typeof window & {
    fbq?: (action: string, event: string, parameters?: Record<string, string>) => void;
  };

  metaWindow.fbq?.("track", "Lead", {
    content_name: formName,
    content_category: program,
  });
}

export default function RegistrationForm({ variant = "online" }: { variant?: "online" | "tifton" }) {
  const programs = programSets[variant];
  const isTifton = variant === "tifton";
  const formName = isTifton
    ? "ACE — Programa Intensivo de Estrategia Empresarial — Tifton"
    : "ACE — Capacitación Empresarial Online";
  const [step, setStep] = useState(1);
  const [hasBusiness, setHasBusiness] = useState("");
  const [attribution, setAttribution] = useState<Record<string, string>>({});
  const [reservationData, setReservationData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    initializeMetaPixel();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const values = Object.fromEntries(
      attributionFields.map((field) => [field, params.get(field) ?? ""]),
    );
    setAttribution({ ...values, source_page: window.location.href });
  }, []);

  function goToStepTwo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const contact = Object.fromEntries(
      ["firstName", "lastName", "email", "phone", "smsConsent", "eventSelection"].map((name) => [
        name,
        String(data.get(name) ?? ""),
      ]),
    );

    setReservationData(contact);
    sessionStorage.setItem("ace-registration-draft", JSON.stringify({ ...contact, ...attribution }));
    setStep(2);
    requestAnimationFrame(() => {
      document.getElementById("paso-adicional")?.focus();
      document.querySelector(".registration-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  async function completeRegistration(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    const values = Object.fromEntries(
      Array.from(new FormData(event.currentTarget).entries()).map(([name, value]) => [name, String(value)]),
    );
    const programLabel = programs.find((program) => program.value === values.eventSelection)?.label ?? "";

    const payload = {
      registration_id: crypto.randomUUID(),
      form_name: formName,
      registration_status: "Registro completo",
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      phone: values.phone,
      program: values.eventSelection,
      program_label: programLabel,
      sms_consent: values.smsConsent === "on" ? "Sí" : "No",
      currently_in_business: values.hasBusiness === "si" ? "Sí" : "No",
      business_name: values.businessName ?? "",
      georgia_address: values.georgiaAddress,
      gender: values.gender,
      ethnicity: values.ethnicity,
      race: values.race,
      military_status: values.militaryStatus,
      utm_source: values.utm_source ?? "",
      utm_medium: values.utm_medium ?? "",
      utm_campaign: values.utm_campaign ?? "",
      utm_content: values.utm_content ?? "",
      utm_term: values.utm_term ?? "",
      campaign_id: values.campaign_id ?? "",
      ad_id: values.ad_id ?? "",
      source_page: values.source_page ?? window.location.href,
      submitted_at: new Date().toISOString(),
    };

    try {
      const response = await submitRegistration(payload);

      if (!response?.ok) {
        throw new Error("No fue posible enviar el registro");
      }

      trackLead(programLabel, formName);
      sessionStorage.removeItem("ace-registration-draft");
      setStep(3);
      requestAnimationFrame(() => {
        const confirmation = document.getElementById("registro-confirmado");
        confirmation?.focus();
        confirmation?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    } catch {
      setSubmitError("No pudimos completar tu registro. Revisa tu conexión e inténtalo nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const selectedProgram = programs.find(
    (program) => program.value === reservationData.eventSelection,
  )?.label;

  return (
    <form
      className="registration-form"
      onSubmit={step === 1 ? goToStepTwo : step === 2 ? completeRegistration : (event) => event.preventDefault()}
    >
      {Object.entries(attribution).map(([name, value]) => (
        <input key={name} type="hidden" name={name} value={value} readOnly />
      ))}
      {step >= 2 &&
        Object.entries(reservationData).map(([name, value]) => (
          <input key={name} type="hidden" name={name} value={value} readOnly />
        ))}

      {step === 1 ? (
        <>
          <div className="form-intro">
            <div>
              <span className="form-kicker">Registro gratuito</span>
              <h3>Reserva tu cupo</h3>
            </div>
            <span className="step-pill">Paso 1 de 2</span>
          </div>
          <p className="form-subtitle">
            Completa tus datos para comenzar. El registro toma aproximadamente 2 minutos.
          </p>

          <div className="form-row name-row">
            <label>
              Nombre
              <input name="firstName" type="text" placeholder="Tu nombre" autoComplete="given-name" defaultValue={reservationData.firstName} required />
            </label>
            <label>
              Apellido
              <input name="lastName" type="text" placeholder="Tu apellido" autoComplete="family-name" defaultValue={reservationData.lastName} required />
            </label>
          </div>
          <label>
            Correo electrónico
            <input name="email" type="email" placeholder="correo@ejemplo.com" autoComplete="email" defaultValue={reservationData.email} required />
          </label>
          <label>
            Teléfono
            <input name="phone" type="tel" placeholder="(000) 000-0000" autoComplete="tel" defaultValue={reservationData.phone} required />
          </label>

          <label className="consent-row">
            <input name="smsConsent" type="checkbox" defaultChecked={reservationData.smsConsent === "on"} required />
            <span>
              Acepto recibir mensajes de confirmación y recordatorios de ACE por SMS y correo electrónico. Consulta la{` `}
              <a href="https://aceloans.org/privacy-policy/" target="_blank" rel="noreferrer">Política de privacidad</a> y los{` `}
              <a href="https://aceloans.org/terms-of-service/" target="_blank" rel="noreferrer">Términos de servicio</a>.
            </span>
          </label>

          <fieldset className="program-fieldset">
            <legend>Programa disponible</legend>
            <div className="program-options">
              {programs.map((program) => (
                <label className="program-option" key={program.value}>
                  <input type="radio" name="eventSelection" value={program.value} defaultChecked={reservationData.eventSelection ? reservationData.eventSelection === program.value : true} required />
                  <span>{program.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <button className="button form-submit" type="submit">
            CONTINUAR CON MI REGISTRO GRATIS <span aria-hidden="true">→</span>
          </button>
          <div className="form-reassurance" aria-label="Beneficios de la capacitación">
            <span>✓ Registro gratuito</span>
            <span>✓ {isTifton ? "Presencial en Tifton" : "Evento 100% online"}</span>
            <span>✓ Cupos limitados</span>
          </div>
        </>
      ) : step === 2 ? (
        <div className="additional-step">
          <div className="form-intro">
            <div>
              <span className="form-kicker">Información adicional</span>
              <h3 id="paso-adicional" tabIndex={-1}>Completa tu registro</h3>
            </div>
            <span className="step-pill">Paso 2 de 2</span>
          </div>
          <p className="form-subtitle">
            ACE solicita esta información para conocer a los participantes y preparar los reportes del programa.
          </p>

          <fieldset className="compact-fieldset">
            <legend>¿Actualmente tienes un negocio?</legend>
            <div className="binary-options">
              {[
                { value: "si", label: "Sí" },
                { value: "no", label: "No" },
              ].map((option) => (
                <label className="binary-option" key={option.value}>
                  <input
                    type="radio"
                    name="hasBusiness"
                    value={option.value}
                    checked={hasBusiness === option.value}
                    onChange={(event) => setHasBusiness(event.target.value)}
                    required
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {hasBusiness === "si" && (
            <label className="conditional-field">
              Nombre del negocio
              <input name="businessName" type="text" autoComplete="organization" required />
            </label>
          )}

          <label>
            Dirección en Georgia
            <input
              name="georgiaAddress"
              type="text"
              placeholder="Calle, ciudad, estado y código postal"
              autoComplete="street-address"
              required
            />
          </label>

          <div className="demographic-note">
            <strong>Información demográfica</strong>
            <span>Tus respuestas se usan únicamente para fines de reporte y no afectan tu participación.</span>
          </div>

          <div className="select-grid">
            <label>
              Género
              <select name="gender" defaultValue="" required>
                <option value="" disabled>Selecciona una opción</option>
                {genderOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label>
              Origen étnico
              <select name="ethnicity" defaultValue="" required>
                <option value="" disabled>Selecciona una opción</option>
                {ethnicityOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label>
              Raza
              <select name="race" defaultValue="" required>
                <option value="" disabled>Selecciona una opción</option>
                {raceOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label>
              Relación con el servicio militar
              <select name="militaryStatus" defaultValue="" required>
                <option value="" disabled>Selecciona una opción</option>
                {militaryOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
          </div>

          <div className="form-navigation">
            <button className="back-button" type="button" onClick={() => setStep(1)} disabled={isSubmitting}>← Atrás</button>
            <button className="button form-submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando registro…" : <>Completar mi registro <span aria-hidden="true">→</span></>}
            </button>
          </div>
          {submitError && <p className="form-error" role="alert">{submitError}</p>}
          <p className="data-use-note">
            Tus datos serán utilizados para gestionar tu registro y cumplir con los requisitos de reporte del programa.
          </p>
        </div>
      ) : (
        <div className="confirmation-step" role="status" aria-live="polite">
          <span className="confirmation-icon" aria-hidden="true">✓</span>
          <span className="form-kicker">Registro confirmado</span>
          <h3 id="registro-confirmado" tabIndex={-1}>¡Tu registro está completo!</h3>
          <p>Gracias por registrarte. Te enviaremos un SMS y un correo electrónico con la confirmación.</p>
          <p>{isTifton ? "También recibirás la información del lugar y los recordatorios antes del evento." : "También recibirás el enlace de acceso y los recordatorios antes del evento."}</p>
          {selectedProgram && (
            <div className="selected-program">
              <span>Programa seleccionado</span>
              <strong>{selectedProgram}</strong>
              <small>{isTifton ? "Presencial en Tifton" : "Modalidad online"}</small>
            </div>
          )}
          <div className="confirmation-details" aria-label="Próximos pasos">
            <span>✓ Confirmación por SMS</span>
            <span>✓ Confirmación por correo</span>
            <span>✓ {isTifton ? "Información del lugar" : "Acceso al evento"}</span>
          </div>
        </div>
      )}
    </form>
  );
}
