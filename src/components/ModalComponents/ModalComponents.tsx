"use client";
import React from "react";
import { Button } from "../ui/button";
import { proyectos } from "@/lib/projectsArray";
import ReactPlayer from "react-player";
interface ModalProps {
  closeModal: () => void;
  title: string;
}

export const ModalComponents = ({ closeModal, title }: ModalProps) => {
  return (
    <div
      onClick={closeModal}
      className="w-full h-screen  fixed top-0 left-0 flex justify-center items-center z-20 "
    >
      <div className="w-full md:w-3/4 h-[650px] bg-[#053b50] z-50 mt-10 p-5 ">
        <div className="w-full flex justify-end">
          <Button
            onClick={closeModal}
            variant={"destructive"}
            className=" mt-3  md:m-3  mb-0"
          >
            X
          </Button>{" "}
        </div>

        {proyectos.map((item, index) => {
          if (item.title === title) {
            return (
              <div
                className="w-full  text-primary flex flex-col justify-start items-start  mb-40 "
                key={index}
              >
                <div className="w-full md:w-3/4 relative md:left-10 bottom-5">
                  <h2 className="text-base md:text-3xl">{item.title}</h2>
                  <p className="text-secondary lowercase text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
                <div className="w-full flex justify-center items-center">
                  <ReactPlayer
                    width={"90%"}
                    height={"90%"}
                    url="https://www.youtube.com/watch?v=y9LlnLTH87U"
                  />
                </div>
                <div className="w-full flex justify-end">
                  {item.vercel !== "" && (
                    <a
                      href={item.vercel}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        onClick={closeModal}
                        variant={"buttonNavigate"}
                        className="relative top-10 right-10 bottom-5"
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
