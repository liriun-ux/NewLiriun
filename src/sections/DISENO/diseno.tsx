
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
Cada sitio web es diseñado pensando en las necesidades de cada cliente, buscando resaltar su negocio y diferenciándolo de los demás.
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
