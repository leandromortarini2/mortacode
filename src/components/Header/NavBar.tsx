"use client";
import React from "react";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { PiRocketLaunchFill } from "react-icons/pi";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

export const NavBar = () => {
  return (
    <div className="hidden w-full h-16  md:flex justify-evenly items-center fixed top-0 z-50 bg-[#020817]  ">
      <div className="hidden w-1/4 h-20 md:flex flex-col justify-center pl-5 lg:pl-10">
        <h1 className="md:xl lg:text-xl font-semibold text-white font-roboto flex items-center uppercase ">
          <MdArrowBackIos className="text-white" />
          Morta <PiRocketLaunchFill className="text-white" />
          code
          <MdArrowForwardIos className="text-white" />
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
            <button
              id="btnHero"
              className="btnHero px-10 max-py-[2px] flex justify-center items-center"
            >
              C | V
            </button>
          </div>{" "}
        </a>
      </div>
    </div>
  );
};
