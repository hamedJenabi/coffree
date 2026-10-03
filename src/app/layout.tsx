import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource/aleo/latin-400.css";
import "@fontsource/aleo/latin-700.css";
import "@fontsource/aleo/latin-800.css";
import "./globals.scss";

export const metadata: Metadata = {
  title: "MokkaClub | Vienna's cafe membership",
  description:
    "Join the founding list for MokkaClub, a Vienna cafe membership for coffee, matcha, tea, and selected member offers.",
  openGraph: {
    title: "MokkaClub | Vienna's cafe membership",
    description:
      "A founding membership for coffee, matcha, tea, and cafe-controlled offers at independent Vienna cafes.",
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
