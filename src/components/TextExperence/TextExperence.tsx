import React from "react";
import { Spotlight } from "../ui/spotlight";

export function TextExperence() {
  return (
    <div className="md:h-full w-full md:w-3/4 rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 pt-0 max-w-7xl  mx-auto relative z-10  w-full ">
        <h1 className="hidden md:block text-xl lg:text-4xl xl:text-5xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Experiencia
        </h1>
        <p className="mt-2 font-normal text-sm lg:text-base text-neutral-300 max-w-lg text-start mx-auto">
          <span className="text-secondary">
            Desarrollador Frontend - Inflatrack
          </span>{" "}
          <br />
          <span className="text-secondary">Julio 2024 - Actualidad</span> <br />
          Mi rol principal es como Frontend Developer, donde he desarrollado
          componentes reutilizables, optimizaciones y desarrollo nuevas
          funcionalidades. <br />
          <hr className="p-1  border-secondary" />
          <span className="text-secondary ">
            Desarrollador Frontend - Freelance
          </span>
          <br />
          <span className="text-secondary">Junio 2024 - Actualidad</span> <br />
          Desarrollo de Landing Page para empresas como SteticGlam y plataforma
          de pedidos por whatsapp para IceCream. <br />
          <hr className="p-1  border-secondary" />
          <span className="text-secondary ">Oficial de Policia</span>
          <br />
          <span className="text-secondary">
            Diciembre 2016 - Diciembre 2023
          </span>
          <br />
          Patrullaje preventivo y abordaje de conflictos.
        </p>
      </div>
    </div>
  );
}
