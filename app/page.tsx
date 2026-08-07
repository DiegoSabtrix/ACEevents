import RegistrationForm from "./RegistrationForm";

const financialTopics = [
  "Finanzas para no financieros",
  "Indicadores financieros clave",
  "Capital y opciones de financiamiento para pequeñas empresas",
  "Cómo prepararte antes de solicitar un préstamo",
  "Herramientas para tomar mejores decisiones financieras",
];

const marketingTopics = [
  "Estrategia de marketing",
  "Generación de leads",
  "Cómo convertir oportunidades en clientes",
  "Inteligencia Artificial aplicada a pequeñas empresas",
  "Estrategias para aumentar la productividad comercial",
];

const audiences = [
  "Dueños de negocio",
  "Emprendedores",
  "Personas con una idea de negocio",
  "Empresas que desean crecer de forma estratégica",
];

function OnlineIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="m10 8 5 2.5-5 2.5Z" />
    </svg>
  );
}

function FreeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7" />
      <path d="M2 7h20v5H2zM12 7v14M12 7H7.5a2.5 2.5 0 1 1 2.5-4c1.2.8 2 4 2 4ZM12 7h4.5A2.5 2.5 0 1 0 14 3c-1.2.8-2 4-2 4Z" />
    </svg>
  );
}

function RegistrationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18M8 15l2.5 2.5L16 12" />
    </svg>
  );
}

