import type { Metadata } from "next";
import { EB_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const body = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
});

const display = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Sümeyra Eryılmaz | Portfolyo",
  description: "Yazılım mühendisliği 4. sınıf öğrencisi Sümeyra Eryılmaz'ın projeleri.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${body.variable} ${display.variable} antialiased`}>
      <body className="font-body text-ink">{children}</body>
    </html>
  );
}
