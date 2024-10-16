/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { arrayTech } from "@/lib/techArray";
import "./tech.css";

export const Tech = () => {
  return (
    <div>
      <motion.div
        className="w-[400px] xl:w-[600px] h-20 flex justify-center items-center overflow-hidden relative bottom-10 md:bottom-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="w-full flex items-center overflow-hidden">
          <div className="slideTrack">
            {/* Duplica el contenido para crear un efecto de bucle infinito */}
            {[...arrayTech, ...arrayTech].map((tec, index) => (
              <div key={index} className="w-10 h-10 m-3">
                <img
                  src={tec.url}
                  alt={tec.name}
                  className=" w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
