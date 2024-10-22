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
        <div className="w-full h-screen fixed  flex-col justify-end items-end  top-0 left-0 bg-background z-30">
          <div className="w-full h-1/2 relative top-[30%] flex flex-col justify-center items-center gap-5 ">
            <a
              href="https://www.linkedin.com/in/leandro-mortarini/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-primary  capitalize  text-base font-semibold  hover:bg-secondary   h-10 w-3/4 md:w-1/2  bg-[#053b50] rounded-lg flex justify-center items-center"
            >
              {/* <FaLinkedinIn className="mr-1 text-primary " /> */}
              Linkedin
            </a>
            <a
              href="https://wa.me/5401126034427?text=Hola%20Leandro,%20estuve%20viendo%20tu%20portfolio%20y%20quería%20conversar%20con%20vos.
"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-primary  capitalize  text-base font-semibold  hover:bg-secondary   h-10 w-3/4 md:w-1/2  bg-[#053b50] rounded-lg flex justify-center items-center"
            >
              {/* <FaWhatsapp className="mr-1  text-primary text-lg " /> */}
              <span>WhatsApp</span>
            </a>
            <a
              href="https://github.com/leandromortarini2"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-primary  capitalize  text-base font-semibold  hover:bg-secondary   h-10 w-3/4 md:w-1/2  bg-[#053b50] rounded-lg flex justify-center items-center"
            >
              {/* <FaGithub className="mr-1  text-primary text-lg" /> */}
              <span>GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/mortacode/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-primary  capitalize  text-base font-semibold  hover:bg-secondary   h-10 w-3/4 md:w-1/2  bg-[#053b50] rounded-lg flex justify-center items-center"
            >
              {/* <IoLogoInstagram className="mr-1  text-primary text-lg" /> */}
              <span>Instagram</span>
            </a>
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vSaMUsNK5DUQArFCfDuOtO-Ys_wuCUZafXnD-Q6goJMAI2jzVeCBXrek6MVa4Z2mL-3OSb5CgYE3UjI/pub"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Button
                className="bg-transparent border-[1px] border-primary text-primary hover:border-secondary
              hover:text-secondary hover:bg-transparent"
              >
                Hoja de Vida
              </Button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
