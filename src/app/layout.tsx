import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rabi Ahmed | Full-Stack Software Developer Portfolio",
  description: "Interactive IDE developer portfolio for Rabi Ahmed, Full-Stack Software Developer based in Karachi, Pakistan. Specializing in Next.js, React, TypeScript, Node.js, and PostgreSQL.",
  keywords: ["Rabi Ahmed", "Full-Stack Developer", "Next.js", "TypeScript", "React", "Node.js", "PostgreSQL", "Portfolio", "Karachi"],
  authors: [{ name: "Rabi Ahmed", url: "https://github.com/rabiahmed8" }],
  creator: "Rabi Ahmed",
  openGraph: {
    title: "Rabi Ahmed | Full-Stack Software Developer Portfolio",
    description: "Interactive IDE developer portfolio for Rabi Ahmed. Specializing in Next.js, React, TypeScript, Node.js, and PostgreSQL.",
    url: "https://github.com/rabiahmed8",
    siteName: "Rabi Ahmed Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
