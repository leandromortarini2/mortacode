import React from "react";
import { Spotlight } from "../ui/spotlight";

export function TextAbout() {
  return (
    <div className="h-full w-full md:w-3/4 rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="pt-2 md:p-4 max-w-7xl  mx-auto relative z-10  w-full ">
        <h2 className="hidden md:block md:text-3xl lg:text-4xl xl:text-5xl font-bold text-start bg-clip-text text-transparent bg-primary   dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50">
          Sobre Mi
        </h2>
        <p className="md:mt-4 text-sm lg:text-base xl:text-lg dark:text-primaryDark text-primary max-w-lg text-start mx-auto font-normal">
          <span className="text-title font-semibold">
            Desarrollador Frontend
          </span>{" "}
          enfocado en la construcción de aplicaciones web dinámicas y
          visualmente atractivas. Me especializo en el uso de tecnologías clave
          como
          <span className="text-title font-semibold">
            {" "}
            JavaScript, TypeScript y React
          </span>
          , con experiencia en la implementación de{" "}
          <span className="text-title font-semibold">Redux-Toolkit</span> para
          una gestión de estado eficiente y escalable. Actualmente, estoy
          colaborando con la empresa Inflatrack en el desarrollo de un software
          de gestión de comercio.
        </p>
      </div>
    </div>
  );
}
