
"use client"
import Prdseo from "../PRODUCT/prdseo"
import PrdStep from "./procesSteps"

export default function SectionProcess(){
    return(
        <div className="about-section slide-page" >
            <div className="parentProd">
                <PrdStep/>
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

<blockquote className="DisenoRhiden" >
    <div    className="title__font title__font--muted title__font--description-sm frtege">
    cada sitio web se hace pensando en tu negocio para que muestre tu producto y resalte, posicionando en los buscadores de GOOGLE y agentes de Inteligencia Artificial.
    </div>
</blockquote>
            </div>

        </div>
    )
}
