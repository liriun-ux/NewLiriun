"use client";

import ArrowUp from "@/component/arrowUP";
import ArrowDown from "@/component/arrow";

const sections = [
  "#inicio",
  "#producto",
  "#diseno",
  "#proceso",
  "#contactos",
];

export default function ScrollButtons() {
  const handleScroll = (direction: "up" | "down") => {
    const currentHash = window.location.hash || "#inicio";

    const currentIndex = sections.indexOf(currentHash);

    // Si el hash actual no está en nuestra lista
    if (currentIndex === -1) {
      window.location.hash = "#inicio";
      return;
    }

    let nextIndex = currentIndex;

    if (direction === "up") {
      nextIndex = Math.max(0, currentIndex - 1);
    }

    if (direction === "down") {
      nextIndex = Math.min(
        sections.length - 1,
        currentIndex + 1
      );
    }

    window.location.hash = sections[nextIndex];
  };

  return (
    <div className="scroll-buttons">

      <button
        type="button"
        title="Scroll up"
        onClick={() => handleScroll("up")}
      >
        <ArrowUp className="my-arrow" />
      </button>

      <button
        type="button"
        title="Scroll down"
        className="footer-interactive__mouse-btn"
        onClick={() => handleScroll("down")}
      >
        <ArrowDown className="my-arrow" />
      </button>

    </div>
  );
}
