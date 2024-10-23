"use client";
import { NavBar } from "@/components/Header/NavBar";
import { About } from "./view/about/About";
import { Projects } from "./view/Projects/Projects";
import { MobileMenu } from "@/components/Header/MobileMenu";
// import { SuperHero } from "./view/home/SuperHero";
import { PiRocketLaunchFill } from "react-icons/pi";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Hero } from "./view/home/Hero";
import Head from "next/head";

// import { MainHero } from "./view/home/MainHero";
export default function Home() {
  return (
    <>
      {" "}
      <Head>
        <title>Portfolio de Leandro Mortarini - Frontend Developer</title>
        <meta
          property="og:title"
          content="Portfolio de Leandro Mortarini - Frontend Developer"
        />
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
      </Head>
      <div className="w-full h-10 bg-primaryDark dark:bg-background/50 flex justify-center items-center md:hidden fixed top-0 z-50">
        <h1 className="md:xl lg:text-xl font-semibold text-title dark:text-primaryDark font-roboto flex items-center uppercase ">
          <MdArrowBackIos className="text-title dark:text-primaryDark" />
          Morta{" "}
          <PiRocketLaunchFill className="text-title dark:text-primaryDark" />
          code
          <MdArrowForwardIos className="text-title  dark:text-primaryDark" />
        </h1>
      </div>
      <NavBar />
      <MobileMenu />
      <Hero />
      {/* <MainHero /> */}
      <About />
      <Projects />
    </>
  );
}
