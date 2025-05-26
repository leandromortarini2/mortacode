/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { PiRocketLaunchFill } from "react-icons/pi";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <>
      {/* <div className="hidden md:block dark:bg-background bg-white h-20"></div> */}
      <footer className="bg-primary pb-20  md:pb-0">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <h1 className="md:xl lg:text-xl font-semibold text-primaryDark dark:text-text_default font-roboto flex items-center uppercase ">
              <MdArrowBackIos className="text-primaryDark dark:text-text_default" />
              Morta{" "}
              <PiRocketLaunchFill className="text-primaryDark dark:text-text_default" />
              code
              <MdArrowForwardIos className="text-primaryDark  dark:text-text_default" />
            </h1>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={1000}
                  className="hover:underline me-4 md:me-6 cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/leandro-mortarini2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline me-4 md:me-6"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/leandromortarini2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline me-4 md:me-6"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5401126034427"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
            Herramientas utilizadas: Next.js - Typescript - Tailwind - Shadcn UI
          </span>
        </div>
      </footer>
    </>
  );
};
