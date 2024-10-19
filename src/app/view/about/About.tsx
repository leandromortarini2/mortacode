/* eslint-disable @next/next/no-img-element */
"use client";
import { Element } from "react-scroll";
import { useState } from "react";
import { TextAbout } from "@/components/TextAbout/TextAbout";
import { TextExperence } from "@/components/TextExperence/TextExperence";
import { TechAbout } from "@/components/TechAbout/TechAbout";

export const About = () => {
  const [view, setView] = useState("about");
  const [triggerLoading, setTriggerLoading] = useState(false); // Nuevo estado para activar la carga

  const handleTechClick = () => {
    setTriggerLoading(true); // Activa la carga al hacer clic
    setView("tecnologías"); // Cambia la vista a "tecnologías"
  };
  const loadingStates = [
    {
      text: "JavaScript",
      icon: "/tecnologias/javascript.svg",
    },
    {
      text: "TypeScript",
      icon: "/tecnologias/typescript.svg",
    },
    {
      text: "React",
      icon: "/tecnologias/react.svg",
    },
    {
      text: "Redux Toolkit - RTK Query",
      icon: "/tecnologias/redux.svg",
    },
    {
      text: "Next.js",
      icon: "/tecnologias/nextjs_icon_dark.svg",
    },

    {
      text: "Tailwind CSS",
      icon: "/tecnologias/tailwindcss.svg",
    },
    {
      text: "Shadcn UI",
      icon: "/tecnologias/ui_dark.svg",
    },
    {
      text: "Styled Components",
      icon: "/tecnologias/styledcomponents.svg",
    },
  ];
  return (
    <>
      <Element name="about">
        <div className="w-full md:h-screen flex flex-col justify-center items-center">
          <div className="w-[70%] h-32 flex justify-around items-end pb-5 relative top-10">
            <span
              onClick={() => setView("about")}
              className={`w-1/3 text-primary bg-transparent text-lg hover:border-secondary flex justify-center items-center capitalize font-roboto cursor-pointer ${
                view === "about"
                  ? "border-b-2 border-secondary"
                  : "border-b-2 border-gray-500 "
              }`}
            >
              Sobre mi
            </span>
            <span
              onClick={() => setView("experience")}
              className={`w-1/3 text-primary bg-transparent text-lg hover:border-secondary flex justify-center items-center capitalize font-roboto cursor-pointer ${
                view === "experience"
                  ? "border-b-2 border-secondary"
                  : "border-b-2 border-gray-500 "
              }`}
            >
              Experiencia
            </span>
            <span
              onClick={handleTechClick} // Llama a la función al hacer clic
              className={`w-1/3 text-primary bg-transparent text-lg hover:border-secondary flex justify-center items-center capitalize font-roboto cursor-pointer ${
                view === "tecnologías"
                  ? "border-b-2 border-secondary"
                  : "border-b-2 border-gray-500 "
              }`}
            >
              Tecnologías
            </span>
          </div>
          <div className="w-full md:h-[600px] flex justify-center items-center">
            <div className="w-1/2 h-[500px] flex justify-end items-center">
              <div className="h-[400px] flex justify-center items-center bg-gradient-to-b from-[#053b50] via-secondary to-[#053b50] mr-10">
                <img
                  src="/perfil4.jpg"
                  alt=""
                  className="h-[400px] relative bottom-5 right-5"
                />
              </div>
            </div>
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
                    <img
                      src={state.icon}
                      alt={state.text}
                      className="w-8 pr-2"
                    />
                    <p className="text-primary text-xl">{state.text}</p>
                  </div>
                ))}
                <TechAbout triggerLoading={triggerLoading} />
                {/* Pasa la prop aquí */}
              </div>
            )}
          </div>
        </div>
      </Element>
    </>
  );
};
