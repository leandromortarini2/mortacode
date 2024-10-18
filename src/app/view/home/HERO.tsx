/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Element } from "react-scroll";
import "./hero.css";
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";
import { Tech } from "@/components/Tech/Tech";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { words, words2, words3 } from "@/lib/textArray";
export const Hero = () => {
  // Función externa que calcula el delay

  return (
    <>
      <Element name="home">
        {" "}
        <BackgroundBeamsWithCollision>
          <section className=" w-full h-screen overflow-hidden bg-[url('/bgherocelu.svg')] md:bg-[url('/bg4.svg')]  bg-cover ">
            <AuroraBackground>
              <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="w-full h-screen relative flex "
              >
                {/* container 1  */}
                {/* container 1  */}
                <div className="w-3/4 flex flex-col items-start justify-center text-start lg:px-0 lg:text-left relative md:left-20 xl:left-64 xxl:left-60 ">
                  <TypewriterEffectSmooth words={words} delay={1} />
                  <TypewriterEffectSmooth words={words2} delay={2} />
                  <TypewriterEffectSmooth words={words3} delay={4} />

                  <Tech />

                  <div className="flex  w-full md:w-3/4 justify-center   md:justify-start items-center gap-2 sm:flex-row    ">
                    <Link to="projects" smooth={true} duration={1000}>
                      <Button className="w-28 h-8 lg:h-10 sm:w-auto bg-title font-semibold">
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
                        className="w-40 h-8 lg:h-10 sm:w-auto  font-semibold text-primary tracking-wide bg-gray-200  "
                      >
                        <FaWhatsapp className="hidden md:block  mr-2 h-4 w-4 text-primary text-xl" />
                        Contactame Wp
                      </Button>{" "}
                    </a>
                  </div>
                </div>
                <div className="w-1/2 flex justify-start items-center  ">
                  <img
                    src="/cohete.png"
                    alt="celu"
                    className="w-3/4 md:w-3/4 lg:w-3/5 rotate-12  "
                  />
                </div>
              </motion.div>
            </AuroraBackground>
          </section>{" "}
        </BackgroundBeamsWithCollision>
      </Element>
    </>
  );
};
