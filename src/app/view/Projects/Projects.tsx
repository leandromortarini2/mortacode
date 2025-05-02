/* eslint-disable @next/next/no-img-element */
// Projects.tsx
"use client";

import { TitleProjects } from "@/components/TitleProjects/TitleProjects";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Element } from "react-scroll";

const content = [
  {
    title: "E-commerce Juandomingrow",
    tech: "Next | Typescript | Tailwind | Shadcn UI ",
    description:
      "e-commerce dinámico que optimiza la experiencia de compra en tiempo real. Verificar promociones activas basadas en tipo de producto, cantidad y otras condiciones. Notificaciones automáticas por email tanto para el cliente como para el vendedor",
    button_text: "Ver detalles",
    url: "https://i.ibb.co/TBs9FqTv/mobie-juandomingrow.png",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img
          src="https://i.ibb.co/TBs9FqTv/mobie-juandomingrow.png"
          alt=""
          className="w-[11rem] shadow"
        />
      </div>
    ),
  },
  {
    title: "Sistema de Gestión para Negocio",
    tech: "React | JavaScript | Styled Components | Material UI ",
    description:
      "Inflatrack es un sistema de gestión diseñado para optimizar negocios urbanos. Ofrece herramientas avanzadas para el control de stock, gestión de ventas, generación de estadísticas y control de precios.",
    button_text: "Ver detalles",
    url: "",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img
          src="https://i.ibb.co/RGTwZY7w/infla.png"
          alt=""
          className="w-[13rem] shadow"
        />
      </div>
    ),
  },
  {
    title: "¿Quién es ese Pokémon?",
    tech: "Vue 3 | Typescript | Tailwind ",
    description:
      "Se trata de un juego web inspirado en uno de los clásicos de adivinar personajes de la saga de Pokémon. Contador de partidas ganadas y perdidas.Tiene animación de confeti si acertás, música y es totalmente responsive",
    button_text: "Ver detalles",
    url: "https://i.ibb.co/J9sqv9b/pokemon.png",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img
          src="https://i.ibb.co/J9sqv9b/pokemon.png"
          alt=""
          className="w-[11rem] shadow"
        />
      </div>
    ),
  },

  {
    title: "Plataforma de pedidos por WathsApp",
    tech: "React | Typescript | Tailwind | Material UI",
    description:
      "Proyecto 'grupal' para empresa IceCream, es un sistema de pedidos por WhatsApp. Desarrolle el Hero, sección de 'helados', contacto y autenticación con Clerk",
    button_text: "Ver detalles",
    url: "https://i.ibb.co/7TyGn71/ice.png",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img
          src="https://i.ibb.co/7TyGn71/ice.png"
          alt=""
          className="w-[13rem] shadow"
        />
      </div>
    ),
  },

  {
    title: "Rin|Door",
    tech: "Next Js | Javascript | Tailwind  | OAuth 2.0",
    description:
      "Proyecto 'grupal', es una app donde puedes registrarte como profesional o cliente, el cliente publica trabajos y puede aceptar o rechazar trabajos. También pueden chatear entre cliente y profesional.",
    button_text: "Ver detalles",
    url: "https://i.ibb.co/JRXf1vR5/rindor.png",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img
          src="https://i.ibb.co/JRXf1vR5/rindor.png"
          alt=""
          className="w-[13rem] shadow"
        />
      </div>
    ),
  },

  {
    title: "MarvelWorld",
    tech: "React | Javascript | Tailwind ",
    description:
      "MarvelWorld es una aplicación web diseñada para los entusiastas del universo Marvel. Su principal función es consumir APIs REST para ofrecer información actualizada y detallada sobre el extenso catálogo de Marvel.",
    button_text: "Ver detalles",
    url: "https://i.ibb.co/Ld0XcKym/marvel.png",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://i.ibb.co/Ld0XcKym/marvel.png"
          alt=""
          className="w-[13rem] shadow"
        />
      </div>
    ),
  },
  {
    title: "Memoria Futbolera",
    tech: "React | Javascript | Tailwind ",
    description:
      "Minijuego de memoria diseñado para los amantes del fútbol! En este juego, tu objetivo es descubrir pares de cartas relacionadas con el mundo del fútbol.",
    button_text: "Ver detalles",
    url: "https://i.ibb.co/mr55ttNG/futbol.png",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://i.ibb.co/mr55ttNG/futbol.png"
          alt=""
          className="w-[13rem] shadow"
        />
      </div>
    ),
  },
];

export const Projects: React.FC = () => {
  return (
    <>
      <Element name="projects">
        <div className="md:p-10  md:h-screen bg-white dark:bg-background pb-10">
          <div className="md:h-[17rem] pt-20">
            <TitleProjects title="Mis proyectos" />
          </div>
          <StickyScroll content={content} />
        </div>
      </Element>
    </>
  );
};
