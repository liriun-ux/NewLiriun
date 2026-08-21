"use client";

import { useEffect, useState } from "react";

export default function CustomScroller() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      console.log("Hash:", hash);

      switch (hash) {
        case "#inicio":
          setProgress(0);
          break;

        case "#producto":
          setProgress(0.25);
          break;

        case "#proceso":
          setProgress(0.50);
          break;

        case "#diseno":
          setProgress(0.75);
          break;

        case "#contactos":
          setProgress(1);
          break;

        default:
          setProgress(0);
      }
    };

    // Ejecutar inmediatamente al montar
    handleHashChange();

    // Escuchar cambios del hash
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);


  return (
<div
  className="scroller index-page__scroller hidden-mobile hidden-tablet"
  style={{
          translate: "none",
    rotate: "none",
    scale: "none",
    transformOrigin: "50% 50% 0px",
    transform: "translate(0px)",
    opacity: 1,
  }}
>
  <div
    className="scroller__thumb"
    style={{
      transform: `translateY(${progress *800 }% )`,
    }}
  ></div>
</div>
  );
}
