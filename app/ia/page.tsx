import type { Metadata } from "next";
import RegistrationForm from "../RegistrationForm";

const topics = [
  "Herramientas de IA para ahorrar tiempo y trabajar con mayor productividad",
  "Creación de contenido práctico para redes sociales y campañas digitales",
  "Estrategias de marketing digital para atraer y conectar con más clientes",
  "Aplicaciones de IA para impulsar el crecimiento y posicionamiento de tu marca",
];

const audiences = [
  "Dueños de negocio",
  "Emprendedores",
  "Personas con una idea de negocio",
  "Empresas que desean crecer de forma estratégica",
];

const siteUrl = "https://ace-capital-coaching.diego681936.chatgpt.site";
const pageUrl = `${siteUrl}/ia`;

export const metadata: Metadata = {
  title: "Impulsa tu negocio con IA y Marketing Digital | ACE",
  description: "Evento online gratuito de ACE con Diego Sabogal sobre herramientas de IA, creación de contenido, marketing digital, productividad y crecimiento de marca. Miércoles 2 de septiembre de 2026, de 9:00 a 10:00 AM ET.",
  alternates: { canonical: "/ia", languages: { "es-US": "/ia" } },
  openGraph: {
    type: "website",
    locale: "es_US",
    url: "/ia",
    title: "Impulsa tu negocio con IA y Marketing Digital",
    description: "Capacitación gratuita de ACE con Diego Sabogal · 2 de septiembre · 9:00 AM ET.",
    images: [{ url: "/images/diego-sabogal-instructor-marketing-sabtrix.webp", width: 1914, height: 822, alt: "Diego Sabogal, instructor de IA y marketing digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impulsa tu negocio con IA y Marketing Digital",
    description: "Evento gratuito de ACE con Diego Sabogal · 2 de septiembre · 9:00 AM ET.",
    images: ["/images/diego-sabogal-instructor-marketing-sabtrix.webp"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${pageUrl}#organization`,
      name: "Access to Capital for Entrepreneurs (ACE)",
      alternateName: "ACE",
      url: "https://aceloans.org/",
      logo: `${siteUrl}/images/ace-green-original.png`,
    },
    {
      "@type": "Person",
      "@id": `${pageUrl}#diego-sabogal`,
      name: "Diego Sabogal",
      jobTitle: "Instructor de marketing digital e inteligencia artificial",
      image: `${siteUrl}/images/diego-sabogal-instructor-marketing-sabtrix.webp`,
      sameAs: ["https://www.linkedin.com/in/diegofsabogal", "https://sabtrix.com/"],
      worksFor: { "@type": "Organization", name: "Sabtrix LLC", url: "https://sabtrix.com/" },
    },
    {
      "@type": "Event",
      "@id": `${pageUrl}#evento-ia`,
      name: "Impulsa tu negocio con IA y Marketing Digital",
      description: "Evento gratuito de ACE sobre herramientas de IA, creación de contenido, marketing digital, productividad y crecimiento de marca.",
      startDate: "2026-09-02T09:00:00-04:00",
      endDate: "2026-09-02T10:00:00-04:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      location: { "@type": "VirtualLocation", url: `${pageUrl}#registro` },
      image: [`${siteUrl}/images/diego-sabogal-instructor-marketing-sabtrix.webp`],
      organizer: { "@id": `${pageUrl}#organization` },
      performer: { "@id": `${pageUrl}#diego-sabogal` },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock", url: `${pageUrl}#registro` },
      inLanguage: "es-US",
    },
  ],
};

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5" /></svg>;
}

function CalendarIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M8 3v4M16 3v4M3 10h18" /></svg>;
}

function ClockIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>;
}

function LaptopIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="12" rx="2" /><path d="M2 20h20M9 20v-2h6v2" /></svg>;
}

function SparkIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.5 5.2L19 9l-5.5 1.8L12 16l-1.5-5.2L5 9l5.5-1.8L12 2Z" /><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" /></svg>;
}

