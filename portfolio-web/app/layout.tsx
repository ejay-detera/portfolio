import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "E-jay P. Detera",
  description: "Portfolio of E-jay P. Detera — Full-stack developer, software architect, and 3rd-year IT student at PUP Quezon City specializing in resilient web systems, mobile applications, and intelligent database design.",
  keywords: ["E-jay Detera", "Full-Stack Developer", "Software Architect", "Next.js", "React", "Laravel", "Flutter", "PUP QC"],
  icons: {
    icon: [
      { url: "/EJ-LOGO.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/EJ-LOGO.png",
    apple: "/EJ-LOGO.png",
  },
};

import PreventDrag from "./components/PreventDrag";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full font-mono antialiased bg-[#06070E] text-white selection:bg-[var(--brand-yellow)] selection:text-black">
        <PreventDrag />
        {children}
      </body>
    </html>
  );
}
