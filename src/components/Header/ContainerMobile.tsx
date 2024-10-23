/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { socialArray } from "../../lib/socialArray";
import { MdOutlineArrowCircleDown } from "react-icons/md";

interface ContainerMobileProps {
  open: boolean;
}

export const ContainerMobile = ({ open }: ContainerMobileProps) => {
  return (
    <>
      {open && (
        <div className="w-full h-screen fixed  flex-col justify-end items-end  top-0 left-0 bg-gray-200 dark:bg-gray-900 z-30">
          <div className="w-full h-1/2 relative top-[30%] flex flex-col justify-evenly items-center gap-5 ">
            {socialArray.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-title  capitalize  text-base  font-normal  hover:bg-secondary   h-8 w-3/6 md:w-1/2   rounded-lg flex justify-center items-center"
              >
                {/* <FaLinkedinIn className="mr-1 text-primary " /> */}
                {item.label === "Linkedin" && (
                  <FaLinkedinIn className="mr-1 " />
                )}
                {item.label === "WhatsApp" && <FaWhatsapp className="mr-1 " />}
                {item.label === "GitHub" && <FaGithub className="mr-1 " />}
                {item.label === "Instagram" && (
                  <IoLogoInstagram className="mr-1 " />
                )}
                {item.label === "Curriculum" && (
                  <MdOutlineArrowCircleDown className="mr-1 " />
                )}
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
