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
        <div className="w-full h-screen fixed  flex-col justify-end items-end  top-0 left-0 bg-gray-200 dark:bg-gray-900 z-30">
          <div className="w-full h-1/2 relative top-[30%] flex flex-col justify-center items-center gap-5 ">
            {socialArray.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-primaryDark  capitalize  text-base font-normal  hover:bg-secondary   h-8 w-3/6 md:w-1/2  bg-title rounded-lg flex justify-center items-center"
              >
                {/* <FaLinkedinIn className="mr-1 text-primary " /> */}

                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
