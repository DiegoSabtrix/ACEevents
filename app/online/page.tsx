import type { Metadata } from "next";
import RegistrationForm from "../RegistrationForm";

const siteUrl = "https://ace-capital-coaching.diego681936.chatgpt.site";
const calendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Managing%20Money%20%26%20Securing%20Capital&dates=20260901T100000%2F20260901T113000&ctz=America%2FNew_York&details=Free%20online%20session%20for%20small%20business%20owners%20covering%20budgeting%2C%20cash%20flow%2C%20and%20funding%20strategies.&location=Online";

const topics = [
  { title: "Build a practical budget", benefit: "Create a financial plan that reflects how your business actually earns and spends money.", image: "/images/ace-story-grocery.webp", alt: "Black small business owner reviewing her store finances", items: ["Organize income and expenses", "Plan for upcoming business needs"] },
  { title: "Take control of cash flow", benefit: "Understand when money enters and leaves your business so you can make decisions with confidence.", image: "/images/ace-community-tablet.webp", alt: "Latino small business team reviewing business information on a tablet", items: ["Spot cash flow gaps early", "Strengthen day-to-day financial decisions"] },
  { title: "Prepare to secure capital", benefit: "Learn how to evaluate funding options and position your business for its next stage of growth.", image: "/images/ace-story-open.webp", alt: "Diverse American entrepreneurs opening their small business", items: ["Understand common funding strategies", "Identify the right next step for your business"] },
];

const audiences = [
  "Small business owners who want a clearer financial picture",
  "Entrepreneurs preparing to apply for business funding",
  "Owners who need better budgeting and cash flow systems",
  "Growing businesses ready to make smarter financial decisions",
];

export const metadata: Metadata = {
  title: "Managing Money & Securing Capital | Free Online ACE Session",
  description: "Free online session for small business owners on budgeting, cash flow, and funding strategies. September 1, 2026, from 10:00–11:30 a.m. ET.",
  alternates: { canonical: "/online", languages: { "en-US": "/online" } },
  openGraph: {
    type: "website", locale: "en_US", url: "/online",
    title: "Managing Money & Securing Capital",
    description: "Build stronger business finances and learn how to prepare for the capital your business needs to grow.",
    images: [{ url: "/images/ace-community-tablet.webp", alt: "Diverse small business owners learning practical financial strategies" }],
  },
  twitter: { card: "summary_large_image", title: "Managing Money & Securing Capital", description: "A free online ACE session for small business owners.", images: ["/images/ace-community-tablet.webp"] },
};

const structuredData = {
  "@context": "https://schema.org", "@type": "Event",
  name: "Managing Money & Securing Capital",
  description: "A free online session for small business owners covering practical budgeting, cash flow, and funding strategies.",
  startDate: "2026-09-01T10:00:00-04:00", endDate: "2026-09-01T11:30:00-04:00",
  eventStatus: "https://schema.org/EventScheduled", eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  location: { "@type": "VirtualLocation", url: `${siteUrl}/online` },
  image: [`${siteUrl}/images/ace-community-tablet.webp`],
  organizer: { "@type": "Organization", name: "ACE", url: "https://aceloans.org/" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock", url: `${siteUrl}/online#registration` },
  inLanguage: "en-US",
};

function OnlineIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 22h8M12 18v4M8 10h8M12 7v6" /></svg>; }
function FreeIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7" /><path d="M2 7h20v5H2zM12 7v14M12 7H7.5a2.5 2.5 0 1 1 2.5-4c1.2.8 2 4 2 4ZM12 7h4.5A2.5 2.5 0 1 0 14 3c-1.2.8-2 4-2 4Z" /></svg>; }
function CalendarIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></svg>; }

