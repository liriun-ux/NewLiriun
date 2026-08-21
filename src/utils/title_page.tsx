"use client";

import { useEffect, useState } from "react";


const titles: Record<string, string> = {
  inicio: "inicio",
  producto: "producto",
  proceso: "proceso",
  diseno: "Diseño",
  contactos: "contactos",

};
export default function HeaderFont() {
  const [title, setTitle] = useState("");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const updateTitle = () => {
      const hash = window.location.hash.replace("#", "");
      const newTitle = titles[hash] || "inicio";

      // Primero hacemos salir el texto actual
      setVisible(false);

      // Cuando termina la salida, cambiamos el texto
      setTimeout(() => {
        setTitle(newTitle);

        // Y hacemos entrar el nuevo texto
        setVisible(true);
      }, 500);
    };

    // Estado inicial
    setVisible(true);
    updateTitle();

    window.addEventListener("hashchange", updateTitle);

    return () => {
      window.removeEventListener("hashchange", updateTitle);
    };
  }, []);

  return (
    <div className="header-font-wrapper ">
      <span
        className={`header__font header__font--thin  ${
          visible ? "header-font--visible" : "header-font--hidden"
        }`}
      >
        {title}
      </span>
    </div>
  );
}
