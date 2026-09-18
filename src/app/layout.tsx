import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zurixai.com"),
  title: "ZurixAI — The Quality Gate for AI-Generated Code",
  description:
    "Catch broken packages, failing imports, and AI slop before they reach production. Open source agentic quality engine for every PR.",
  openGraph: {
    title: "ZurixAI — The Quality Gate for AI-Generated Code",
    description:
      "Catch broken packages, phantom imports, and code slop before they ship. Deterministic core, optional LLM brain.",
    type: "website",
    url: "https://zurixai.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZurixAI — The Quality Gate for AI-Generated Code",
    description:
      "Catch broken packages, phantom imports, and code slop before they ship.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#0a0a0a] font-sans text-[#e5e7eb] antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}