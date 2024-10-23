/* eslint-disable @next/next/no-img-element */
"use client";
import { Element } from "react-scroll";
import { useState } from "react";
import { TextAbout } from "@/components/TextAbout/TextAbout";
import { TextExperence } from "@/components/TextExperence/TextExperence";
// import { TechAbout } from "@/components/TechAbout/TechAbout";
import { loadingStates } from "@/lib/techArray";
import { HeadreAbout } from "./HeadreAbout";
import { ImgAbout } from "./ImgAbout";
import { AboutMobile } from "./AboutMobile";
import { useTheme } from "@/app/Context/Context";
export const About = () => {
  const [view, setView] = useState("about");
  // const [triggerLoading, setTriggerLoading] = useState(false); // Nuevo estado para activar la carga
  const { theme } = useTheme();
  const handleTechClick = () => {
    // setTriggerLoading(true); // Activa la carga al hacer clic
    setView("tecnologías"); // Cambia la vista a "tecnologías"
  };

  return (
    <>
      <Element name="about">
        <div className="w-full md:h-screen md:flex flex-col justify-center items-center hidden bg-gray-100 dark:bg-background ">
          <HeadreAbout
            view={view}
            setView={setView}
            handleTechClick={handleTechClick}
          />
          <div className="w-full md:h-[600px] flex justify-center items-center">
            <ImgAbout />
            {view === "about" ? (
              <div className="w-1/2 h-[500px]">
                <TextAbout />
              </div>
            ) : view === "experience" ? (
              <div className="w-1/2 h-[500px]">
                <TextExperence />
              </div>
            ) : (
              <div className="w-1/2 h-[400px] flex flex-col justify-center items-start pl-10">
                {loadingStates.map((state, index) => (
                  <div key={index} className="mt-5 flex">
                    {theme === "light" && state.text === "Shadcn UI" ? (
                      <img
                        src="/tecnologias/ui_light.svg"
                        alt={state.text}
                        className="w-8 pr-2"
                      />
                    ) : (
                      <img
                        src={state.icon}
                        alt={state.text}
                        className="w-8 pr-2"
                      />
                    )}
                    <p className="text-primary dark:text-primaryDark text-xl">
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
        <AboutMobile />
      </Element>
    </>
  );
};
