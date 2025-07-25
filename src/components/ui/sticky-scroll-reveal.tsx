/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ModalComponents } from "../ModalComponents/ModalComponents";
import Image from "next/image";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    tech: string;
    description: string;
    button_text: string;
    url: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        return distance < Math.abs(latest - cardsBreakpoints[acc])
          ? index
          : acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  // Función para abrir el modal con el título de la card seleccionada
  const handleOpenModal = (title: string) => {
    setSelectedTitle(title);
    setModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedTitle(null);
  };

  return (
    <>
      <motion.div
        animate={{
          backgroundColor:
            backgroundColors[activeCard % backgroundColors.length],
        }}
        className="h-[30rem] w-full sm:w-auto overflow-y-auto flex justify-center relative space-x-10 rounded-md p-5 md:p-10  "
        ref={ref}
      >
        <div className="relative flex items-start md:px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-10 md:my-20">
                {/* Imagen que solo aparece en mobile */}
                <div className="w-full flex justify-center pb-10 md:hidden">
                  <Image
                    src={item.url}
                    alt={item.title}
                    width={300} // Ajusta según el tamaño deseado
                    height={200} // Ajusta según el tamaño deseado
                    className="block md:hidden w-1/2 h-auto rounded-lg"
                  />
                </div>
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-lg md:text-2xl lg:text-3xl font-bold text-primary dark:text-white "
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className=" text-sm md:text-base lg:text-lg text-title max-w-sm mt-10"
                >
                  {item.tech}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-sm md:text-base lg:text-lg text-primary dark:text-white max-w-sm mt-10"
                >
                  {item.description}
                </motion.p>
                <div className="w-full flex justify-end md:justify-start ">
                  <motion.button
                    onClick={() => handleOpenModal(item.title)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                    className="bg-title text-white text-sm md:text-base  px-3 py-1 md:px-4 md:py-2 mt-5 rounded-md hover:bg-title/90"
                  >
                    {item.button_text}
                  </motion.button>
                </div>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "hidden md:block rounded-md bg-white sticky top-10 overflow-hidden",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </motion.div>

      {/* Renderiza el ModalComponents solo si modalOpen es true */}
      {modalOpen && (
        <ModalComponents
          closeModal={handleCloseModal}
          title={selectedTitle || ""}
        />
      )}
    </>
  );
};
