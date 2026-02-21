import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ElectraWS - Conserto de Eletrodomésticos na Grande Florianópolis",
  description: "Manutenção profissional de geladeiras, máquinas de lavar, micro-ondas e mais. Atendimento em Florianópolis, São José, Palhoça e Biguaçu.",
  metadataBase: new URL("https://electraws.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ElectraWS - Conserto de Eletrodomésticos na Grande Florianópolis",
    description: "Manutenção profissional de geladeiras, máquinas de lavar, micro-ondas e mais.",
    url: "https://electraws.com.br",
    siteName: "ElectraWS",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased pt-16`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
