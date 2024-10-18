"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Explora mis proyectos desarrollados como Front-End y Full Stack,
              tanto individuales como grupales. Haz clic en las imágenes para
              ver más detalles, acceder a la versión completa o ver un video de
              demostración.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect className="font-normal" words={words} />;
}
