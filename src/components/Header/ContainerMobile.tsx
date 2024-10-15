/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { Button } from "../ui/button";
interface ContainerMobileProps {
  open: boolean;
}

export const ContainerMobile = ({ open }: ContainerMobileProps) => {
  return (
    <>
      {open && (
        <div className="w-full h-screen fixed  flex-col justify-end items-end  top-0 left-0 bg-gray-100">
          <div className="w-full h-1/2 relative top-[30%] flex flex-col justify-center items-center gap-5 bg-gray-100">
            <a
              href="https://www.linkedin.com/in/leandro-mortarini/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-xl   capitalize border-none flex hover:bg-gray-300  justify-center items-center h-10 w-3/4 md:w-1/2  bg-gray-200 rounded-lg"
            >
              <FaLinkedinIn className="mr-1 text-primary " />
              <span>Linkedin</span>
            </a>
            <a
              href="https://wa.me/5401126034427?text=Hola%20Leandro,%20estuve%20viendo%20tu%20portfolio%20y%20quería%20conversar%20con%20vos.
"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-xl   capitalize border-none flex hover:bg-gray-300  justify-center items-center h-10 w-3/4 md:w-1/2  bg-gray-200 rounded-lg"
            >
              <FaWhatsapp className="mr-1  text-primary " />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://github.com/leandromortarini2"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-xl   capitalize border-none flex hover:bg-gray-300  justify-center items-center h-10 w-3/4 md:w-1/2  bg-gray-200 rounded-lg"
            >
              <FaGithub className="mr-1  text-primary " />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/mortacode/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-xl   capitalize border-none flex hover:bg-gray-300  justify-center items-center h-10 w-3/4 md:w-1/2  bg-gray-200 rounded-lg"
            >
              <IoLogoInstagram className="mr-1  text-primary " />
              <span>Instagram</span>
            </a>
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vSaMUsNK5DUQArFCfDuOtO-Ys_wuCUZafXnD-Q6goJMAI2jzVeCBXrek6MVa4Z2mL-3OSb5CgYE3UjI/pub"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Button>Hoja de Vida</Button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
