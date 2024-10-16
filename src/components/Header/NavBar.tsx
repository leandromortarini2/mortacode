"use client";
import React from "react";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { Button } from "@/components/ui/button";
export const NavBar = () => {
  return (
    <div className="hidden w-full h-20  lg:flex justify-evenly items-center fixed top-0 z-50 bg-white drop-shadow-md">
      <div className="hidden w-1/4 h-20 lg:flex flex-col justify-center pl-10">
        <h2 className="text-xl font-base">DEV</h2>
        <h1 className="text-2xl font-base text-primary">FRONT-END</h1>
      </div>
      <div className=" hidden w-2/4 h-20 lg:flex justify-center items-center">
        <NavigationMenuDemo />
      </div>
      <div className="w-1/4 h-20 lg:flex justify-center items-center">
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vSaMUsNK5DUQArFCfDuOtO-Ys_wuCUZafXnD-Q6goJMAI2jzVeCBXrek6MVa4Z2mL-3OSb5CgYE3UjI/pub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Hoja de Vida</Button>
        </a>
      </div>
    </div>
  );
};
