"use client";
import React, { useEffect } from "react";
import { proyectos } from "@/lib/projectsArray";
import ReactPlayer from "react-player";

import { IoMdClose } from "react-icons/io";

interface ModalProps {
  closeModal: () => void;
  title: string;
}

export const ModalComponents = ({ closeModal, title }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      onClick={closeModal}
      className="w-full h-screen bg-black/90  fixed top-0 left-0 flex justify-center items-center z-20  "
    >
      <div className="w-full   h-screen bg-gray-100 dark:bg-gray-950 z-50 mt-10 md:mt-20 p-5 flex flex-col justify-center items-center mb-10 md:mb-0 overflow-x-scroll ">
        {proyectos.map((item, index) => {
          if (item.title === title) {
            return (
              <div
                className="w-full  text-primary flex flex-col justify-start items-center md:pt-24 pb-10 "
                key={index}
              >
                <div className="w-full md:w-3/4 relative  bottom-5 text-center">
                  <h2 className="text-sm md:text-xl xl:text-3xl text-primary dark:text-primaryDark">
                    {item.title}
                  </h2>
                  <h3 className="text-secondary">{item.perfil}</h3>
                </div>
                <div className=" md:w-3/4 h-[190px] md:h-[250px] lg:h-[300px] xl:h-[400px] flex justify-center items-center">
                  <ReactPlayer
                    width={"100%"}
                    height={"100%"}
                    url={item.youtube}
                  />
                </div>{" "}
                <p className="w-[80%] text-primary dark:text-text_default text-sm md:text-base text-center pt-2">
                  {item.description}
                </p>
                <div className="w-full  flex justify-center items-center mt-3">
                  {item.vercel && (
                    <a
                      href={item.vercel}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-title text-primaryDark hover:bg-title/90 w-36 h-9  flex justify-center items-center rounded-sm ">
                        Ir a Web{" "}
                      </button>
                    </a>
                  )}

                  <button className="cursor-pointer capitalize  text-base font-semibold  text-primary dark:text-primaryDark hover:text-title dark:hover:text-title  border-none flex justify-center items-center">
                    <IoMdClose className="pl-1 text-2xl" />
                    Cerrar
                  </button>
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
