"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollSections() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const sections = [
    "DIV 1",
    "DIV 2",
    "DIV 3",
    "DIV 4",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const progress =
        -rect.top / (rect.height - window.innerHeight);

      const index = Math.min(
        sections.length - 1,
        Math.max(
          0,
          Math.floor(progress * sections.length)
        )
      );

      setActive(index);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections.length]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[400vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        {sections.map((section, index) => (
          <div
            key={section}
            className={`
              absolute inset-0
              flex items-center justify-center
              transition-all duration-700
              ${
                index === active
                  ? "translate-y-0 opacity-100"
                  : index < active
                    ? "-translate-y-full opacity-0"
                    : "translate-y-full opacity-0"
              }
            `}
          >
            <h2 className="text-6xl font-bold">
              {section}
            </h2>
          </div>
        ))}

      </div>
    </section>
  );
}
