import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./Context/Context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MortaCode",
  description:
    "Desarrollador Frontend con experiencia en Next.js, React, Redux-Toolkit, TypeScript, Javascript, Tailwind CSS, Shadcn UI. Explora proyectos  y aplicaciones web.",
  manifest: "/manifest.json",
  icons: {
    apple: "icon512_rounded.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <head>
          <link
            rel="icon"
            href="/cortacodeLogo.svg"
            type="/cortacodeLogo.svg"
          />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
