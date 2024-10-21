"use client";
import React from "react";
import { ButtonNavigate } from "./ButtonNavigate";
import { MenuBar } from "./MenuBar";

export const NavigationMenuDemo = () => {
  return (
    <div className="hidden w-full md:flex justify-evenly items-center ">
      <ButtonNavigate />
      <MenuBar />
    </div>
  );
};
