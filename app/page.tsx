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

      <div className="utility-bar">
        <div className="container utility-inner">
          <span>Educación que impulsa negocios</span>
          <span>Capacitación empresarial en español</span>
        </div>
      </div>

      <header className="site-header" id="top">
        <div className="container nav-wrap">
          <a className="brand brand-image" href="#top" aria-label="ACE, inicio">
            <img src="/images/ace-official-white.png" alt="ACE" />
          </a>
          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#capacitaciones">Programas</a>
            <a href="#participantes">Quiénes pueden participar</a>
            <a href="#registro">Registro</a>
          </nav>
          <div className="nav-actions">
            <a className="button button-small" href="#registro">Reservar mi cupo</a>
          </div>
          <details className="mobile-menu">
            <summary aria-label="Abrir navegación"><span></span><span></span><span></span></summary>
            <nav aria-label="Navegación móvil">
              <a href="#capacitaciones">Programas</a>
              <a href="#participantes">Quiénes pueden participar</a>
              <a href="#registro">Reservar mi cupo</a>
            </nav>
          </details>
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
          <div><span className="fact-icon"><RegistrationIcon /></span><p><strong>Un solo registro</strong><small>Participa en uno o ambos programas</small></p></div>
        </div>
      </section>

      <section className="events section" id="capacitaciones">
        <div className="container">
          <div className="section-heading event-heading">
            <div><p className="eyebrow">Dos programas. Una sola inscripción.</p><h2>Elige el programa que tu negocio necesita.</h2></div>
            <p>Puedes participar en el Programa Financiero, en el Programa de Marketing o aprovechar ambos.</p>
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
                <a className="text-link" href="#registro">Inscribirme en este programa <span aria-hidden="true">→</span></a>
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
                <a className="text-link" href="#registro">Inscribirme en este programa <span aria-hidden="true">→</span></a>
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
            <img className="registration-logo" src="/images/ace-official-white.png" alt="ACE" />
            <p className="eyebrow light">Capacitación Empresarial Online Gratuita</p>
            <h2>Reserva tu lugar</h2>
            <p>Completa el formulario para asegurar tu participación. Podrás seleccionar si deseas asistir al Programa Financiero, al Programa de Marketing o a ambos.</p>
            <div className="trust-note"><span aria-hidden="true">✓</span><p><strong>Tu registro es completamente gratuito.</strong> Una vez completes el formulario, recibirás por correo electrónico la confirmación y el enlace para conectarte a la capacitación.</p></div>
          </div>

          <form className="registration-form">
            <div className="form-title"><span>Formulario de registro</span><strong>GRATUITO</strong></div>
            <label>Nombre completo<input name="fullName" type="text" autoComplete="name" required /></label>
            <div className="form-row">
              <label>Correo electrónico<input name="email" type="email" autoComplete="email" required /></label>
              <label>Número de teléfono<input name="phone" type="tel" autoComplete="tel" required /></label>
            </div>
            <div className="form-row">
              <label>ZIP Code<input name="zipCode" type="text" inputMode="numeric" autoComplete="postal-code" required /></label>
              <label>Nombre de la empresa <small>(opcional)</small><input name="company" type="text" autoComplete="organization" /></label>
            </div>
            <label>¿En qué etapa se encuentra tu negocio?
              <select name="businessStage" defaultValue="" required>
                <option value="" disabled>Selecciona una opción</option>
                <option>Tengo una idea de negocio</option>
                <option>Estoy comenzando</option>
                <option>Mi negocio está en operación</option>
                <option>Mi negocio está en crecimiento</option>
              </select>
            </label>
            <label>¿Qué describe mejor tu negocio o proyecto?<textarea name="businessDescription" rows={3} required></textarea></label>
            <label>¿A cuál programa deseas asistir?
              <select name="eventSelection" defaultValue="" required>
                <option value="" disabled>Selecciona una opción</option>
                <option>Programa Financiero</option>
                <option>Programa de Marketing</option>
                <option>Ambos programas</option>
              </select>
            </label>
            <button className="button button-light" type="button">Reservar Mi Cupo Gratis <span aria-hidden="true">→</span></button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <img src="/images/ace-official-white.png" alt="ACE" />
          <p>Capital + Asesoría + Conexiones para emprendedores</p>
          <a href="#top">Volver arriba <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </main>
  );
}
