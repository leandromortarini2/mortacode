"use client";
import React from "react";
import { Element } from "react-scroll";
export const Hero = () => {
  return (
    <>
      <Element name="home">
        <div className="w-full h-screen flex justify-center items-center bg-[url('/bg.png')] bg-cover">
          {/* <h2 className="text-3xl font-bold">INICIO</h2> */}
        </div>
      </Element>
    </>
  );
};
