

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
                    texto1="¡Trabajemos juntos!"
                    texto2="Cuéntanos sobre tu proyecto. Podremos mostrarte ejemplos de proyectos similares para tu negocio o servicio."
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
