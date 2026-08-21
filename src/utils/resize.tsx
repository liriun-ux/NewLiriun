"use client";

import { useEffect } from "react";

export default function ViewportUnits() {
  useEffect(() => {
    const updateViewport = () => {

      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );

      document.documentElement.style.setProperty(
        "--vw",
        `${window.innerWidth * 0.01}px`
      );
      console.log("new change")

    };

    updateViewport();


      window.addEventListener("resize", updateViewport);
    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  return null;
}
