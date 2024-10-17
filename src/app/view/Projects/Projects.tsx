"use client";
import { HeroParallax } from "@/components/prueba/prueba";
import React from "react";
import { Element } from "react-scroll";

export const Projects = () => {
  const products = [
    {
      title: "Product 1",
      link: "/https://ui.aceternity.com/_next/image?url=%2Flogo-dark.png&w=64&q=75",
      thumbnail: "/bg4.svg",
    },
    {
      title: "Product 2",
      link: "https://ui.aceternity.com/_next/image?url=%2Flogo-dark.png&w=64&q=75",
      thumbnail: "/bg4.svg",
    },
    {
      title: "Product 3",
      link: "https://ui.aceternity.com/_next/image?url=%2Flogo-dark.png&w=64&q=75",
      thumbnail: "/bg4.svg",
    },
    {
      title: "Product 1",
      link: "/https://ui.aceternity.com/_next/image?url=%2Flogo-dark.png&w=64&q=75",
      thumbnail: "/bg4.svg",
    },
    {
      title: "Product 2",
      link: "https://ui.aceternity.com/_next/image?url=%2Flogo-dark.png&w=64&q=75",
      thumbnail: "/bg4.svg",
    },
    {
      title: "Product 3",
      link: "https://ui.aceternity.com/_next/image?url=%2Flogo-dark.png&w=64&q=75",
      thumbnail: "/bg4.svg",
    },
    {
      title: "Product 1",
      link: "/https://ui.aceternity.com/_next/image?url=%2Flogo-dark.png&w=64&q=75",
      thumbnail: "/bg4.svg",
    },
    {
      title: "Product 2",
      link: "https://ui.aceternity.com/_next/image?url=%2Flogo-dark.png&w=64&q=75",
      thumbnail: "/bg4.svg",
    },
    {
      title: "Product 3",
      link: "https://ui.aceternity.com/_next/image?url=%2Flogo-dark.png&w=64&q=75",
      thumbnail: "/bg4.svg",
    },
    // Añade hasta 15 productos
  ];

  return (
    <>
      <Element name="projects">
        <HeroParallax products={products} />
      </Element>
    </>
  );
};
