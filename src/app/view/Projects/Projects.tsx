// Projects.tsx
"use client";

import { SliderProjects } from "@/components/SliderProjects/SliderProjects";
import { TitleProjects } from "@/components/TitleProjects/TitleProjects";
import { Element } from "react-scroll";

export const Projects: React.FC = () => {
  return (
    <>
      <Element name="projects">
        <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-background    ">
          <TitleProjects />
          <p className="text-primary dark:text-secondary text-center md:hidden">
            Desliza de costado para ver más proyectos{" "}
          </p>
          <SliderProjects />
        </div>
      </Element>
    </>
  );
};
