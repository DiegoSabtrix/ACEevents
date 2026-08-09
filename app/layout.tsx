import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ace-capital-coaching.diego681936.chatgpt.site"),
  title: "Capacitación Empresarial Gratis en Español | ACE Georgia",
  description: "Capacitación empresarial online gratuita en español para emprendedores de Georgia: finanzas, acceso a capital, marketing digital e inteligencia artificial.",
  keywords: [
    "capacitación empresarial gratis en español",
    "cursos para emprendedores hispanos en Georgia",
    "finanzas para pequeños negocios",
    "acceso a capital para emprendedores",
    "marketing digital para pequeños negocios",
    "inteligencia artificial para emprendedores",
    "ACE Georgia",
    "Carolina Ramon 3LC Enterprises",
    "Diego Sabogal Sabtrix",
  ],
  authors: [
    { name: "ACE", url: "https://aceloans.org/" },
    { name: "Carolina Ramon", url: "https://3lcfinancialservices.com/" },
    { name: "Diego Sabogal", url: "https://sabtrix.com/" },
  ],
  creator: "ACE",
  publisher: "ACE",
  alternates: { canonical: "/", languages: { "es-US": "/" } },
  openGraph: {
    type: "website",
    locale: "es_US",
    url: "/",
    siteName: "ACE | Capital + Asesoría + Conexiones",
    title: "Capacitación Empresarial Gratis en Español | ACE Georgia",
    description: "Programas virtuales gratuitos de finanzas, acceso a capital, marketing digital e IA para emprendedores y pequeños negocios.",
    images: [{ url: "/images/ace-hero.webp", width: 2048, height: 1366, alt: "Capacitación empresarial online gratuita de ACE para emprendedores hispanos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capacitación Empresarial Gratis en Español | ACE Georgia",
    description: "Finanzas, acceso a capital, marketing digital e IA para emprendedores y pequeños negocios.",
    images: ["/images/ace-hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-US">
      <head>
        <script
          id="meta-pixel"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','1034539289433580');
fbq('track','PageView');`,
          }}
        />
      </head>
      <body className={`${openSans.variable} antialiased`}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1034539289433580&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
