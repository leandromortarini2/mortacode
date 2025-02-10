/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { designData, designDataModal } from "@/lib/designData";
import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";

export const Design: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleModal = (item: string) => {
    setItem(item);
    setModal(!modal);
  };
  return (
    <Element name="design">
      <div className=" overflow-hidden w-full min-h-screen py-20 bg-gray-100 dark:bg-background flex flex-col lg:flex-row justify-center items-center relative">
        <div className="w-[90%] lg:w-1/3 flex flex-col pb-5">
          <h2 className=" capitalize text-3xl relative z-20 md:text-4xl lg:text-9xl font-semibold  text-background dark:text-white font-sans tracking-tight mt-5">
            diseños
          </h2>
          <h2 className=" capitalize  text-lg relative z-20 md:text-4xl lg:text-4xl font-bold  text-title  font-sans tracking-tight md:mb-5">
            realizados en figma
          </h2>
          <p className="text-sm lg:text-xl text-background dark:text-white">
            Explora algunos de los diseños que he desarrollado en Figma para
            diversos clientes, donde cada proyecto refleja un enfoque único en
            la identidad visual y la lógica de negocio de cada marca. Desde la
            selección de paletas de colores estratégicas hasta la optimización
            de la experiencia de usuario, estos trabajos destacan por su
            equilibrio entre estética y funcionalidad.
          </p>
        </div>
        <Carousel className="relative w-[70%] md:w-1/2 ">
          <CarouselContent>
            {designData.map((slide, index) => (
              <CarouselItem key={index} className="relative w-full">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className=" p-10 md:p-0 md:max-w-1/2 min-h-[15rem] max-h-[15rem] lg:h-[30rem] md:max-h-[30rem] object-cover rounded-lg"
                  />
                  <h2 className="md:text-xl font-bold text-lg">
                    {slide.title}
                  </h2>
                  <button
                    onClick={() => handleModal(slide.title)}
                    className="bg-title text-white text-sm md:text-base px-3 py-1 md:px-4 md:py-2 rounded-md"
                  >
                    {slide.button}
                  </button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Asegura que las flechas estén visibles */}
          <CarouselPrevious className="absolute md:left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md" />
          <CarouselNext className="absolute md:right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md" />
        </Carousel>
        {modal ? (
          <div
            onClick={() => handleModal("")}
            className="w-full h-screen md:h-[130vh] lg:h-screen bg-black/70 absolute z-40 flex flex-col justify-center items-center "
          >
            <div className="h-10 w-[80%] lg:w-1/4 flex  justify-end">
              <button
                onClick={() => handleModal("")}
                className="text-white   md:text-lg  font-light  hover:text-white/80  flex items-center  justify-end "
              >
                <AiOutlineClose />
                Cerrar
              </button>
            </div>
            {designDataModal.map((e, i) => {
              if (e.name === item) {
                return (
                  <div
                    key={i}
                    className=" w-[80%] h-[400px] lg:w-1/4 lg:h-3/4 overflow-auto bg-white relative"
                  >
                    {" "}
                    <img src={e.src} alt="" className="w-full" />
                  </div>
                );
              }
            })}
          </div>
        ) : null}
      </div>
    </Element>
  );
};
