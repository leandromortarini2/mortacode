/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { CarouselOrientation } from "@/components/Carousel/Carousel";
import React from "react";
import { Element } from "react-scroll";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Parallax } from "@/components/Parallax/Parallax";
import { Modal } from "@/components/Modal/Modal";

export const Projects = () => {
  const words = [
    {
      text: "Mis Proyectos",
      className: "text-2xl md:text-7xl font-bold text-primary dark:text-white",
    },
  ];
  return (
    <>
      <Element name="projects">
        {/* <div className="max-w-7xl mx-auto py-20 md:py-40 px-4 w-1/2 ">
            <TypewriterEffectSmooth words={words} delay={1} />

            <p className="max-w-2xl text-base md:text-xl mt-8 text-secondary dark:text-neutral-200">
              Explora mis proyectos desarrollados como Front-End y Full Stack,
              tanto individuales como grupales. Haz clic en las imágenes para
              ver más detalles, acceder a la versión completa o ver un video de
              demostración.
            </p>
          </div>
          <div className="w-1/2 flex justify-center pb-16   ">
            <CarouselOrientation />
          </div> */}

        <Parallax />
      </Element>
    </>
  );
};
