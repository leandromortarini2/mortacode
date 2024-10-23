"use client";
import { NavBar } from "@/components/Header/NavBar";
import { About } from "./view/about/About";
import { Projects } from "./view/Projects/Projects";
import { MobileMenu } from "@/components/Header/MobileMenu";
import { PiRocketLaunchFill } from "react-icons/pi";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Hero } from "./view/home/Hero";
import { Footer } from "@/components/Footer/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Cambiar la clase del navbar según el desplazamiento de la página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {" "}
      <div
        className={` w-full h-16 md:hidden flex justify-evenly items-center fixed top-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-primaryDark dark:bg-background" // Fondo sólido cuando se desplaza
            : "bg-primaryDark/10 dark:bg-background/0" // Fondo con transparencia
        }`}
      >
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
      <About />
      <Projects />
      <Footer />
    </>
  );
}
