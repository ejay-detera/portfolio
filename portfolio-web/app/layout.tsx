import type { Metadata } from "next";
import { Archivo, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PreventDrag from "./components/PreventDrag";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "E-jay P. Detera — Full-Stack Developer & Systems Architect",
  description:
    "Portfolio of E-jay P. Detera — Full-stack developer, software architect, and BSIT Student at Polytechnic University of the Philippines - Quezon City Campus specializing in resilient web systems, mobile applications, and relational database design.",
  keywords: [
    "E-jay Detera",
    "Full-Stack Developer",
    "Software Architect",
    "Next.js",
    "React",
    "Laravel",
    "Flutter",
    "PUP QC",
  ],
  icons: {
    icon: [
      { url: "/EJ-LOGO.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/EJ-LOGO.png",
    apple: "/EJ-LOGO.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full font-sans antialiased bg-[var(--bg-base)] text-[var(--text-primary)] selection:bg-[var(--brand-yellow)] selection:text-[#0C0C0E]">
        <PreventDrag />
        {children}
      </body>
    </html>
  );
}
