/* eslint-disable @next/next/no-img-element */
import React from "react";

export const ImgAbout = () => {
  return (
    <div className="w-full md:w-1/2 md:h-[500px] flex justify-center md:justify-end items-center pt-10  ">
      <div className="w-1/2 md:w-3/5 xl:w-1/3  relative flex justify-center items-center bg-gradient-to-b from-indigo-950 via-secondary to-indigo-950 md:mr-10">
        <img
          src="/perfil4.jpg"
          alt=""
          className="w-full h-full  relative bottom-3 md:bottom-5 right-3 md:right-5"
        />
      </div>
    </div>
  );
};
