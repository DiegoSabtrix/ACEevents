"use client";

import { FormEvent, useEffect, useState } from "react";

const programs = [
  { value: "financiero", label: "Programa Financiero" },
  { value: "marketing", label: "Programa de Marketing" },
  { value: "ambos", label: "Ambos programas" },
];

const businessTypes = [
  "Servicios profesionales",
  "Construcción o servicios para el hogar",
  "Restaurante o alimentos",
  "Belleza y bienestar",
  "Retail o comercio electrónico",
  "Tecnología",
  "Otro",
];

const attributionFields = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "campaign_id",
  "ad_id",
] as const;

export default function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [attribution, setAttribution] = useState<Record<string, string>>({});
  const [reservationData, setReservationData] = useState<Record<string, string>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const values = Object.fromEntries(
      attributionFields.map((field) => [field, params.get(field) ?? ""]),
    );
    setAttribution({ ...values, source_page: window.location.href });
  }, []);

  function reserveSpot(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setReservationData(
      Object.fromEntries(
        ["fullName", "email", "phone", "zipCode", "eventSelection"].map((name) => [name, String(data.get(name) ?? "")]),
      ),
    );
    setStep(2);
    requestAnimationFrame(() => {
      document.getElementById("paso-adicional")?.focus();
    });
  }

  function completeRegistration() {
    setStep(3);
    requestAnimationFrame(() => {
      const confirmation = document.getElementById("registro-confirmado");
      confirmation?.focus();
      confirmation?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  return (
    <form className="registration-form" onSubmit={reserveSpot}>
      {Object.entries(attribution).map(([name, value]) => (
        <input key={name} type="hidden" name={name} value={value} readOnly />
      ))}
      {step >= 2 && Object.entries(reservationData).map(([name, value]) => (
        <input key={name} type="hidden" name={name} value={value} readOnly />
      ))}

      {step === 1 ? (
        <>
          <div className="form-intro">
            <div>
              <span className="form-kicker">Toma menos de 30 segundos</span>
              <h3>Reserva tu cupo gratis</h3>
            </div>
            <span className="step-pill">Paso 1 de 2</span>
          </div>
          <p className="form-subtitle">Completa tus datos y recibirás la confirmación y el enlace de acceso por correo electrónico.</p>

          <label>Nombre completo<input name="fullName" type="text" placeholder="Tu nombre y apellido" autoComplete="name" required /></label>
          <label>Correo electrónico<input name="email" type="email" placeholder="correo@ejemplo.com" autoComplete="email" required /></label>
          <div className="form-row contact-row">
            <label>Teléfono<input name="phone" type="tel" placeholder="(000) 000-0000" autoComplete="tel" required /></label>
            <label>Código postal<input name="zipCode" type="text" placeholder="00000" inputMode="numeric" autoComplete="postal-code" required /></label>
          </div>

          <fieldset className="program-fieldset">
            <legend>¿A cuál programa deseas asistir?</legend>
            <div className="program-options">
              {programs.map((program) => (
                <label className="program-option" key={program.value}>
                  <input type="radio" name="eventSelection" value={program.value} required />
                  <span>{program.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <button className="button form-submit" type="submit">Reservar mi cupo gratis <span aria-hidden="true">→</span></button>
          <div className="form-reassurance" aria-label="Beneficios de la capacitación">
            <span>✓ 100% gratuito</span><span>✓ Capacitación online</span><span>✓ Cupos limitados</span>
          </div>
        </>
      ) : step === 2 ? (
        <div className="additional-step">
          <div className="form-intro">
            <div>
              <span className="form-kicker">Información adicional</span>
              <h3 id="paso-adicional" tabIndex={-1}>¡Tu cupo está casi listo!</h3>
            </div>
            <span className="step-pill">Paso 2 de 2</span>
          </div>
          <p className="form-subtitle">Cuéntanos un poco sobre tu negocio para personalizar tu experiencia.</p>

          <label>¿En qué etapa se encuentra tu negocio?
            <select name="businessStage" defaultValue="">
              <option value="" disabled>Selecciona una opción</option>
              <option>Tengo una idea de negocio</option>
              <option>Estoy comenzando</option>
              <option>Mi negocio está en operación</option>
              <option>Mi negocio está en crecimiento</option>
            </select>
          </label>
          <label>Nombre de la empresa <small>(opcional)</small><input name="company" type="text" autoComplete="organization" /></label>

          <fieldset className="program-fieldset business-fieldset">
            <legend>¿Qué describe mejor tu negocio o proyecto?</legend>
            <div className="business-options">
              {businessTypes.map((type) => (
                <label className="business-option" key={type}>
                  <input type="radio" name="businessType" value={type} />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <button className="button form-submit" type="button" onClick={completeRegistration}>Completar mi registro</button>
          <button className="skip-step" type="button" onClick={completeRegistration}>Omitir por ahora</button>
          <button className="back-step" type="button" onClick={() => setStep(1)}>← Volver al paso anterior</button>
        </div>
      ) : (
        <div className="confirmation-step" role="status" aria-live="polite">
          <span className="confirmation-icon" aria-hidden="true">✓</span>
          <span className="form-kicker">Registro confirmado</span>
          <h3 id="registro-confirmado" tabIndex={-1}>¡Gracias! Tu cupo está reservado</h3>
          <p>Recibirás un mensaje SMS y un correo electrónico con la confirmación de tu registro.</p>
          <p>Tu acceso al evento también llegará por estos medios. Te mantendremos informado con todos los detalles.</p>
          <div className="confirmation-details" aria-label="Próximos pasos">
            <span>✓ Confirmación por SMS</span>
            <span>✓ Confirmación por correo</span>
            <span>✓ Acceso al evento</span>
          </div>
        </div>
      )}
    </form>
  );
}
