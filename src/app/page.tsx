"use client";
import { NavBar } from "@/components/Header/NavBar";
import { About } from "./view/about/About";
import { Projects } from "./view/Projects/Projects";
import { MobileMenu } from "@/components/Header/MobileMenu";
// import { SuperHero } from "./view/home/SuperHero";
import { PiRocketLaunchFill } from "react-icons/pi";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { MainHero } from "./view/home/MainHero";
import { ThemeProvider } from "./Context/Context";
export default function Home() {
  return (
    <ThemeProvider>
      <>
        <div className="w-full h-10 bg-background flex justify-center items-center md:hidden fixed top-0 z-50">
          <h1 className="md:xl lg:text-xl font-semibold text-white font-roboto flex items-center uppercase ">
            <MdArrowBackIos className="text-white" />
            Morta <PiRocketLaunchFill className="text-white" />
            code
            <MdArrowForwardIos className="text-white" />
          </h1>
        </div>
        <NavBar />
        <MobileMenu />
        <MainHero />
        <About />
        <Projects />
      </>
    </ThemeProvider>
  );
}
