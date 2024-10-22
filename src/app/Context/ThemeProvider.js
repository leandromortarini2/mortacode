// ThemeProvider.js
import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext"; // Asegúrate de la ruta correcta
import { images } from "../../utils/images"; // Asegúrate de la ruta correcta

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.className = theme; // Añadir o eliminar clases según el tema
  }, [theme]);

  const getBackgroundImage = () => {
    return theme === "light" ? images.bg_hero : images.bg_hero_dark;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, getBackgroundImage }}>
      {children}
    </ThemeContext.Provider>
  );
};
