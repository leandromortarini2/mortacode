// Projects.tsx
"use client";

import { SliderProjects } from "@/components/SliderProjects/SliderProjects";
import { TitleProjects } from "@/components/TitleProjects/TitleProjects";
import { Element } from "react-scroll";

export const Projects: React.FC = () => {
  return (
    <>
      <Element name="projects">
        <div className="w-full min-h-screen flex flex-col justify-center items-center   ">
          <TitleProjects />
          <SliderProjects />
          {/* Asegúrate de pasar los items aquí */}
        </div>
      </Element>
    </>
  );
};
