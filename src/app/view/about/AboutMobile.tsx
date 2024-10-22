/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { TextAbout } from "@/components/TextAbout/TextAbout";
import { TextExperence } from "@/components/TextExperence/TextExperence";
// import { TechAbout } from "@/components/TechAbout/TechAbout";
import { loadingStates } from "@/lib/techArray";
import { HeadreAbout } from "./HeadreAbout";
import { ImgAbout } from "./ImgAbout";
import { Element } from "react-scroll";

export const AboutMobile = () => {
  const [view, setView] = useState("about");
  // const [triggerLoading, setTriggerLoading] = useState(false); // Nuevo estado para activar la carga

  const handleTechClick = () => {
    // setTriggerLoading(true); // Activa la carga al hacer clic
    setView("tecnologías"); // Cambia la vista a "tecnologías"
  };

  return (
    <>
      <Element name="about">
        <div className=" w-full md:h-screen bg-gray-100 dark:bg-background flex flex-col justify-center items-center md:hidden ">
          <ImgAbout />

          <HeadreAbout
            view={view}
            setView={setView}
            handleTechClick={handleTechClick}
          />
          <div className="w-full md:h-[600px] flex justify-center items-center ">
            {view === "about" ? (
              <div className="w-[90%] md:w-1/2 md:h-[500px]">
                <TextAbout />
              </div>
            ) : view === "experience" ? (
              <div className="w-full md:w-1/2 md:h-[500px]">
                <TextExperence />
              </div>
            ) : (
              <div className=" md:w-1/2 md:h-[400px] flex flex-col justify-center items-start md:pl-10">
                {loadingStates.map((state, index) => (
                  <div key={index} className="mt-2 md:mt-5 flex">
                    <img
                      src={state.icon}
                      alt={state.text}
                      className="w-8 pr-2"
                    />
                    <p className="text-primary text-sm md:text-lg ">
                      {state.text}
                    </p>
                  </div>
                ))}
                {/* <TechAbout triggerLoading={triggerLoading} /> */}
                {/* Pasa la prop aquí */}
              </div>
            )}
          </div>
        </div>
      </Element>
    </>
  );
};
