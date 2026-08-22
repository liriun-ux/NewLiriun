"use client"
import Prdseo from "./prdseo"
import PrdPages from "./prdPages"

import ProcessCaption from "./prdtitle"
import MProcessCaption from "./TitleMovil"

export default function SectionProduct(){
const Pages = [
    {
        title: "inicio",
        description:
            "Comunica quién eres, qué haces y qué diferencia a tu negocio desde el primer momento."
    },
    {
        title: "Productos",
        description:
            "Muestra tus productos y servicios de forma clara y atractiva."
    },
    {
        title: "Proceso de trabajo",
        description:
            "Explica cómo trabajas y qué puede esperar el cliente de una forma clara y profesional."
    },
    {
        title: "Contactos",
        description:
            "Haz que tus clientes puedan contactarte fácilmente y dar el siguiente paso."
    },
    {
        title: "Adaptado a tu Negocio",
        description:
            "Añadimos las secciones que tu negocio necesita. "
    },
];
    return(
        <div className="about-section slide-page" >
            <div className="parentProd DisenoRhiden">
                <Prdseo/>
                  <div
                    className="about-types__border"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transformOrigin: "50% 50% 0px",
                      transform: "translate(0px)",
                      opacity: 1,
                    }}
                  />
                <PrdPages/>
                  <div
                    className="about-types__border"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transformOrigin: "50% 50% 0px",
                      transform: "translate(0px)",
                      opacity: 1,
                    }}
                  />

                <blockquote className="">
                    <div    className="title__font title__font--muted title__font--description-sm frtege">
                    cada sitio web se hace pensando en tu negocio para que muestre tu producto y resalte, posicionando en los buscadores de GOOGLE y agentes de Inteligencia Artificial.
                    </div>
                </blockquote>
            </div>
            <div className="ProductsBaseSection">
                <div className="ChildProductUp">
                    <div className="pdsgl">
                        <MProcessCaption
                        texto1="Tú sitio web con proposito"
                        texto2="No solo es funcional, tiene un propósito. Diseñamos cada sección para representar la identidad de tu negocio, destacar tus productos y servicios, y captar la atención de tus clientes."
                        />
                    </div>
                  <div
                    className="about-types__border mt-1 mb-2"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transformOrigin: "50% 50% 0px",
                      transform: "translate(0px)",
                      opacity: 1,
                    }}
                  />
                    <div className="pdsgl">
                        <MProcessCaption
                        texto1="Optimizado para navegadores GOOGLE y agentes de IA"
                        texto2="Tu negocio necesita ser encontrado antes de poder ser elegido. Estructuramos tu sitio web para que Google y los agentes de IA puedan comprender tu negocio, tus servicios y tu información, ayudando a que más personas puedan encontrarte y elegirte."
                        />
                    </div>


                  <div
                    className="about-types__border mt-1"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transformOrigin: "50% 50% 0px",
                      transform: "translate(0px)",
                      opacity: 1,
                    }}
                  />
                </div>
                <div className="ChildProductDown">
                    <div className="TitleProduct">

                        <blockquote className="contact-popup__blockquote title">
                          <span className="title__border title__border--accent"></span>
                          <span className="title__font title__font--title-sm titleContact whitespace-normal! ">
Tu sitio web debe guiar a tus clientes hasta lo que necesitan.
                          </span>
                        </blockquote>
                    </div>
                    <div className="ListPagesProduct">
                        {Pages.map((item) => (
                        <blockquote className="contact-popup__blockquote title" key={item.title}>
                          <span className="title__border title__border--accent"></span>
                          <span className="title__font title__font--title-sm titleContact whitespace-normal!">
                             <span className="text-[#ffffff]"> {item.title}</span> <br />
                             <span className="text-[#aaaaa3]"> {item.description}</span> 
                          </span>
                        </blockquote>
                        ))}

                    </div>
                </div>
            </div>

        </div>
    )
}