export default function OnlinePage() {
  return (
    <main className="events-page online-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header" id="top"><div className="container nav-wrap"><a className="brand brand-image" href="https://aceloans.org/" target="_blank" rel="noreferrer" aria-label="Visit the ACE website"><img src="/images/ace-green-original.png" alt="ACE" /></a><div className="nav-actions"><a className="button button-small" href="#registration">REGISTER FREE</a></div></div></header>

      <section className="hero events-hero" id="main-content"><div className="container hero-grid">
        <div className="hero-content"><p className="eyebrow light"><span className="nowrap">Live online session</span> <span aria-hidden="true">•</span> <span className="nowrap">Join from anywhere</span></p><h1>Manage your money. Prepare your business to grow.</h1><p className="hero-caption">Learn practical budgeting, cash flow, and funding strategies to make smarter financial decisions and access the capital your business needs.</p><div className="hero-actions"><a className="button button-light" href="#registration">REGISTER FREE <span aria-hidden="true">→</span></a><a className="hero-link" href="#program">Explore the session</a></div><p className="eligibility-note">Created for small business owners and entrepreneurs.</p></div>
        <div className="hero-visual online-hero-visual" role="img" aria-label="Diverse American small business owners working together online"><div className="hero-badge events-date-badge"><span>01</span><strong>September<br />Online</strong></div></div>
      </div></section>

      <section className="alert-strip" aria-label="Session details"><div className="container facts-grid">
        <div><span className="fact-icon"><OnlineIcon /></span><p><strong>100% ONLINE</strong><small>Join from anywhere</small></p></div>
        <div><span className="fact-icon"><FreeIcon /></span><p><strong>COMPLETELY FREE</strong><small>No cost to participate</small></p></div>
        <div><span className="fact-icon"><CalendarIcon /></span><p><strong>TUESDAY, SEPTEMBER 1</strong><a className="fact-link" href={calendarUrl} target="_blank" rel="noreferrer">Add to Google Calendar ↗</a></p></div>
      </div></section>

      <section className="events section" id="program"><div className="container">
        <div className="experience-heading"><div><p className="eyebrow">What you will learn</p><h2>Stronger finances start with a clear plan.</h2></div><div className="experience-intro"><p>This practical session gives you financial tools you can apply to your small business right away.</p><span>90-minute live session · Practical guidance · Free registration</span></div></div>
        <div className="event-quick-actions" aria-label="Session schedule"><div className="quick-detail"><span className="quick-icon"><CalendarIcon /></span><div><small>WHEN</small><strong>Tuesday, September 1, 2026</strong><p>10:00–11:30 a.m. ET</p></div></div><div className="quick-detail"><span className="quick-icon"><OnlineIcon /></span><div><small>WHERE</small><strong>Live online session</strong><p>Connect from anywhere</p></div></div><div className="quick-links"><a href={calendarUrl} target="_blank" rel="noreferrer">Add to calendar</a><a href="#registration">Reserve my spot →</a></div></div>
        <div className="module-grid">{topics.map((topic, index) => <article className={`module-card module-card-${index + 1}`} key={topic.title}><figure className="module-image"><img src={topic.image} alt={topic.alt} loading="lazy" /><span>{index + 1}</span></figure><div className="module-content"><small>TOPIC {index + 1}</small><h3>{topic.title}</h3><p>{topic.benefit}</p><ul>{topic.items.map(item => <li key={item}>{item}</li>)}</ul></div></article>)}</div>
        <div className="experience-cta"><div><p className="eyebrow">September 1 · Live online</p><h3>Make your next financial decision with confidence.</h3><span>Practical guidance built for small business owners.</span></div><a className="button" href="#registration">RESERVE MY FREE SPOT <span aria-hidden="true">→</span></a></div>
      </div></section>

      <section className="audience section"><div className="container audience-grid"><div className="audience-copy"><p className="eyebrow light">Built for small businesses</p><h2>This session is for you if…</h2><div className="audience-list">{audiences.map(audience => <div key={audience}><span aria-hidden="true">✓</span><strong>{audience}</strong></div>)}</div><p className="audience-online-note">You can participate from anywhere with an internet connection.</p></div><div className="audience-photo online-audience-photo" role="img" aria-label="Black and Latino American small business owners collaborating"><div className="photo-badge"><strong>LIVE</strong><span>online</span></div></div></div></section>

      <section className="registration section" id="registration"><div className="container registration-grid"><div className="registration-copy"><a className="registration-logo-link" href="https://aceloans.org/" target="_blank" rel="noreferrer" aria-label="Visit the ACE website"><img className="registration-logo" src="/images/ace-white-original.png" alt="ACE" /></a><p className="eyebrow light"><span className="nowrap">Free registration</span> <span aria-hidden="true">•</span> <span className="nowrap">Join from anywhere</span></p><h2>Register now and reserve your spot</h2><p>Complete the form in about two minutes. You will receive your confirmation, access link, and session reminders by email and SMS.</p><div className="event-contact-card"><strong>Need help?</strong><a href="tel:+12293749665">229-374-9665</a><a href="mailto:bas@aceloans.org">bas@aceloans.org</a></div><div className="trust-note"><span aria-hidden="true">✓</span><p><strong>Registration and participation are completely free.</strong> No payment information is required.</p></div></div><RegistrationForm variant="money" /></div></section>

      <footer className="footer"><div className="container footer-main"><a className="footer-ace" href="https://aceloans.org/" target="_blank" rel="noreferrer"><img src="/images/ace-white-original.png" alt="ACE" /></a><p>Organized by ACE · Supporting small business growth</p><a className="back-to-top" href="#top">Back to top <span aria-hidden="true">↑</span></a></div><div className="disclosure-bar"><div className="container disclosure-inner"><div><h2>Privacy</h2><p>ACE is not affiliated with Facebook or Meta Platforms, Inc. Information is handled according to our <a href="https://aceloans.org/privacy-policy/" target="_blank" rel="noreferrer">Privacy Policy</a>.</p></div><nav className="legal-links" aria-label="ACE legal policies"><a href="https://aceloans.org/privacy-policy/" target="_blank" rel="noreferrer">Privacy Policy</a><a href="https://aceloans.org/terms-of-service/" target="_blank" rel="noreferrer">Terms of Service</a></nav></div></div></footer>
    </main>
  );
}