function ProgramIcon({ type }: { type: "finance" | "marketing" }) {
  return type === "finance" ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      <path d="m3 7 6-5 6 7 6-5" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 11 15-6v14L3 13Z" />
      <path d="M11 16v4H6l-1-6M18 9c2 0 3 1 3 3s-1 3-3 3" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">Ir al contenido</a>

      <header className="site-header" id="top">
        <div className="container nav-wrap">
          <a className="brand brand-image" href="https://aceloans.org/" target="_blank" rel="noreferrer" aria-label="Visitar el sitio web de ACE">
            <img src="/images/ace-green-original.png" alt="ACE" />
          </a>
          <div className="nav-actions">
            <a className="button button-small" href="#registro">Reservar mi cupo</a>
          </div>
        </div>
      </header>

      <section className="hero" id="main-content">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow light">Capacitación empresarial online gratuita</p>
            <h1>El siguiente paso para hacer crecer tu negocio comienza aquí.</h1>
            <p className="hero-caption">Aprende herramientas prácticas de finanzas, marketing e Inteligencia Artificial para fortalecer tu empresa y tomar mejores decisiones.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#registro">Reservar mi cupo gratis <span aria-hidden="true">→</span></a>
              <a className="hero-link" href="#capacitaciones">Conocer los programas</a>
            </div>
          </div>
          <div className="hero-visual" role="img" aria-label="Dos emprendedores dentro de su negocio">
            <div className="hero-badge"><span>2</span><strong>programas<br />virtuales</strong></div>
          </div>
        </div>
      </section>

      <section className="alert-strip" aria-label="Información principal del evento">
        <div className="container facts-grid">
          <div><span className="fact-icon"><OnlineIcon /></span><p><strong>100% online</strong><small>Conéctate desde cualquier lugar</small></p></div>
          <div><span className="fact-icon"><FreeIcon /></span><p><strong>Sin costo</strong><small>Capacitación completamente gratuita</small></p></div>
          <div><span className="fact-icon"><RegistrationIcon /></span><p><strong>Una sola reserva</strong><small>Reserva uno o ambos programas</small></p></div>
        </div>
      </section>

      <section className="events section" id="capacitaciones">
        <div className="container">
          <div className="section-heading event-heading">
            <div><p className="eyebrow">Dos programas. Una sola reserva.</p><h2>Elige el programa que tu negocio necesita.</h2></div>
            <p>Reserva tu cupo en el Programa Financiero, en el Programa de Marketing o aprovecha ambos.</p>
          </div>

          <div className="event-grid">
            <article className="event-card event-finance">
              <div className="event-photo" role="img" aria-label="Emprendedores trabajando juntos en su negocio"></div>
              <div className="event-card-body">
                <div className="program-label"><span><ProgramIcon type="finance" /></span> Programa virtual</div>
                <h3>Programa Financiero</h3>
                <div className="event-meta"><div><small>FECHA</small><strong>Martes, 18 de agosto de 2026</strong></div><div><small>HORARIO</small><strong>10:00 AM – 12:00 PM (ET)</strong></div></div>
                <p className="event-description">Aprende a comprender mejor las finanzas de tu negocio y conoce herramientas para planificar su crecimiento.</p>
                <p className="topics-title">Lo que aprenderás</p>
                <ul>{financialTopics.map(topic => <li key={topic}>{topic}</li>)}</ul>
                <a className="text-link" href="#registro">Reservar mi cupo <span aria-hidden="true">→</span></a>
              </div>
            </article>

            <article className="event-card event-marketing">
              <div className="event-photo" role="img" aria-label="Dueña de negocio usando tecnología en su tienda"></div>
              <div className="event-card-body">
                <div className="program-label"><span><ProgramIcon type="marketing" /></span> Programa virtual</div>
                <h3>Programa de Marketing</h3>
                <div className="event-meta"><div><small>FECHA</small><strong>Jueves, 20 de agosto de 2026</strong></div><div><small>HORARIO</small><strong>10:00 AM – 12:00 PM (ET)</strong></div></div>
                <p className="event-description">Aprende estrategias para atraer clientes, generar oportunidades comerciales y aprovechar la Inteligencia Artificial en tu negocio.</p>
                <p className="topics-title">Lo que aprenderás</p>
                <ul>{marketingTopics.map(topic => <li key={topic}>{topic}</li>)}</ul>
                <a className="text-link" href="#registro">Reservar mi cupo <span aria-hidden="true">→</span></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="audience section" id="participantes">
        <div className="container audience-grid">
          <div className="audience-copy">
            <p className="eyebrow light">Capacitación Empresarial Online Gratuita</p>
            <h2>¿Quiénes pueden participar?</h2>
            <div className="audience-list">
              {audiences.map((audience) => <div key={audience}><span aria-hidden="true">✓</span><strong>{audience}</strong></div>)}
            </div>
          </div>
          <div className="audience-photo" role="img" aria-label="Dos empresarias frente a su negocio"><div className="photo-badge"><strong>2</strong><span>programas virtuales</span></div></div>
        </div>
      </section>

      <section className="registration section" id="registro">
        <div className="container registration-grid">
          <div className="registration-copy">
            <a className="registration-logo-link" href="https://aceloans.org/" target="_blank" rel="noreferrer" aria-label="Visitar el sitio web de ACE">
              <img className="registration-logo" src="/images/ace-white-original.png" alt="ACE" />
            </a>
            <p className="eyebrow light">Capacitación Empresarial Online Gratuita</p>
            <h2>Reserva tu cupo</h2>
            <p>Elige el Programa Financiero, el Programa de Marketing o ambos. Solo necesitas unos segundos para reservar tu cupo.</p>
            <div className="trust-note"><span aria-hidden="true">✓</span><p><strong>Tu cupo es completamente gratuito.</strong> Recibirás por correo electrónico la confirmación y el enlace para conectarte a la capacitación.</p></div>
          </div>
          <RegistrationForm />
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-main">
          <a className="footer-ace" href="https://aceloans.org/" target="_blank" rel="noreferrer" aria-label="Visitar el sitio web de ACE">
            <img src="/images/ace-white-original.png" alt="ACE" />
          </a>
          <p>Capital + Asesoría + Conexiones para emprendedores</p>
          <a className="back-to-top" href="#top">Volver arriba <span aria-hidden="true">↑</span></a>
        </div>
        <div className="sponsors-bar">
          <div className="container sponsors-inner">
            <p>Patrocinadores</p>
            <div className="sponsor-logos">
              <a className="sponsor-logo sponsor-3lc" href="https://3lcfinancialservices.com/" target="_blank" rel="noreferrer" aria-label="Visitar 3LC Financial & Business Solutions">
                <img src="/images/three-lc-sponsor.png" alt="3LC Financial & Business Solutions" />
              </a>
              <a className="sponsor-logo sponsor-sabtrix" href="https://sabtrix.com/" target="_blank" rel="noreferrer" aria-label="Visitar Sabtrix">
                <img src="/images/sabtrix-sponsor.png" alt="Sabtrix" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
