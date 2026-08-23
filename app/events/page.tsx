import type { Metadata } from "next";
import RegistrationForm from "../RegistrationForm";

const siteUrl = "https://ace-capital-coaching.diego681936.chatgpt.site";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Georgia+Chamber%27s+Center+for+Rural+Prosperity%2C+1001+Love+Ave%2C+Tifton%2C+GA+31794";
const calendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Programa%20Intensivo%20de%20Estrategia%20Empresarial&dates=20260827T100000%2F20260827T120000&ctz=America%2FNew_York&details=Capacitaci%C3%B3n%20empresarial%20gratuita%20y%20presencial%20para%20due%C3%B1os%20de%20negocios%20con%20al%20menos%20dos%20a%C3%B1os%20de%20operaci%C3%B3n.&location=Georgia%20Chamber%27s%20Center%20for%20Rural%20Prosperity%2C%201001%20Love%20Ave%2C%20Tifton%2C%20GA%2031794";

const topics = [
  { title: "Modelo de negocio", benefit: "Aclara qué vendes, para quién y por qué deberían elegirte.", image: "/images/ace-story-open.webp", alt: "Dueñas de un pequeño negocio abiertas al público", items: ["Fortalecer tu propuesta de valor", "Alinear tu oferta con las necesidades del mercado"] },
  { title: "Operaciones y gestión financiera", benefit: "Organiza mejor tus procesos, costos y decisiones financieras.", image: "/images/ace-story-grocery.webp", alt: "Dueños de negocio revisando la operación de su tienda", items: ["Mejorar la organización empresarial", "Controlar costos y planificar mejor las finanzas"] },
  { title: "Mercadeo digital y crecimiento", benefit: "Convierte tu presencia digital en oportunidades para atraer clientes.", image: "/images/ace-story-retail.webp", alt: "Dueño de negocio trabajando con herramientas digitales", items: ["Fortalecer tu presencia digital", "Atraer clientes e impulsar las ventas"] },
];

const audiences = [
  "Dueños de negocios con mínimo dos años de operación",
  "Empresas que necesitan organizar mejor sus operaciones",
  "Negocios que quieren controlar costos y mejorar sus finanzas",
  "Emprendedores que desean atraer más clientes y crecer",
];

