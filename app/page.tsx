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

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">Ir al contenido</a>

      <div className="utility-bar">
        <div className="container utility-inner">
          <span>Centro de Negocios para Mujeres de ACE</span>
          <span>Capacitación empresarial en español</span>
        </div>
      </div>

      <header className="site-header" id="top">
        <div className="container nav-wrap">
          <a className="brand brand-image" href="#top" aria-label="ACE Women’s Business Center, inicio">
            <img src="/images/ace-wbc-official-green.jpg" alt="ACE Women’s Business Center" />
          </a>
          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#capacitaciones">Capacitaciones</a>
            <a href="#participantes">Quiénes pueden participar</a>
            <a href="#registro">Registro</a>
          </nav>
          <div className="nav-actions">
            <a className="button button-small" href="#registro">Reservar mi cupo</a>
          </div>
          <details className="mobile-menu">
            <summary aria-label="Abrir navegación"><span></span><span></span><span></span></summary>
            <nav aria-label="Navegación móvil">
              <a href="#capacitaciones">Capacitaciones</a>
              <a href="#participantes">Quiénes pueden participar</a>
              <a href="#registro">Reservar mi cupo</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" id="main-content">
        <div className="hero-image" role="img" aria-label="Dos emprendedores dentro de su negocio"></div>
        <div className="hero-scrim"></div>
        <div className="container hero-content">
          <img className="hero-logo" src="/images/ace-official-white.png" alt="ACE" />
          <p className="eyebrow light">Capacitación Empresarial Online Gratuita</p>
          <h1>El siguiente paso para hacer crecer tu negocio comienza aquí.</h1>
          <p className="hero-caption">Aprende herramientas prácticas de finanzas, marketing e Inteligencia Artificial para fortalecer tu empresa y tomar mejores decisiones.</p>
          <a className="button button-light" href="#registro">Reservar Mi Cupo Gratis <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="alert-strip" aria-label="Información principal del evento">
        <div className="container facts-grid">
          <div><span aria-hidden="true">01</span><strong>100% Online</strong></div>
          <div><span aria-hidden="true">02</span><strong>Gratuito</strong></div>
          <div><span aria-hidden="true">03</span><strong>Un solo registro para participar en uno o ambos eventos.</strong></div>
        </div>
      </section>

      <section className="events section" id="capacitaciones">
        <div className="container">
          <div className="section-heading event-heading">
            <div><p className="eyebrow">Capacitación Empresarial Online Gratuita</p><h2>¿Qué aprenderás?</h2></div>
            <p>Un solo registro para participar en uno o ambos eventos.</p>
          </div>

          <div className="event-grid">
            <article className="event-card event-finance">
              <div className="event-photo" role="img" aria-label="Emprendedores trabajando juntos en su negocio"></div>
              <div className="event-card-body">
                <div className="event-number">01</div>
                <h3>Ciclo Financiero</h3>
                <div className="event-meta"><strong>Martes, 18 de agosto de 2026</strong><span>10:00 AM – 12:00 PM (ET)</span></div>
                <p className="event-description">Aprende a comprender mejor las finanzas de tu negocio y conoce herramientas para planificar su crecimiento.</p>
                <ul>{financialTopics.map(topic => <li key={topic}>{topic}</li>)}</ul>
                <a className="text-link" href="#registro">Reservar Mi Cupo Gratis <span aria-hidden="true">→</span></a>
              </div>
            </article>

            <article className="event-card event-marketing">
              <div className="event-photo" role="img" aria-label="Dueña de negocio usando tecnología en su tienda"></div>
              <div className="event-card-body">
                <div className="event-number">02</div>
                <h3>Ciclo de Marketing</h3>
                <div className="event-meta"><strong>Jueves, 20 de agosto de 2026</strong><span>10:00 AM – 12:00 PM (ET)</span></div>
                <p className="event-description">Aprende estrategias para atraer clientes, generar oportunidades comerciales y aprovechar la Inteligencia Artificial en tu negocio.</p>
                <ul>{marketingTopics.map(topic => <li key={topic}>{topic}</li>)}</ul>
                <a className="text-link" href="#registro">Reservar Mi Cupo Gratis <span aria-hidden="true">→</span></a>
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
              {audiences.map((audience, index) => <div key={audience}><span>0{index + 1}</span><strong>{audience}</strong></div>)}
            </div>
          </div>
          <div className="audience-photo" role="img" aria-label="Dos empresarias frente a su negocio"><div className="photo-badge"><strong>2</strong><span>eventos virtuales</span></div></div>
        </div>
      </section>

      <section className="registration section" id="registro">
        <div className="container registration-grid">
          <div className="registration-copy">
            <img className="registration-logo" src="/images/ace-official-white.png" alt="ACE" />
            <p className="eyebrow light">Capacitación Empresarial Online Gratuita</p>
            <h2>Reserva tu lugar</h2>
            <p>Completa el formulario para asegurar tu participación. Podrás seleccionar si deseas asistir al Ciclo Financiero, al Ciclo de Marketing o a ambos eventos.</p>
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
            <label>¿A cuál capacitación deseas asistir?
              <select name="eventSelection" defaultValue="" required>
                <option value="" disabled>Selecciona una opción</option>
                <option>Ciclo Financiero</option>
                <option>Ciclo de Marketing</option>
                <option>Ambos eventos</option>
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
