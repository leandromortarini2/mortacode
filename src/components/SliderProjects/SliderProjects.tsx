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
import { Button } from "../ui/button";
import { ModalComponents } from "../ModalComponents/ModalComponents";
import { useState } from "react";

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
    <div className="flex justify-center items-center ">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-[1300px] flex justify-center items-center bg-transparent"
      >
        <CarouselContent className="">
          {proyectos.map((item, index) => (
            <CarouselItem
              key={index}
              className="  md:basis-1/2 lg:basis-1/3 flex justify-center   "
            >
              <div className="max-w-[400px] min-h-[200px] flex flex-col justify-center items-center rounded-sm bg-transparent border-none  cursor-pointer ">
                <div className="w-full flex justify-end items-center  ">
                  <div className="relative flex w-[500px] flex-col overflow-hidden  bg-clip-border  shadow-md border-2 rounded-md border-secondary ">
                    <div className="p-6">
                      <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-primary antialiased ">
                        {item.title}
                      </h5>{" "}
                      <p className="block font-sans text-sm text-secondary pb-2">
                        {item.tec}
                      </p>
                      <img
                        src={item.link}
                        alt=""
                        className="mb-1 rounded-md imgEffectLow "
                      />
                      <div className="h-fit flex justify-end  ">
                        <Button
                          variant="buttonNavigate"
                          className="text-lg pt-5 font-normal"
                          onClick={() => {
                            setTitle(item.title);
                            handleOpenModal();
                          }}
                        >
                          Ver mas
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-secondary bg-transparent hover:bg-secondary hover:text-primary border-2 border-secondary" />
        <CarouselNext className="text-secondary bg-transparent hover:bg-secondary hover:text-primary border-2 border-secondary" />
      </Carousel>
      {isOpen && <ModalComponents closeModal={handleModal} title={title} />}
    </div>
  );
};
