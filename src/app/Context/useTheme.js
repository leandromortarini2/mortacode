// useTheme.js
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Asegúrate de la ruta correcta

export const useTheme = () => {
  return useContext(ThemeContext);
};
