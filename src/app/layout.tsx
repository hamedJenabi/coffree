import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource/aleo/latin-400.css";
import "@fontsource/aleo/latin-700.css";
import "@fontsource/aleo/latin-800.css";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Coffree | Vienna's independent drink club",
  description:
    "Join the founding list for Coffree, a Vienna drink club for coffee, matcha, tea, and selected cafe drinks.",
  openGraph: {
    title: "Coffree | Vienna's independent drink club",
    description:
      "A founding membership for 20% off coffee, matcha, tea, and selected drinks at independent Vienna cafes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
