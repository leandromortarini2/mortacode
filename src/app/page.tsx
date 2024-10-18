import { NavBar } from "@/components/Header/NavBar";
import { About } from "./view/about/About";
import { Projects } from "./view/Projects/Projects";
import { MobileMenu } from "@/components/Header/MobileMenu";
import { Hero } from "./view/home/HERO";
import { SuperHero } from "./view/home/SuperHero";

export default function Home() {
  return (
    <>
      <NavBar />
      <MobileMenu />
      {/* <Hero /> */}
      <SuperHero />
      <About />
      <Projects />
    </>
  );
}
