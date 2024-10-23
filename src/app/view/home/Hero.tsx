/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import React from "react";
import { Element, Link } from "react-scroll";
import "./hero.css";
import { Tech } from "@/components/Tech/Tech";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineArrowCircleDown } from "react-icons/md";
import { loadingStates } from "@/lib/techArray";

export const Hero = () => {
  return (
    <>
      <Element name="home">
        <BackgroundBeamsWithCollision>
          <div className="w-full min-h-screen  bghero dark:bg-black bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center  ">
            <p className="text-text_default dark:text-text_defaultDark text-2xl">
              Bienvenido/a
            </p>
            <p className="text-text_default dark:text-text_defaultDark text-2xl">
              Soy
            </p>

            <h2 className=" capitalize text-3xl relative z-20 md:text-4xl lg:text-8xl font-semibold  text-background dark:text-white font-sans tracking-tight mt-5">
              leandro mortarini
            </h2>
            <h2 className=" capitalize text-xl relative z-20 md:text-4xl lg:text-5xl font-bold  text-title  font-sans tracking-tight mb-5">
              desarrollador front-end
            </h2>
            <Tech />
            <div className="w-[90] h-10 flex justify-center items-center gap-3 md:hidden p-2 rounded-sm m-2">
              {loadingStates.map((tec, i) => {
                return (
                  <div key={i}>
                    <img src={tec.icon} className="w-10 h-10" />
                  </div>
                );
              })}
            </div>
            <div className="flex gap-5 mt-5 ">
              <Link
                to="projects"
                smooth={true}
                duration={1000}
                className="flex "
              >
                <button className="bg-title text-primaryDark hover:bg-title/90 w-28 h-7 text-sm md:text-base  md:w-36 md:h-9  flex justify-center items-center rounded-sm ">
                  Proyectos <IoIosArrowRoundForward className=" text-2xl" />
                </button>
              </Link>
              <a
                href="/cv.pdf"
                className="flex "
                download="LeandroMortariniCV.pdf"
              >
                <button className="cursor-pointer capitalize text-sm  md:text-base   text-primary dark:text-primaryDark hover:text-title dark:hover:text-title  border-none flex justify-center items-center">
                  Curriculum
                  <MdOutlineArrowCircleDown className="pl-1 text-2xl" />
                </button>
              </a>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </Element>
    </>
  );
};
