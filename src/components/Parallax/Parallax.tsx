"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import { proyectos } from "@/lib/projectsArray";
export function Parallax() {
  return <HeroParallax products={proyectos} />;
}
