"use client";
import { NavBar } from "@/components/Header/NavBar";
import { About } from "./view/about/About";
import { Projects } from "./view/Projects/Projects";
import { MobileMenu } from "@/components/Header/MobileMenu";

import { Hero } from "./view/home/Hero";
import { Footer } from "@/components/Footer/Footer";
import { useEffect, useState } from "react";
import { Design } from "./view/design/Design";
import Image from "next/image";
import { useTheme } from "./Context/Context";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

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
        {theme === "light" ? (
          <Image
            src="/MortacodeLight.png"
            alt="logo"
            width={200}
            height={200}
            className="w-40 bg-white p-2 rounded-full dark:bg-gray-800 border-2 "
          />
        ) : (
          <Image
            src="/MortacodeDark.png"
            alt="logo"
            width={200}
            height={200}
            className="w-40 bg-white p-2 rounded-full dark:bg-gray-800 border-2 border-gray-600 "
          />
        )}
      </div>
      <NavBar />
      <MobileMenu />
      <Hero />
      <About />
      <Projects />
      <Design />
      <Footer />
    </>
  );
}
