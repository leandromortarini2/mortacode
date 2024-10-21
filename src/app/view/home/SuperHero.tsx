"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Element } from "react-scroll";
import "./hero.css";
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";
import { Tech } from "@/components/Tech/Tech";

export function SuperHero() {
  return (
    <Element name="home">
      <LampContainer className="w-full h-screen flex flex-col justify-center items-center md:pt-52 pb-10 md:pb-0 border-t-4 border-background">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8  bg-gradient-to-br from-white  py-4 bg-clip-text text-center  font-medium tracking-tight text-transparent  text-2xl lg:text-5xl xl:text-7xl  flex flex-col justify-center items-center relative  top-[70%]"
        >
          Leandro Mortarini
          <br /> Desarrollador Front-End
        </motion.h1>
        <Tech />

        {/* Contenedor de botones con animación */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Al iniciar, invisibles y desplazados hacia abajo
          animate={{ opacity: 1, y: 0 }} // Al aparecer, visibles y en su posición
          transition={{ delay: 1.5, duration: 0.8, ease: "easeInOut" }} // Transición suave
          className="flex w-full md:w-3/4 justify-center items-center gap-2 sm:flex-row relative top-40 lg:top-52"
        >
          <a
            href="https://wa.me/5401126034427?text=Hola%20Leandro,%20estuve%20viendo%20tu%20portfolio%20y%20quería%20conversar%20con%20vos."
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="container">
              <button
                id="btnHero"
                className="btnHero flex justify-center items-center w-28 xl:w-32 h-8 text-sm capitalize"
              >
                Contactame <FaWhatsapp className="pl-1 text-xl" />
              </button>
            </div>
          </a>

          <Link to="projects" smooth={true} duration={1000}>
            <div className="container">
              <button
                id="btnHero"
                className="btnHero flex justify-center items-center w-28 xl:w-32 h-8 text-sm capitalize"
              >
                Proyetos <ArrowRight className="pl-1" />
              </button>
            </div>
          </Link>
        </motion.div>
      </LampContainer>
    </Element>
  );
}
