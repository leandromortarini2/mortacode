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
        <h1 className="hidden md:block md:text-3xl lg:text-4xl xl:text-5xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Sobre Mi
        </h1>
        <p className="md:mt-4 text-sm lg:text-base xl:text-lg text-neutral-300 max-w-lg text-start mx-auto">
          <span className="text-secondary">Desarrollador Frontend</span>{" "}
          enfocado en la construcción de aplicaciones web dinámicas y
          visualmente atractivas. Me especializo en el uso de tecnologías clave
          como{" "}
          <span className="text-secondary">JavaScript, TypeScript y React</span>
          , con experiencia en la implementación de{" "}
          <span className="text-secondary"> Redux-Toolkit</span> para una
          gestión de estado eficiente y escalable. Actualmente, estoy
          colaborando con la empresa Inflatrack en el desarrollo de un software
          de gestión de comercio Además, realizó desarrollos de aplicaciones web
          de manera freelance para clientes reales.
        </p>
      </div>
    </div>
  );
}
