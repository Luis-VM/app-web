// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "BIRLCOMEX SRL — Agencia Despachante Aduanera",
  description: "Especialistas en importaciones y despacho aduanero en Bolivia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}