export default function IAPage() {
  return (
    <main className="ia-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <a className="skip-link" href="#main-content">Ir al contenido</a>

      <header className="ia-header" id="top">
        <div className="ia-shell ia-nav">
          <a className="ia-brand" href="https://aceloans.org/" target="_blank" rel="noreferrer" aria-label="Visitar el sitio web de ACE"><img src="/images/ace-white-original.png" alt="ACE" /></a>
          <nav className="ia-nav-links" aria-label="Navegación del evento">
            <a href="#aprendizaje">Qué aprenderás</a>
            <a href="#instructor">Instructor</a>
          </nav>
          <a className="ia-button ia-button-small" href="#registro">Reservar cupo <ArrowIcon /></a>
        </div>
      </header>

      <section className="ia-hero" id="main-content">
        <div className="ia-hero-orb ia-hero-orb-one" aria-hidden="true" />
        <div className="ia-hero-orb ia-hero-orb-two" aria-hidden="true" />
        <div className="ia-shell ia-hero-grid">
          <div className="ia-hero-copy">
            <div className="ia-live-pill"><span /> Evento en vivo · Acceso gratuito</div>
            <h1>Haz crecer tu negocio con <em>IA</em> y marketing digital.</h1>
            <p>Una sesión práctica con Diego Sabogal para crear mejor contenido, ahorrar tiempo y convertir herramientas digitales en crecimiento real.</p>
            <div className="ia-hero-actions">
              <a className="ia-button ia-button-primary" href="#registro">Quiero mi cupo gratis <ArrowIcon /></a>
              <a className="ia-text-link" href="#aprendizaje">Ver lo que aprenderás <span aria-hidden="true">↓</span></a>
            </div>
            <div className="ia-event-details" aria-label="Detalles del evento">
              <div><CalendarIcon /><span><small>FECHA</small><strong>Miércoles, 2 de septiembre</strong></span></div>
              <div><ClockIcon /><span><small>HORA</small><strong>9:00–10:00 AM ET</strong></span></div>
              <div><LaptopIcon /><span><small>MODALIDAD</small><strong>Online · En vivo</strong></span></div>
            </div>
          </div>
          <div className="ia-speaker-visual" id="instructor">
            <div className="ia-image-frame">
              <img src="/images/diego-sabogal-instructor-marketing-sabtrix.webp" alt="Diego Sabogal, instructor de inteligencia artificial y marketing digital" width="1914" height="822" />
              <div className="ia-free-stamp"><strong>GRATIS</strong><span>Evento online</span></div>
            </div>
            <div className="ia-speaker-card">
              <span className="ia-avatar">DS</span>
              <p><small>INSTRUCTOR</small><strong>Diego Sabogal</strong><span>Principal, Sabtrix LLC</span></p>
              <SparkIcon />
            </div>
          </div>
        </div>
      </section>

      <section className="ia-learn" id="aprendizaje">
        <div className="ia-shell">
          <div className="ia-section-head">
            <div><span className="ia-kicker">Contenido práctico</span><h2>Menos teoría.<br />Más herramientas para usar hoy.</h2></div>
            <p>Saldrás con ideas claras y aplicaciones concretas para comenzar a transformar la manera en que promocionas y operas tu negocio.</p>
          </div>
          <div className="ia-topic-grid">
            {topics.map((topic, index) => (
              <article className={`ia-topic-card ia-topic-card-${index + 1}`} key={topic}>
                <span>0{index + 1}</span>
                <SparkIcon />
                <h3>{topic}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ia-fit" id="participantes">
        <div className="ia-shell ia-fit-grid">
          <div className="ia-fit-copy">
            <span className="ia-kicker ia-kicker-light">Creado para negocios reales</span>
            <h2>No necesitas ser experto en tecnología.</h2>
            <p>Solo necesitas un negocio —o una idea— y ganas de trabajar de forma más inteligente.</p>
            <a className="ia-button ia-button-light" href="#registro">Sí, quiero participar <ArrowIcon /></a>
          </div>
          <div className="ia-audience-list">
            {audiences.map((audience, index) => <div key={audience}><span>0{index + 1}</span><strong>{audience}</strong><i aria-hidden="true">✓</i></div>)}
            <p><SparkIcon /> No necesitas experiencia previa con Inteligencia Artificial.</p>
          </div>
        </div>
      </section>

      <section className="ia-registration" id="registro">
        <div className="ia-shell ia-registration-grid">
          <div className="ia-registration-copy">
            <span className="ia-kicker">Reserva tu lugar</span>
            <h2>Una hora puede cambiar cómo trabajas todo el año.</h2>
            <p>Completa el formulario y recibe por email y SMS la información para conectarte.</p>
            <div className="ia-register-summary">
              <div><CalendarIcon /><p><small>CUÁNDO</small><strong>Miércoles 2 de septiembre</strong><span>9:00–10:00 AM ET</span></p></div>
              <div><LaptopIcon /><p><small>DÓNDE</small><strong>Online y en vivo</strong><span>Conéctate desde cualquier lugar</span></p></div>
            </div>
            <div className="ia-safe-note"><span>✓</span><p><strong>100% gratuito.</strong> No solicitamos información de pago.</p></div>
          </div>
          <RegistrationForm variant="ia" />
        </div>
      </section>

      <footer className="ia-footer">
        <div className="ia-shell ia-footer-main">
          <a href="https://aceloans.org/" target="_blank" rel="noreferrer" aria-label="Visitar ACE"><img src="/images/ace-white-original.png" alt="ACE" /></a>
          <p>Capital + Asesoría + Conexiones para emprendedores</p>
          <a href="#top">Volver arriba ↑</a>
        </div>
        <div className="ia-shell ia-footer-bottom">
          <p>ACE no está afiliado con Facebook o Meta Platforms, Inc. La información se gestiona de acuerdo con nuestra <a href="https://aceloans.org/privacy-policy/" target="_blank" rel="noreferrer">Política de Privacidad</a>.</p>
          <nav aria-label="Políticas legales"><a href="https://aceloans.org/privacy-policy/" target="_blank" rel="noreferrer">Privacidad</a><a href="https://aceloans.org/terms-of-service/" target="_blank" rel="noreferrer">Términos</a></nav>
          <div className="ia-presented"><span>Presentado por</span><a href="https://sabtrix.com/" target="_blank" rel="noreferrer"><img src="/images/sabtrix-sponsor.png" alt="Sabtrix" /></a></div>
        </div>
      </footer>
    </main>
  );
}
