"use client";
import React, { useEffect, useState } from "react";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { ButtonTheme } from "../ButtonTheme/ButtonTheme";
import Image from "next/image";
import { useTheme } from "@/app/Context/Context";
export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const { theme } = useTheme();

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
          ? "bg-primaryDark dark:bg-background"
          : "bg-primaryDark/10 dark:bg-background/0"
      }`}
    >
      <div className="hidden w-1/4 h-20 md:flex flex-col justify-center pl-5 lg:pl-10 ">
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
            <ButtonTheme />
          </div>{" "}
        </a>
      </div>
    </div>
  );
};
