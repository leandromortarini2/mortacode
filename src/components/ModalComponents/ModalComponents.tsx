"use client";
import React from "react";
import { Button } from "../ui/button";
import { proyectos } from "@/lib/projectsArray";
import ReactPlayer from "react-player";

import { IoMdClose } from "react-icons/io";

interface ModalProps {
  closeModal: () => void;
  title: string;
}

export const ModalComponents = ({ closeModal, title }: ModalProps) => {
  return (
    <div
      onClick={closeModal}
      className="w-full h-screen dark:bg-black/80  fixed top-0 left-0 flex justify-center items-center z-20  "
    >
      <div className="w-full md:w-3/4 h-[550px]  xl:h-[650px] bg-primary dark:bg-text_default/95 z-50 mt-10 md:mt-20 p-5 flex flex-col justify-center items-center mb-10 md:mb-0  ">
        <div className="w-full flex justify-end h-4 ">
          <IoMdClose className="text-xl text-red-500 relative  bottom-7 md:bottom-5   bg-white  md:left-0 lg:right-10 cursor-pointer hover:scale-110 transition duration-500 hover:bg-red-500  hover:text-white  rounded-full" />
        </div>

        {proyectos.map((item, index) => {
          if (item.title === title) {
            return (
              <div
                className="w-full  text-primary flex flex-col justify-start items-center  "
                key={index}
              >
                <div className="w-full md:w-3/4 relative  bottom-5 text-center">
                  <h2 className="text-sm md:text-xl xl:text-3xl text-primaryDark">
                    {item.title}
                  </h2>
                  <p className="text-secondary  text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
                <div className=" md:w-3/4 h-[190px] md:h-[250px] lg:h-[300px] xl:h-[400px] flex justify-center items-center">
                  <ReactPlayer
                    width={"100%"}
                    height={"100%"}
                    url="https://www.youtube.com/watch?v=y9LlnLTH87U"
                  />
                </div>
                <div className="w-full  flex justify-center items-center">
                  {item.vercel && (
                    <a
                      href={item.vercel}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        onClick={closeModal}
                        variant={"buttonNavigate"}
                        className="font-normal text-sm text-primaryDark"
                      >
                        Ir a Web
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            );
          }
          return null;
        })}

        {/* <h1>hola</h1> */}
      </div>
    </div>
  );
};
