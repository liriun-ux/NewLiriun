

"use client";

import DisenoCaption from "../DISENO/desenoCaption";
import SocialLinks from "./redesSociales";
import ContactPopupRight from "./messagecontact";

export default function SectionContacto(){
    return(
        <div className="about-section slide-page">

           <div className="parentContact ">
              <div className="childContactL ">
                <div className="childLBase">
                    <DisenoCaption
                    texto1="Tu negocio necesita ser encontrado antes de poder ser elegido."
                    texto2="Una presencia digital sólida permite que las personas descubran quién eres, qué ofreces y cómo contactarte, incluso cuando todavía no cuentas con un sitio web."
                    />
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

                </div>

                <div className="ContactRedesSociales">
                                    <SocialLinks/>

                </div>
              </div>



              <div className="childContactR ">
                <ContactPopupRight/>
              </div>

            </div>
        </div>
    )
}
