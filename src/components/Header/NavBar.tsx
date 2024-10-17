"use client";
import React from "react";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { Button } from "@/components/ui/button";
import { PiRocketLaunchFill } from "react-icons/pi";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

export const NavBar = () => {
  return (
    <div className="hidden w-full h-16  md:flex justify-evenly items-center fixed top-0 z-50 bg-white  ">
      <div className="hidden w-1/4 h-20 md:flex flex-col justify-center pl-5 lg:pl-10">
        <h1 className="md:xl lg:text-xl font-semibold text-title font-roboto flex items-center uppercase ">
          <MdArrowBackIos className="text-title" />
          Morta <PiRocketLaunchFill className="text-title" />
          code
          <MdArrowForwardIos className="text-title" />
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
          <Button className="font-semibold ">Hoja de Vida</Button>
        </a>
      </div>
    </div>
  );
};
