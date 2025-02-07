/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { loadingStates } from "@/lib/techArray";
import "./tech.css";

export const Tech = () => {
  return (
    <div>
      <motion.div
        className="hidden md:max-w-[500px] lg:max-w-[1200px] h-20 md:flex justify-center items-center overflow-hidden     "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
      >
        <div className="w-full lg:w-1/2 flex items-center overflow-hidden ">
          <div className="slideTrack">
            {[...loadingStates, ...loadingStates].map((tec, index) => (
              <div
                key={index}
                className=" h-9 w-40 md:w-52 flex justify-center items-center m-2  "
              >
                <img src={tec.icon} alt="" className="w-6 md:w-8 pr-2" />
                {tec.text === "Redux Toolkit - RTK Query" ? (
                  <p className="text-sm md:font-semibold dark:text-white text-background">
                    Redux Toolkit
                  </p>
                ) : (
                  <p className="text-sm md:font-semibold md:text-base dark:text-white text-background">
                    {tec.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
