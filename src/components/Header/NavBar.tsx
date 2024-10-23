"use client";
import React, { useEffect, useState } from "react";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { PiRocketLaunchFill } from "react-icons/pi";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { ButtonTheme } from "../ButtonTheme/ButtonTheme";

export const NavBar = () => {
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
    <div
      className={`hidden w-full h-16 md:flex justify-evenly items-center fixed top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-primaryDark dark:bg-background" // Fondo sólido cuando se desplaza
          : "bg-primaryDark/10 dark:bg-background/0" // Fondo con transparencia
      }`}
    >
      <div className="hidden w-1/4 h-20 md:flex flex-col justify-center pl-5 lg:pl-10">
        <h1 className="md:text-lg font-semibold text-title dark:text-primaryDark font-roboto flex items-center uppercase ">
          <MdArrowBackIos className="text-title dark:text-primaryDark" />
          Morta{" "}
          <PiRocketLaunchFill className="text-title dark:text-primaryDark" />
          code
          <MdArrowForwardIos className="text-title dark:text-primaryDark" />
        </h1>
      </div>
      <div className=" hidden w-2/4 h-20 md:flex justify-center items-center">
        <NavigationMenuDemo />
      </div>
      <div className="w-1/4 h-20 md:flex justify-end  lg:justify-center items-center pr-5 lg:pr-0  ">
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vSaMUsNK5DUQArFCfDuOtO-Ys_wuCUZafXnD-Q6goJMAI2jzVeCBXrek6MVa4Z2mL-3OSb5CgYE3UjI/pub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="container">
            {/* <button className="text-sm px-3 py-1 flex justify-center items-center text-white border-[1px] border-white rounded-full hover:border-secondary hover:text-secondary">
              C | V
            </button> */}
            <ButtonTheme />
          </div>{" "}
        </a>
      </div>
    </div>
  );
};
