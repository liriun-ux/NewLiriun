"use client"
import Prdseo from "./prdseo"
import PrdPages from "./prdPages"

import ProcessCaption from "./prdtitle"
import MProcessCaption from "./TitleMovil"

export default function SectionProduct(){
    const Pages=[
        {
            title:"inicio",
            description:"loren awdo adwo daw oawd oawd aowduawdn idabw  awdy"
        },
        {
            title:"Productos o Servicios",
            description:"loren awdo adwo daw oawd oawd aowduawdn idabw  awdy"
        },
        {
            title:"Proseso de trabajo",
            description:"loren awdo adwo daw oawd oawd aowduawdn idabw  awdy"
        },
        {
            title:"Seccion de historia y presentacion",
            description:"loren awdo adwo daw oawd oawd aowduawdn idabw  awdy"
        },
        {
            title:"Contactos",
            description:"loren awdo adwo daw oawd oawd aowduawdn idabw  awdy"
        },
    ]
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
                        texto1="Hacemos que tu sitio sea fácil de encontrar, entender y posicionar."
                        texto2="Optimizamos tu presencia para motores como Google y DuckDuckGo, mejorando la forma en que tus páginas, servicios y productos aparecen frente a las personas que los están buscando."
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
                        texto1="Hacemos que tu sitio sea fácil de encontrar, entender y posicionar."
                        texto2="Optimizamos tu presencia para motores como Google y DuckDuckGo, mejorando la forma en que tus páginas, servicios y productos aparecen frente a las personas que los están buscando."
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
                            We&nbsp;are interested in&nbsp;effective 
                            We&nbsp;are interested in&nbsp;effective 
                            We&nbsp;are interested in&nbsp;effective 
                            and long-term cooperation.
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
