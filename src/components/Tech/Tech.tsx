/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { arrayTech } from "@/lib/techArray";
import "./tech.css";

export const Tech = () => {
  return (
    <div>
      <motion.div
        className="max-w-[1200px] xl:w-[800px] h-20 flex justify-center items-center overflow-hidden relative top-72    "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <div className="w-[80%] md:w-full flex items-center overflow-hidden">
          <div className="slideTrack">
            {/* Duplica el contenido para crear un efecto de bucle infinito */}
            {[...arrayTech, ...arrayTech].map((tec, index) => (
              <div key={index} className="w-14 h-14 m-3">
                <img
                  src={tec.url}
                  alt={tec.name}
                  className=" w-8 h-8 md:w-8 md:h-8 lg:w-14 lg:h-14"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
