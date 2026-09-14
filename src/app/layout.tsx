import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dujanex.com"),
  title: "DUJANEX | Desarrollo Web de Alto Rendimiento y Software a Medida",
  description:
    "Empresa mexicana de tecnología. Creamos páginas web modernas, sistemas a medida, soluciones SaaS y aplicaciones especializadas con tecnología de vanguardia.",
  keywords: [
    "DUJANEX",
    "desarrollo web",
    "software a medida",
    "Next.js",
    "React",
    "empresa de software Mexico",
    "aplicaciones web",
    "automatización de procesos",
    "dujanex.com"
  ],
  authors: [{ name: "DUJANEX" }],
  creator: "DUJANEX",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://dujanex.com",
    title: "DUJANEX | Desarrollo Web y Software a Medida",
    description:
      "Transformamos ideas en productos digitales de alto rendimiento. Sitios web veloces, sistemas escalables y software empresarial.",
    siteName: "DUJANEX",
    images: [
      {
        url: "/dujanex-logo.png",
        width: 512,
        height: 512,
        alt: "DUJANEX - Soluciones Tecnológicas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DUJANEX | Desarrollo Web y Software a Medida",
    description:
      "Soluciones tecnológicas profesionales: desarrollo web, software empresarial y automatización.",
    images: ["/dujanex-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#06060a] text-zinc-100 min-h-screen selection:bg-purple-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
