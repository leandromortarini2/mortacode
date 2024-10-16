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
import { HeroMobile } from "./HeroMobile";

export const Hero = () => {
  return (
    <>
      <Element name="home">
        <section className="hidden w-full lg:flex flex-col justify-center items-center overflow-hidden ">
          <div className="  ">
            <div className=" grid items-center gap-8 lg:grid-cols-2 ">
              <div className=" flex flex-col items-center justify-center text-center lg:mx-auto lg:items-start lg:px-0 lg:text-left mt-20   ">
                <p className="text-gray-600 text-base lg:text-lg font-semibold">
                  Bienvenido/a
                </p>
                <p className="text-gray-600 text-base lg:text-lg font-semibold">
                  Soy
                </p>
                <h1 className=" lg:my-6 text-primary text-xl md:text-3xl font-bold lg:text-5xl xl:text-[70px]">
                  Leandro Mortarini
                </h1>
                <h1 className=" text-secondary  font-bold text-lg md:text-xl lg:text-2xl">
                  Desarrollador Front-End
                </h1>
                <Tech />

                <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                  <Link to="projects" smooth={true} duration={1000}>
                    <Button className="w-full sm:w-auto bg-primary font-semibold">
                      <ArrowRight className="mr-2 size-4" />
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
                      className="w-full sm:w-auto  font-semibold text-secondary tracking-wide "
                    >
                      <FaWhatsapp className="mr-2 h-4 w-4 text-primary text-xl" />
                      Contactame Wp
                    </Button>{" "}
                  </a>
                </div>
              </div>
              <div className="relative aspect-[4/4]  lg:aspect-[3/4]">
                <div className="absolute inset-0 flex items-center justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 800 800"
                    className="size-full text-muted-foreground opacity-20"
                  >
                    {Array.from(Array(720).keys()).map((dot, index, array) => {
                      const angle = 0.2 * index;
                      const scalar = 40 + index * (360 / array.length);
                      const x = Math.round(Math.cos(angle) * scalar);
                      const y = Math.round(Math.sin(angle) * scalar);

                      return (
                        <circle
                          key={index}
                          r={(3 * index) / array.length}
                          cx={400 + x}
                          cy={400 + y}
                          opacity="1"
                          fill="#4a6cf7"
                        />
                      );
                    })}
                  </svg>
                </div>

                <div className=" absolute bottom-[30%] right-[24%] w-[50%] flex aspect-[5/6] overflow-hidden  justify-center rounded-t-3xl rounded-r-3xl border-4 border-[#4a6df76f]  ">
                  <img src="/perfil.png" alt="" className="imgEffectLow " />
                </div>
              </div>
            </div>
          </div>
        </section>
        <HeroMobile />
      </Element>
    </>
  );
};
