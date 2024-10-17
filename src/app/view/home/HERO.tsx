/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Element } from "react-scroll";
import "./hero.css";
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Tech } from "@/components/Tech/Tech";
import { FaWhatsapp } from "react-icons/fa";
import { PiRocketLaunchFill } from "react-icons/pi";

export const Hero = () => {
  return (
    <>
      <Element name="home">
        <section className=" w-full h-[400px] md:h-screen flex flex-col justify-center items-center overflow-hidden bghero  ">
          <div className="  ">
            <div className="flex flex-col justify-center items-center ">
              <div className="w-full flex flex-col items-center justify-center text-center lg:px-0 lg:text-left mt-20   ">
                <p className="text-text_default text-base lg:text-xl font-semibold ">
                  Bienvenido/a
                </p>
                <p className="text-text_default text-base lg:text-xl font-semibold">
                  Soy
                </p>
                <h1 className="  text-title text-xl md:text-3xl font-bold lg:text-5xl xl:text-[70px] border-b-2  border-secondary flex">
                  Leandro Mortarini{" "}
                  <PiRocketLaunchFill className="text-secondary" />
                </h1>
                <h1 className=" text-text_default  font-bold text-lg md:text-xl lg:text-2xl">
                  Desarrollador Front-End
                </h1>
                <Tech />

                <div className="flex w-full   justify-center gap-2 sm:flex-row ">
                  <Link to="projects" smooth={true} duration={1000}>
                    <Button className="w-28 h-8 lg:h-10 sm:w-auto bg-primary font-semibold">
                      <ArrowRight className="hidden md:block mr-2 size-4" />
                      Proyectos
                    </Button>
                  </Link>
                  <a
                    href="https://wa.me/5401126034427?text=Hola%20Leandro,%20estuve%20viendo%20tu%20portfolio%20y%20quería%20conversar%20con%20vos.
"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-44 h-8 lg:h-10 sm:w-auto  font-semibold text-secondary tracking-wide "
                    >
                      <FaWhatsapp className="hidden md:block  mr-2 h-4 w-4 text-primary text-xl" />
                      Contactame Wp
                    </Button>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
};
