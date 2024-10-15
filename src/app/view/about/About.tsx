"use client";
import React from "react";
import { Element } from "react-scroll";

export const About = () => {
  return (
    <>
      {" "}
      <Element name="about">
        <div className="w-full h-screen flex justify-center items-center bg-slate-900 ">
          <h2 className="text-3xl font-bold">SOBRE MI</h2>
        </div>{" "}
      </Element>
    </>
  );
};
