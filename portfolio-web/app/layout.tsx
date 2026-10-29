import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import PreventDrag from "./components/PreventDrag";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "E-jay P. Detera — Full-Stack Developer",
  description:
    "Portfolio of E-jay P. Detera — Full-stack developer and BSIT Student at PUP Quezon City building resilient web applications, mobile systems, and normalized databases that hold up in production.",
  keywords: [
    "E-jay Detera",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Laravel",
    "React Native",
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
      className={`${hankenGrotesk.variable} dark antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full font-sans antialiased bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--highlight)] selection:text-[var(--on-highlight)]">
        <PreventDrag />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
