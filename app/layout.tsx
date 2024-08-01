import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { MapProvider } from "@/providers/maps-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FIT-MIT-MARY",
  description:
    "Erleben Sie tiefenentspannende Yoga-Kurse in unserem professionellen Studio. Egal ob Anfänger oder Fortgeschrittener – finden Sie Balance und innere Ruhe durch individuelle Anleitungen. Besuchen Sie uns für Yoga in Künzing. Jetzt Platz reservieren!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary-backgroundGreen`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
