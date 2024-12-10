/* eslint-disable @next/next/no-img-element */
"use client";

import "./slider.css";
// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { proyectos } from "@/lib/projectsArray";
// import { Button } from "../ui/button";
import { ModalComponents } from "../ModalComponents/ModalComponents";
import { useState } from "react";
import { PinContainer } from "../ui/3d-pin";

export const SliderProjects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");

  const handleModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex justify-center items-center mt-10 md:mt-0 ">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-72 min-h-[300px] md:w-[600px] lg:w-[900px] xl:w-[1200px] flex justify-center items-center bg-transparent   "
      >
        <CarouselContent className="">
          {proyectos.map((item, index) => (
            <CarouselItem
              key={index}
              className=" h-[300px] md:basis-1/1 md:basis-1/2 lg:basis-1/3 flex justify-center items-center   "
            >
              <div className="w-full md:max-w-[400px] h-[300px]  flex flex-col justify-center items-center rounded-sm bg-transparent border-none  cursor-pointer ">
                <div className="w-full flex justify-evenly items-center  ">
                  <div
                    onClick={() => {
                      setTitle(item.title);
                      handleOpenModal();
                    }}
                    className="min-h-72 w-full flex items-center justify-center   rounded-md cursor-pointer"
                  >
                    <PinContainer title="Más información">
                      <div className="flex basis-full flex-col p-4   tracking-tight rounded-sm text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-primary dark:text-slate-100">
                          {item.title}
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                          <span className="text-title dark:text-primaryDark font-normal text-sm ">
                            {item.tec}
                          </span>
                        </div>
                        <img
                          src={item.link}
                          alt=""
                          className="w-[300px] h-[140px]"
                        />
                      </div>
                    </PinContainer>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="hidden md:flex text-white  bg-primary hover:bg-primary/90  hover:text-white dark:hover:bg-transparent
          border-2 border-primary dark:text-primaryDark dark:border-primaryDark justify-center items-center dark:hover:border-secondary dark:hover:text-secondary"
        />
        <CarouselNext
          className="hidden md:flex text-white  bg-primary hover:bg-primary/90  hover:text-white dark:hover:bg-transparent
          border-2 border-primary dark:text-primaryDark dark:border-primaryDark justify-center items-center dark:hover:border-secondary dark:hover:text-secondary"
        />
      </Carousel>
      {isOpen && <ModalComponents closeModal={handleModal} title={title} />}
    </div>
  );
};
