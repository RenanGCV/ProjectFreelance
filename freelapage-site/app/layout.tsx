import { siteConfig } from "@/content/site";
import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Renan | Soluções digitais funcionais",
  description:
    "Landing page para captação de clientes com foco em resultado, clareza e entrega rápida.",
  openGraph: {
    title: "Renan | Soluções digitais funcionais",
    description:
      "Landing page para captação de clientes com foco em resultado, clareza e entrega rápida.",
    url: siteConfig.siteUrl,
    siteName: "Renan",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
