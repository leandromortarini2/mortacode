import React from "react";

interface Props {
  view: string;
  setView: React.Dispatch<React.SetStateAction<string>>;
  handleTechClick: () => void;
}

export const HeadreAbout = ({ view, setView, handleTechClick }: Props) => {
  return (
    <div className="w-[90%] md:w-[70%] h-14 md:h-32 flex justify-around md:items-end md:pb-5 relative md:top-10">
      <span
        onClick={() => setView("about")}
        className={`w-1/3 text-primary bg-transparent text-sm md:text-lg hover:border-secondary flex justify-center items-center capitalize font-roboto cursor-pointer ${
          view === "about"
            ? "border-b-2 border-secondary"
            : "border-b-2 border-gray-500 "
        }`}
      >
        Sobre mi
      </span>
      <span
        onClick={() => setView("experience")}
        className={`w-1/3 text-primary bg-transparent text-sm md:text-lg hover:border-secondary flex justify-center items-center capitalize font-roboto cursor-pointer ${
          view === "experience"
            ? "border-b-2 border-secondary"
            : "border-b-2 border-gray-500 "
        }`}
      >
        Experiencia
      </span>
      <span
        onClick={handleTechClick} // Llama a la función al hacer clic
        className={`w-1/3 text-primary bg-transparent text-sm md:text-lg hover:border-secondary flex justify-center items-center capitalize font-roboto cursor-pointer ${
          view === "tecnologías"
            ? "border-b-2 border-secondary"
            : "border-b-2 border-gray-500 "
        }`}
      >
        Tecnologías
      </span>
    </div>
  );
};
