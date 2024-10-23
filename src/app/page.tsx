"use client";
import { NavBar } from "@/components/Header/NavBar";
import { About } from "./view/about/About";
import { Projects } from "./view/Projects/Projects";
import { MobileMenu } from "@/components/Header/MobileMenu";
import { PiRocketLaunchFill } from "react-icons/pi";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Hero } from "./view/home/Hero";

export default function Home() {
  return (
    <>
      {" "}
      <div className="w-full h-10 bg-primaryDark dark:bg-background/50 flex justify-center items-center md:hidden fixed top-0 z-50">
        <h1 className="md:xl lg:text-xl font-semibold text-title dark:text-primaryDark font-roboto flex items-center uppercase ">
          <MdArrowBackIos className="text-title dark:text-primaryDark" />
          Morta{" "}
          <PiRocketLaunchFill className="text-title dark:text-primaryDark" />
          code
          <MdArrowForwardIos className="text-title  dark:text-primaryDark" />
        </h1>
      </div>
      <NavBar />
      <MobileMenu />
      <Hero />
      <About />
      <Projects />
    </>
  );
}
