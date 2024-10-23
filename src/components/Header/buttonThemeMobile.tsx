// Asegúrate de la ruta correcta
"use client";
import "./header.css";
import { useTheme } from "../../app/Context/Context";
import { ImSun } from "react-icons/im"; // Icono del sol
import { MdDarkMode } from "react-icons/md"; // Icono de la luna

export const ButtonThemeMobile = () => {
  const { theme, toggleTheme } = useTheme(); // Consume el contexto

  return (
    <button
      onClick={toggleTheme} // Cambia el tema al hacer clic
      className="socialContainer containerOne "
    >
      {theme === "light" ? (
        <ImSun className="text-xl text-title dark:text-white hover:text-primaryDark " /> // Muestra el icono del sol si el tema es claro
      ) : (
        <MdDarkMode className="text-xl text-title dark:text-white " /> // Muestra el icono de la luna si el tema es oscuro
      )}
    </button>
  );
};
