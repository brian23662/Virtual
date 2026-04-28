import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Display: Fraunces — a distinctive, characterful serif (variable, free, modern)
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

// Body: Outfit — geometric, warm, highly legible
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://virtualvri.com"),
  title: {
    default: "Virtual VRI — Nationally Certified Video Remote Interpreting",
    template: "%s | Virtual VRI",
  },
  description:
    "Nationally RID-certified ASL, trilingual, and foreign-language interpreters available on-demand and on-schedule. HIPAA-compliant video. No two-hour minimums. Serving schools, healthcare, and businesses since 2009.",
  keywords: [
    "ASL interpreter",
    "video remote interpreting",
    "VRI",
    "sign language interpreter",
    "RID certified",
    "TypeWell",
    "CART",
    "captioning",
    "HIPAA compliant",
    "remote ASL",
  ],
  openGraph: {
    title: "Virtual VRI — Nationally Certified Video Remote Interpreting",
    description:
      "Connect with a certified ASL or foreign-language interpreter, on-demand or pre-scheduled. HIPAA-compliant. Serving schools, healthcare, and businesses since 2009.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
