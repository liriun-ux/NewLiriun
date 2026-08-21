
"use client";
import DisenoCaption from "./desenoCaption";
import CarouselDiseno from "./carrusel";

export default function SectionDiseno(){
    return(
        <div className="about-section slide-page">
           <div className="parentDiseno">
              <div className="childDisenoL ">
                <div className="childLBase">
            <DisenoCaption   className="DisenoRhiden" 
            texto1="Tu negocio necesita ser encontrado antes de poder ser elegido."
            texto2="Una presencia digital sólida permite que las personas descubran quién eres, qué ofreces y cómo contactarte, incluso cuando todavía no cuentas con un sitio web."
            />
                  <div
                    className="about-types__border DisenoRhiden"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transformOrigin: "50% 50% 0px",
                      transform: "translate(0px)",
                      opacity: 1,
                    }}
                  />
            <DisenoCaption className="DisenoRhiden"
            texto1="Tu negocio necesita ser encontrado antes de poder ser elegido."
            texto2="Una presencia digital sólida permite que las personas descubran quién eres, qué ofreces y cómo contactarte, incluso cuando todavía no cuentas con un sitio web."
            />
                  <div
                    className="about-types__border DisenoRhiden"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transformOrigin: "50% 50% 0px",
                      transform: "translate(0px)",
                      opacity: 1,
                    }}
                  />
<blockquote className="" style={{marginTop:"1vh", marginInline:"2vw"}}>
    <div    className="title__font title__font--muted title__font--description-sm frtege ">
    cada sitio web se hace pensando en tu negocio para que muestre tu producto y resalte, posicionando en los buscadores de GOOGLE y agentes de Inteligencia Artificial.
    </div>
</blockquote>

                </div>
              </div>



              <div className="childDisenoR ">
                <CarouselDiseno/>
              </div>

            </div>
        </div>
    )
}
