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
  title: "Create Next App",
  description: "Generated by create next app",
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
          <link rel="icon" href="/ML.svg" type="/ML.svg" />

          <title>Portfolio | Leandro Mortarini </title>
          <meta property="og:title" content="Portfolio | Leandro Mortarini" />
          <meta
            property="og:description"
            content="Desarrollador Frontend con experiencia en Next.js, React, Redux-Toolkit, TypeScript, Javascript, Tailwind CSS, Shadcn UI. Explora proyectos  y aplicaciones web."
          />
          <meta
            property="og:image"
            content="https://mortacode.vercel.app/perfil4.jpg"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://mortacode.vercel.app/" />
          <meta property="og:locale" content="es_ES" />
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
