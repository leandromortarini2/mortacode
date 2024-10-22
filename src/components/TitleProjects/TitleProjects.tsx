"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { useTheme } from "@/app/Context/Context";

export function TitleProjects() {
  const { theme } = useTheme();
  return (
    <div className="w-full  md:h-[20rem] md:w-full  flex flex-col items-center justify-center overflow-hidden rounded-md  p-4">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-primary dark:text-white relative z-20">
        Proyectos
      </h1>
      <div className="hidden md:block w-full h-10 md:w-[40rem] md:h-20 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}

        {theme === "dark" ? (
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        ) : (
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={2}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#0ea5e9"
          />
        )}

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
