import React, { useEffect } from "react";

// Definimos un tipo para el callback que acepta un evento de tipo MouseEvent o TouchEvent y no devuelve nada.
type CallbackType = (event: MouseEvent | TouchEvent) => void;

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: CallbackType // Usamos el tipo definido para el callback
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Verificamos si el evento se produjo dentro del elemento referenciado
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    // Añadimos los listeners para mousedown y touchstart
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      // Limpiamos los listeners al desmontar el componente
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
