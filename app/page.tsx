import RegistrationForm from "./RegistrationForm";

const financialTopics = [
  "Organiza las finanzas de tu negocio",
  "Toma decisiones financieras con mayor confianza",
  "Conoce cómo fortalecer el perfil financiero de tu negocio",
  "Prepárate para acceder a préstamos e inversión",
];

const marketingTopics = [
  "Utiliza herramientas de IA para ahorrar tiempo y aumentar la productividad",
  "Mejora la atención al cliente y optimiza tus procesos",
  "Aprende a atraer más clientes con estrategias digitales",
  "Descubre cómo hacer crecer tu marca utilizando herramientas digitales",
];

const audiences = [
  "Dueños de negocio",
  "Emprendedores",
  "Personas con una idea de negocio",
  "Empresas que desean crecer de forma estratégica",
];

const siteUrl = "https://ace-capital-coaching.diego681936.chatgpt.site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Access to Capital for Entrepreneurs (ACE)",
      alternateName: "ACE",
      url: "https://aceloans.org/",
      logo: `${siteUrl}/images/ace-green-original.png`,
      description: "Capital, asesoría y conexiones para emprendedores y pequeños negocios.",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#carolina-ramon`,
      name: "Carolina Ramon",
      jobTitle: "Instructora de finanzas empresariales y acceso a capital",
      image: `${siteUrl}/images/carolina-ramon-instructora-finanzas-3lc.webp`,
      worksFor: { "@type": "Organization", name: "3LC Enterprises", url: "https://3lcfinancialservices.com/" },
      url: `${siteUrl}/#carolina-ramon`,
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#diego-sabogal`,
      name: "Diego Sabogal",
      jobTitle: "Instructor de marketing digital e inteligencia artificial",
      image: `${siteUrl}/images/diego-sabogal-instructor-marketing-sabtrix.webp`,
      sameAs: ["https://www.linkedin.com/in/diegofsabogal", "https://sabtrix.com/"],
      worksFor: { "@type": "Organization", name: "Sabtrix LLC", url: "https://sabtrix.com/" },
      url: `${siteUrl}/#diego-sabogal`,
    },
    {
      "@type": "Event",
      "@id": `${siteUrl}/#programa-financiero`,
      name: "Programa Financiero: Finanzas y Acceso a Capital para Emprendedores",
      description: "Capacitación empresarial online gratuita en español para organizar las finanzas, fortalecer el perfil financiero y prepararse para acceder a capital.",
      startDate: "2026-08-18T10:00:00-04:00",
      endDate: "2026-08-18T12:00:00-04:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      location: { "@type": "VirtualLocation", url: `${siteUrl}/#registro` },
      image: [`${siteUrl}/images/carolina-ramon-instructora-finanzas-3lc.webp`],
      organizer: { "@id": `${siteUrl}/#organization` },
      performer: { "@id": `${siteUrl}/#carolina-ramon` },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock", url: `${siteUrl}/#registro` },
      inLanguage: "es-US",
    },
    {
      "@type": "Event",
      "@id": `${siteUrl}/#programa-marketing`,
      name: "Programa de Marketing Digital e Inteligencia Artificial para Emprendedores",
      description: "Capacitación empresarial online gratuita en español para atraer clientes, mejorar procesos y hacer crecer una marca con marketing digital e inteligencia artificial.",
      startDate: "2026-08-20T10:00:00-04:00",
      endDate: "2026-08-20T12:00:00-04:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      location: { "@type": "VirtualLocation", url: `${siteUrl}/#registro` },
      image: [`${siteUrl}/images/diego-sabogal-instructor-marketing-sabtrix.webp`],
      organizer: { "@id": `${siteUrl}/#organization` },
      performer: { "@id": `${siteUrl}/#diego-sabogal` },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock", url: `${siteUrl}/#registro` },
      inLanguage: "es-US",
    },
  ],
};

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <a className="skip-link" href="#main-content">Ir al contenido</a>

      <header className="site-header" id="top">
        <div className="container nav-wrap">
          <a className="brand brand-image" href="https://aceloans.org/" target="_blank" rel="noreferrer" aria-label="Visitar el sitio web de ACE">
            <img src="/images/ace-green-original.png" alt="ACE" />
          </a>
          <div className="nav-actions">
            <a className="button button-small" href="#registro">REGISTRARME GRATIS</a>
          </div>
        </div>
      </header>

      <section className="hero" id="main-content">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow light"><span className="nowrap">Capacitación empresarial gratis</span> <span aria-hidden="true">•</span> <span className="nowrap">100% online</span></p>
            <h1>Dos capacitaciones online y gratuitas para hacer crecer tu negocio</h1>
            <p className="hero-caption">Aprende herramientas prácticas de finanzas, acceso a capital, marketing e Inteligencia Artificial. Participa desde cualquier lugar y elige uno o ambos programas sin costo.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#registro">RESERVAR MI CUPO GRATIS <span aria-hidden="true">→</span></a>
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
          <div><span className="fact-icon"><OnlineIcon /></span><p><strong>100% ONLINE</strong><small>Conéctate desde cualquier lugar</small></p></div>
          <div><span className="fact-icon"><FreeIcon /></span><p><strong>TOTALMENTE GRATIS</strong><small>Participa sin ningún costo</small></p></div>
          <div><span className="fact-icon"><RegistrationIcon /></span><p><strong>UNA SOLA RESERVA</strong><small>Elige uno o ambos programas</small></p></div>
        </div>
      </section>

      <section className="events section" id="capacitaciones">
        <div className="container">
          <div className="section-heading event-heading">
            <div><p className="eyebrow"><span className="nowrap">Dos programas online</span> <span aria-hidden="true">•</span> <span className="nowrap">Una sola reserva gratis</span></p><h2>Elige el programa que tu negocio necesita</h2></div>
            <p>Participa gratis y desde cualquier lugar. Puedes reservar el Programa Financiero, el Programa de Marketing o ambos.</p>
          </div>

          <div className="event-grid">
            <article className="event-card event-finance" id="programa-financiero">
              <figure className="event-photo" id="carolina-ramon">
                <img src="/images/carolina-ramon-instructora-finanzas-3lc.webp" alt="Carolina Ramon, instructora de finanzas empresariales y acceso a capital de 3LC Enterprises" width="1914" height="822" loading="lazy" />
              </figure>
              <div className="event-card-body">
                <div className="program-label"><span><ProgramIcon type="finance" /></span> Evento online y gratuito</div>
                <h3>Programa Financiero</h3>
                <p className="instructor-name"><strong>Carolina Ramon</strong><span>Instructora · Principal, 3LC Enterprises</span></p>
                <div className="event-meta"><div><small>FECHA</small><strong>Martes, 18 de agosto de 2026</strong></div><div><small>HORARIO</small><strong>10:00 AM – 12:00 PM (ET)</strong></div><p className="event-live-note">En vivo <span aria-hidden="true">•</span> 100% online <span aria-hidden="true">•</span> Sin costo</p></div>
                <p className="event-description">Organiza las finanzas de tu negocio, toma mejores decisiones y fortalece tu perfil para acceder a nuevas oportunidades de capital.</p>
                <p className="topics-title">Lo que aprenderás</p>
                <ul>{financialTopics.map(topic => <li key={topic}>{topic}</li>)}</ul>
                <a className="button event-cta" href="#registro">REGISTRARME GRATIS <span aria-hidden="true">→</span></a>
              </div>
            </article>

            <article className="event-card event-marketing" id="programa-marketing">
              <figure className="event-photo" id="diego-sabogal">
                <img src="/images/diego-sabogal-instructor-marketing-sabtrix.webp" alt="Diego Sabogal, instructor de marketing digital e inteligencia artificial de Sabtrix LLC" width="1914" height="822" loading="lazy" />
              </figure>
              <div className="event-card-body">
                <div className="program-label"><span><ProgramIcon type="marketing" /></span> Evento online y gratuito</div>
                <h3>Programa de Marketing</h3>
                <p className="instructor-name"><strong>Diego Sabogal</strong><span>Instructor · Principal, Sabtrix LLC</span></p>
                <div className="event-meta"><div><small>FECHA</small><strong>Jueves, 20 de agosto de 2026</strong></div><div><small>HORARIO</small><strong>10:00 AM – 12:00 PM (ET)</strong></div><p className="event-live-note">En vivo <span aria-hidden="true">•</span> 100% online <span aria-hidden="true">•</span> Sin costo</p></div>
                <p className="event-description">Aprende a utilizar Inteligencia Artificial y estrategias digitales para ahorrar tiempo, atraer clientes y hacer crecer tu marca.</p>
                <p className="topics-title">Lo que aprenderás</p>
                <ul>{marketingTopics.map(topic => <li key={topic}>{topic}</li>)}</ul>
                <a className="button event-cta" href="#registro">REGISTRARME GRATIS <span aria-hidden="true">→</span></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="audience section" id="participantes">
        <div className="container audience-grid">
          <div className="audience-copy">
            <p className="eyebrow light"><span className="nowrap">Evento online y gratuito</span> para emprendedores</p>
            <h2>¿Quiénes pueden participar?</h2>
            <div className="audience-list">
              {audiences.map((audience) => <div key={audience}><span aria-hidden="true">✓</span><strong>{audience}</strong></div>)}
            </div>
            <p className="audience-online-note">No importa dónde te encuentres. Solo necesitas conexión a internet para participar.</p>
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
            <p className="eyebrow light"><span className="nowrap">Registro gratis</span> <span aria-hidden="true">•</span> <span className="nowrap">Evento 100% online</span></p>
            <h2>Reserva gratis tu cupo online</h2>
            <p>Elige el Programa Financiero, el Programa de Marketing o ambos. Completa el registro en aproximadamente 2 minutos y recibe por email y SMS el enlace para conectarte.</p>
            <div className="trust-note"><span aria-hidden="true">✓</span><p><strong>Tu registro y participación son completamente gratuitos.</strong> No se solicitará información de pago.</p></div>
          </div>
          <RegistrationForm />
        </div>
      </section>

      <section className="community section" id="comunidad">
        <div className="container">
          <div className="community-heading">
            <div>
              <p className="eyebrow">Eventos anteriores</p>
              <h2>Así llegamos a nuestra comunidad.</h2>
            </div>
            <div className="community-intro">
              <p>Creemos en el poder de aprender, conectar y crecer juntos. En cada encuentro, ACE acerca herramientas, orientación y nuevas oportunidades a emprendedores y dueños de negocios.</p>
              <span>Conexiones reales · Aprendizaje práctico · Comunidad</span>
            </div>
          </div>

          <div className="community-gallery">
            <figure className="community-photo community-photo-welcome">
              <img src="/images/ace-community-event-welcome.webp" alt="Representante de ACE dando la bienvenida a participantes de un evento comunitario" />
              <figcaption>Orientación cercana para cada emprendedor</figcaption>
            </figure>
            <figure className="community-photo community-photo-connections">
              <img src="/images/ace-community-event-connections.webp" alt="Participantes conectando durante un evento de ACE" />
              <figcaption>Espacios para crear conexiones que impulsan negocios</figcaption>
            </figure>
            <figure className="community-photo community-photo-group">
              <img src="/images/ace-community-event-group.webp" alt="Emprendedores y aliados reunidos durante un evento de ACE" />
              <figcaption>Construyendo oportunidades junto a nuestra comunidad</figcaption>
            </figure>
            <figure className="community-photo community-photo-speaker">
              <img src="/images/ace-community-event-speaker.webp" alt="Representante de ACE compartiendo conocimientos con emprendedores durante un evento" />
              <figcaption>Conocimiento y orientación para impulsar cada negocio</figcaption>
            </figure>
          </div>
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
        <div className="disclosure-bar">
          <div className="container disclosure-inner">
            <div>
              <h2>Privacy &amp; Disclaimer</h2>
              <p>ACE is not affiliated with Facebook or Meta Platforms, Inc. This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is not endorsed by Facebook in any way.</p>
              <p>All information collected is handled in accordance with our <a href="https://aceloans.org/privacy-policy/" target="_blank" rel="noreferrer">Privacy Policy</a>. We respect your privacy and do not share your information with third parties without consent.</p>
            </div>
            <nav className="legal-links" aria-label="Políticas legales de ACE">
              <a href="https://aceloans.org/privacy-policy/" target="_blank" rel="noreferrer">Privacy Policy</a>
              <a href="https://aceloans.org/terms-of-service/" target="_blank" rel="noreferrer">Terms of Service</a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}
