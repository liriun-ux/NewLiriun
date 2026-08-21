"use client";

import { useEffect, useRef, useState } from "react";

import SectionHome from "@/sections/INICIO/inicio";
import SectionProduct from "@/sections/PRODUCT/product";
import SectionProcess from "@/sections/PROCES/proces";
import SectionDiseno from "@/sections/DISENO/diseno";
import SectionContacto from "@/sections/CONTACTO/contacto";

const sections = [
  {
    id: "inicio",
    component: <SectionHome />,
  },
  {
    id: "producto",
    component: <SectionProduct />,
  },
  {
    id: "proceso",
    component: <SectionProcess />,
  },
  {
    id: "diseno",
    component: <SectionDiseno />,
  },
  {
    id: "contactos",
    component: <SectionContacto />,
  },
];

export default function SectionSlider() {
  const currentHash = useRef(0);
  const prevHash = useRef(0);

  const [previous, setPrevious] = useState<number | null>(null);
  const [animation, setAnimation] = useState<"enter" | "exit">("enter");
  const [enlace, setEnlace] = useState("");

  const iniciado = useRef(false);
  const locked = useRef(false);

  /*
   * Cambia de sección
   */
  const changeSection = (next: number) => {
    if (locked.current) return;
    if (next === currentHash.current) return;

    locked.current = true;

    setPrevious(currentHash.current);
    setAnimation("exit");
    const id = sections[next].id;

    setEnlace(id);
    prevHash.current = currentHash.current;
    currentHash.current = next;

    window.history.replaceState(null, "", `#${id}`);

    setTimeout(() => {
      setAnimation("enter"); 
      setPrevious(null);

      locked.current = false;
    }, 700);
  };

  /*
   * HASH
   */
  useEffect(() => {
    const updateFromHash = () => {
      const hash = window.location.hash.replace("#", "");

      const index = sections.findIndex(
        (section) => section.id === hash
      );

      console.log("HASH:", hash);
      console.log("INDEX:", index);

      /*
       * Si no existe hash
       */
      if (index === -1) {
        if (!iniciado.current) {
          iniciado.current = true;

          currentHash.current = 0;
          setEnlace("inicio");

          window.history.replaceState(
            null,
            "",
            "#inicio"
          );
        }

        return;
      }

      /*
       * Primera carga
       */
      if (!iniciado.current) {
        iniciado.current = true;

        currentHash.current = index;
        setEnlace(sections[index].id);

        console.log(
          "Inicializando:",
          sections[index].id,
          ":::",
          currentHash.current
        );

        return;
      }

      /*
       * Cambio mediante hash
       */
      if (index !== currentHash.current) {
        changeSection(index);
      }
    };

    updateFromHash();

    window.addEventListener(
      "hashchange",
      updateFromHash
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        updateFromHash
      );
    };
  }, []);

  /*
   * WHEEL
   */
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (locked.current) return;

      let next = currentHash.current;

      if (event.deltaY > 0) {
        next = Math.min(
          currentHash.current + 1,
          sections.length - 1
        );
      }

      if (event.deltaY < 0) {
        next = Math.max(
          currentHash.current - 1,
          0
        );
      }

      window.location.hash = sections[next].id;

      if (next === currentHash.current) return;

      changeSection(next);
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel
      );
    };
  }, []);

/*
 * TOUCH
 */
useEffect(() => {
  let startY = 0;

  const handleTouchStart = (event: TouchEvent) => {
    startY = event.touches[0].clientY;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (locked.current) return;

    const endY = event.changedTouches[0].clientY;

    const difference = startY - endY;

    // Evita movimientos demasiado pequeños
    if (Math.abs(difference) < 50) return;

    let next = currentHash.current;

    // Swipe hacia arriba
    if (difference > 0) {
      next = Math.min(
        currentHash.current + 1,
        sections.length - 1
      );
    }

    // Swipe hacia abajo
    if (difference < 0) {
      next = Math.max(
        currentHash.current - 1,
        0
      );
    }

    // No cambiar si estamos en el límite
    if (next === currentHash.current) return;

    window.location.hash = sections[next].id;

    changeSection(next);
  };

  window.addEventListener("touchstart", handleTouchStart);
  window.addEventListener("touchend", handleTouchEnd);

  return () => {
    window.removeEventListener("touchstart", handleTouchStart);
    window.removeEventListener("touchend", handleTouchEnd);
  };
}, []);



  return (
    <div className="slide-section slide-section-current slideBase">


      {/* Sección anterior */}
      {previous !== null && (
        <div className={`section-animation slide-section ${previous > currentHash.current ? "SalidaHaciaArriva":"SalidaHaciaAbajo"}`}>
          {sections[previous].component}
        </div>
      )}

      {/* Sección actual */}
      {previous === null && (
        <div className={`section-animation slide-section ${ prevHash.current > currentHash.current ? "AparecerDesdeArriba":"AparecerDesdeAbajo" }`}>
          {sections[currentHash.current].component}
        </div>
      )}

    </div>
  );
}
