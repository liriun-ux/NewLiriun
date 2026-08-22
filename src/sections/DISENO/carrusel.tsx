"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import DisenoCaption from "./desenoCaption";


const items = [
  {
    name: "Diseño Web",
    link: "/diseno-web",
    image: "/images/default.png",
    texto1:"Tu negocio necesita ser encontrado antes de poder ser elegido.",
    texto2:"Dso Una presencia digital sólida permite que las personas descubran quién eres, qué ofreces y cómo contactarte, incluso cuando todavía no cuentas con un sitio web.",
    build:false,
  },
  {
    name: "Branding",
    link: "/branding",
    image: "/images/default1.png",
    texto1:"Brand Tu negocio necesita ser encontrado antes de poder ser elegido.",
    texto2:"Una presencia digital sólida permite que las personas descubran quién eres, qué ofreces y cómo contactarte, incluso cuando todavía no cuentas con un sitio web.",
    build:false,
  },
  {
    name: "UI / UX",
    link: "/ui-ux",
    image: "/images/default2.png",
    texto1:"UX Tu negocio necesita ser encontrado antes de poder ser elegido.",
    texto2:"Una presencia digital sólida permite que las personas descubran quién eres, qué ofreces y cómo contactarte, incluso cuando todavía no cuentas con un sitio web.",
    build:false,
  },
  {
    name: "E-Commerce",
    link: "/ecommerce",
    image: "/images/default1.png",
    texto1:"E-com Tu negocio necesita ser encontrado antes de poder ser elegido.",
    texto2:"Una presencia digital sólida permite que ",
    build:true,
  },
];

export default function CarouselDiseno() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);



  return (
    <div className="carouselDiseno">

      {/* Imagen */}
      <div className="carouselDiseno__image">
<Image
  src={items[active].image}
  alt={items[active].name}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  priority={active === 0}
  className="relative!"
/>
      </div>

      {/* Nombres */}
      <div className="carouselDiseno__names">
        {items.map((item, index) => (
          <a
            key={item.name}
            className={`carouselDiseno__item ${
              active === index ? "is-active" : " DisenoRhiden"
            }`}
            onClick={() => setActive(index)}
          >
            {item.name}
          </a>
        ))}
      </div>
      {/* Descriptio */}
      <div className="carouselDiseno__description">
        <DisenoCaption texto1={items[active].texto1} texto2={items[active].texto2}/>
      </div>
      {/* Ver Enlace */}
<div className="carouselDiseno__names">
  {items[active].build ? (
    <a
      href={items[active].link}
      className="carouselDiseno__item is-active"
    >
      VISITAR - {items[active].name}
    </a>
  ) : (
    <span className="carouselDiseno__item is-active">
      EN CONSTRUCCIÓN
    </span>
  )}
</div>

    </div>
  );
}
