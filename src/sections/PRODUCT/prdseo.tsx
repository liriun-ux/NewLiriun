
"use client"
import ProcessCaption from "./prdtitle"

export default function Prdseo(){
    return(
    <div className="m-10 prdseo">
        <div className="pdsdecrip">
            <ProcessCaption
            texto1="Tu negocio necesita ser encontrado antes de poder ser elegido."
            texto2="Una presencia digital sólida permite que las personas descubran quién eres, qué ofreces y cómo contactarte, un sitio web profecional muestra todo de tu negocio para los usuarios."
            />
        </div>
        <div className="pdsgl">
            <ProcessCaption
                        texto1="Tú sitio web con proposito"
                        texto2="Tu sitio web no solo es funcional, tiene un propósito. Diseñamos cada sección para representar la identidad de tu negocio, destacar tus productos y servicios, y captar la atención de tus clientes."
            />
        </div>
        <div className="pdsia">
            <ProcessCaption
                        texto1="Optimizado para navegadores GOOGLE y agentes de IA"
                        texto2="Estructuramos tu sitio web para que Google y los agentes de IA puedan comprender tu negocio, tus servicios y tu información, ayudando a que más personas puedan encontrarte y elegirte."
            />
        </div>
    </div>
    
    )
}
