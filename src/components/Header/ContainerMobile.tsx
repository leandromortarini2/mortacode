/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { Button } from "../ui/button";
import { socialArray } from "../../lib/socialArray";
interface ContainerMobileProps {
  open: boolean;
}

export const ContainerMobile = ({ open }: ContainerMobileProps) => {
  return (
    <>
      {open && (
        <div className="w-full h-screen fixed  flex-col justify-end items-end  top-0 left-0 bg-gray-100 dark:bg-background z-30">
          <div className="w-full h-1/2 relative top-[30%] flex flex-col justify-center items-center gap-5 ">
            {socialArray.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-primaryDark  capitalize  text-base font-normal  hover:bg-secondary   h-8 w-3/6 md:w-1/2  bg-[#053b50] rounded-lg flex justify-center items-center"
              >
                {/* <FaLinkedinIn className="mr-1 text-primary " /> */}
                {item.label}
              </a>
            ))}
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vSaMUsNK5DUQArFCfDuOtO-Ys_wuCUZafXnD-Q6goJMAI2jzVeCBXrek6MVa4Z2mL-3OSb5CgYE3UjI/pub"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Button
                className="bg-transparent border-[1px] border-text_default text-text_default dark:text-primaryDark dark:border-primaryDark hover:border-secondary
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
