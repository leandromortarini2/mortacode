/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { arrayTech } from "@/lib/techArray";
import "./tech.css";

export const Tech = () => {
  return (
    <div>
      <motion.div
        className="w-[600px] h-20 flex justify-center items-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2.5 }}
      >
        <div className="w-full flex items-center overflow-hidden">
          <div className="slideTrack">
            {/* Duplica el contenido para crear un efecto de bucle infinito */}
            {[...arrayTech, ...arrayTech].map((tec, index) => (
              <div key={index} className="slide">
                <img src={tec.url} alt={tec.name} className="w-10" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
