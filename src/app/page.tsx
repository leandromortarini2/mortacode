import { NavBar } from "@/components/Header/NavBar";
import { Hero } from "./view/home/hero";
import { About } from "./view/about/About";
import { Projects } from "./view/Projects/Projects";
import { MobileMenu } from "@/components/Header/MobileMenu";

export default function Home() {
  return (
    <>
      <NavBar />
      <MobileMenu />
      <Hero />
      <About />
      <Projects />
    </>
  );
}
