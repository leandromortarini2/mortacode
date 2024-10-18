"use client";
import React from "react";
import { Element } from "react-scroll";

export const About = () => {
  return (
    <>
      {" "}
      <Element name="about">
        <div className="w-full h-[450px] md:h-screen flex justify-center items-center  ">
          <h2 className="text-3xl font-bold text-gray-500">SOBRE MI</h2>
        </div>{" "}
      </Element>
    </>
  );
};
