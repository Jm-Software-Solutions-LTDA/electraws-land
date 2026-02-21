import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ElectraWS - Conserto de Eletrodomésticos na Grande Florianópolis",
  description: "Manutenção profissional de geladeiras, máquinas de lavar, micro-ondas e mais. Atendimento em Florianópolis, São José, Palhoça e Biguaçu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased pt-16">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