export const metadata: Metadata = {
  title: "Programa Intensivo de Estrategia Empresarial en Tifton | ACE",
  description: "Capacitación empresarial gratuita y presencial en Tifton para dueños de negocios con al menos dos años de operación. Jueves 27 de agosto de 2026.",
  alternates: { canonical: "/events" },
  openGraph: {
    type: "website", locale: "es_US", url: "/events",
    title: "Programa Intensivo de Estrategia Empresarial en Tifton",
    description: "Fortalece tu modelo de negocio, organiza tus finanzas y atrae más clientes. Evento presencial y gratuito de ACE.",
    images: [{ url: "/images/tifton-business-classroom.jpg", alt: "Clase presencial de estrategia empresarial para dueños de negocios" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Programa Intensivo de Estrategia Empresarial en Tifton",
    description: "Capacitación presencial y gratuita para negocios con mínimo dos años de operación.",
    images: ["/images/tifton-business-classroom.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org", "@type": "Event",
  name: "Programa Intensivo de Estrategia Empresarial",
  description: "Capacitación empresarial gratuita para dueños de negocios con al menos dos años de operación.",
  startDate: "2026-08-27T10:00:00-04:00", endDate: "2026-08-27T12:00:00-04:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place", name: "Georgia Chamber’s Center for Rural Prosperity",
    address: { "@type": "PostalAddress", streetAddress: "1001 Love Ave", addressLocality: "Tifton", addressRegion: "GA", postalCode: "31794", addressCountry: "US" },
  },
  image: [`${siteUrl}/images/tifton-business-classroom.jpg`],
  organizer: { "@type": "Organization", name: "ACE", url: "https://aceloans.org/" },
  sponsor: { "@type": "Organization", name: "3LC Financial Services", url: "https://3lcfinancialservices.com/" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock", url: `${siteUrl}/events#registro` },
  inLanguage: "es-US",
};

function LocationIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
}

function FreeIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7" /><path d="M2 7h20v5H2zM12 7v14M12 7H7.5a2.5 2.5 0 1 1 2.5-4c1.2.8 2 4 2 4ZM12 7h4.5A2.5 2.5 0 1 0 14 3c-1.2.8-2 4-2 4Z" /></svg>;
}

function CalendarIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></svg>;
}

export default function EventsPage() {
  return (
    <main className="events-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <a className="skip-link" href="#main-content">Ir al contenido</a>

      <header className="site-header" id="top">
        <div className="container nav-wrap">
          <a className="brand brand-image" href="https://aceloans.org/" target="_blank" rel="noreferrer" aria-label="Visitar el sitio web de ACE"><img src="/images/ace-green-original.png" alt="ACE" /></a>
          <div className="nav-actions"><a className="button button-small" href="#registro">REGÍSTRATE AQUÍ</a></div>
        </div>
      </header>

      <section className="hero events-hero" id="main-content">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow light"><span className="nowrap">Presencial en Tifton</span> <span aria-hidden="true">•</span> <span className="nowrap">Capacitación gratuita</span></p>
            <h1>Tu negocio puede crecer con una estrategia más clara.</h1>
            <p className="hero-caption">Participa en el Programa Intensivo de Estrategia Empresarial y aprende herramientas prácticas para fortalecer tu negocio, organizar tus finanzas y atraer más clientes.</p>
            <div className="hero-actions"><a className="button button-light" href="#registro">REGÍSTRATE AQUÍ <span aria-hidden="true">→</span></a><a className="hero-link" href="#programa">Ver detalles del programa</a></div>
            <p className="eligibility-note">Para dueños de negocios con mínimo dos años de operación.</p>
          </div>
          <div className="hero-visual events-hero-visual" role="img" aria-label="Dueños de pequeños negocios participando en una capacitación empresarial de ACE"><div className="hero-badge events-date-badge"><span>27</span><strong>agosto<br />Tifton, GA</strong></div></div>
        </div>
      </section>

      <section className="alert-strip" aria-label="Información principal del evento">
        <div className="container facts-grid">
          <div><span className="fact-icon"><LocationIcon /></span><p><strong>PRESENCIAL EN TIFTON</strong><a className="fact-link" href={mapsUrl} target="_blank" rel="noreferrer">Abrir dirección en Maps ↗</a></p></div>
          <div><span className="fact-icon"><FreeIcon /></span><p><strong>TOTALMENTE GRATIS</strong><small>Participa sin ningún costo</small></p></div>
          <div><span className="fact-icon"><CalendarIcon /></span><p><strong>JUEVES, 27 DE AGOSTO</strong><a className="fact-link" href={calendarUrl} target="_blank" rel="noreferrer">Guardar en Google Calendar ↗</a></p></div>
        </div>
      </section>

      <section className="events section" id="programa">
        <div className="container">
          <div className="experience-heading">
            <div><p className="eyebrow">Lo que trabajarás durante la clase</p><h2>Tres temas para fortalecer tu negocio.</h2></div>
            <div className="experience-intro"><p>Cada bloque responde una pregunta concreta: ¿tu oferta está clara?, ¿tu negocio está organizado? y ¿estás atrayendo suficientes clientes?</p><span>Una clase práctica · Tres especialistas · Cupo gratuito</span></div>
          </div>

          <div className="event-quick-actions" aria-label="Detalles y acciones del evento">
            <div className="quick-detail"><span className="quick-icon"><CalendarIcon /></span><div><small>CUÁNDO</small><strong>Jueves, 27 de agosto</strong><p>10:00 a. m. – 12:00 p. m.</p></div></div>
            <div className="quick-detail"><span className="quick-icon"><LocationIcon /></span><div><small>DÓNDE</small><strong>Georgia Chamber’s Center for Rural Prosperity</strong><p>1001 Love Ave, Tifton, GA 31794</p></div></div>
            <div className="quick-links"><a href={calendarUrl} target="_blank" rel="noreferrer">Agregar al calendario</a><a href={mapsUrl} target="_blank" rel="noreferrer">Cómo llegar ↗</a></div>
          </div>

          <div className="module-grid" id="programa-intensivo">
            {topics.map((topic, index) => (
              <article className={`module-card module-card-${index + 1}`} key={topic.title}>
                <figure className="module-image"><img src={topic.image} alt={topic.alt} loading="lazy" /><span>{index + 1}</span></figure>
                <div className="module-content"><small>TEMA {index + 1}</small><h3>{topic.title}</h3><p>{topic.benefit}</p><ul>{topic.items.map(item => <li key={item}>{item}</li>)}</ul></div>
              </article>
            ))}
          </div>

          <div className="experience-cta">
            <div><p className="eyebrow">Jueves 27 de agosto · Tifton, GA</p><h3>Sal de la clase con próximos pasos claros.</h3><span>Para dueños de negocios con mínimo dos años de operación.</span></div>
            <a className="button" href="#registro">RESERVAR MI CUPO GRATIS <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="audience section" id="participantes">
        <div className="container audience-grid">
          <div className="audience-copy"><p className="eyebrow light">Diseñado para pequeños negocios</p><h2>Este programa es para ti si…</h2><div className="audience-list">{audiences.map(audience => <div key={audience}><span aria-hidden="true">✓</span><strong>{audience}</strong></div>)}</div><p className="audience-online-note">El requisito principal es que tu negocio lleve al menos dos años en operación.</p></div>
          <div className="audience-photo events-audience-photo" role="img" aria-label="Propietarios de pequeños negocios aprendiendo y conectando en comunidad"><div className="photo-badge"><strong>2+</strong><span>años operando</span></div></div>
        </div>
      </section>

      <section className="registration section" id="registro">
        <div className="container registration-grid">
          <div className="registration-copy">
            <a className="registration-logo-link" href="https://aceloans.org/" target="_blank" rel="noreferrer" aria-label="Visitar el sitio web de ACE"><img className="registration-logo" src="/images/ace-white-original.png" alt="ACE" /></a>
            <p className="eyebrow light"><span className="nowrap">Registro gratis</span> <span aria-hidden="true">•</span> <span className="nowrap">Presencial en Tifton</span></p>
            <h2>Regístrate aquí y reserva tu cupo</h2>
            <p>Completa el formulario en aproximadamente dos minutos. Recibirás la confirmación y los recordatorios del evento por correo electrónico y SMS.</p>
            <div className="event-contact-card"><strong>¿Necesitas ayuda?</strong><a href="tel:+12293749665">229-374-9665</a><a href="mailto:bas@aceloans.org">bas@aceloans.org</a></div>
            <div className="trust-note"><span aria-hidden="true">✓</span><p><strong>Tu registro y participación son completamente gratuitos.</strong> No se solicitará información de pago.</p></div>
          </div>
          <RegistrationForm variant="tifton" />
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-main"><a className="footer-ace" href="https://aceloans.org/" target="_blank" rel="noreferrer"><img src="/images/ace-white-original.png" alt="ACE" /></a><p>Organiza ACE · En colaboración con 3LC Financial Services</p><a className="back-to-top" href="#top">Volver arriba <span aria-hidden="true">↑</span></a></div>
        <div className="sponsors-bar"><div className="container sponsors-inner"><p>En colaboración con</p><div className="sponsor-logos"><a className="sponsor-logo sponsor-3lc" href="https://3lcfinancialservices.com/" target="_blank" rel="noreferrer"><img src="/images/three-lc-sponsor.png" alt="3LC Financial Services" /></a></div></div></div>
        <div className="disclosure-bar"><div className="container disclosure-inner"><div><h2>Privacidad</h2><p>ACE no está afiliada con Facebook ni Meta Platforms, Inc. La información recopilada se maneja de acuerdo con nuestra <a href="https://aceloans.org/privacy-policy/" target="_blank" rel="noreferrer">Política de privacidad</a>.</p></div><nav className="legal-links" aria-label="Políticas legales de ACE"><a href="https://aceloans.org/privacy-policy/" target="_blank" rel="noreferrer">Privacy Policy</a><a href="https://aceloans.org/terms-of-service/" target="_blank" rel="noreferrer">Terms of Service</a></nav></div></div>
      </footer>
    </main>
  );
}
