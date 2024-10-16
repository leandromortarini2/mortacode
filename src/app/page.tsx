import { NavBar } from "@/components/Header/NavBar";
import { About } from "./view/about/About";
import { Projects } from "./view/Projects/Projects";
import { MobileMenu } from "@/components/Header/MobileMenu";
import { Hero } from "./view/home/Hero";

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
