
"use client"
import ProcessCaption from "./prdtitle"

export default function Prdseo(){
    return(
    <div className="m-10 prdseo">
        <div className="pdsdecrip">
            <ProcessCaption
            texto1="Tu negocio necesita ser encontrado antes de poder ser elegido."
            texto2="Una presencia digital sólida permite que las personas descubran quién eres, qué ofreces y cómo contactarte, incluso cuando todavía no cuentas con un sitio web."
            />
        </div>
        <div className="pdsgl">
            <ProcessCaption
            texto1="Hacemos que tu sitio sea fácil de encontrar, entender y posicionar."
            texto2="Optimizamos tu presencia para motores como Google y DuckDuckGo, mejorando la forma en que tus páginas, servicios y productos aparecen frente a las personas que los están buscando."
            />
        </div>
        <div className="pdsia">
            <ProcessCaption
            texto1="Tu negocio también debe ser visible para la nueva generación de búsqueda."
            texto2="Optimizamos la información y estructura de tu presencia digital para que los sistemas de inteligencia artificial puedan comprenderla, considerarla y recomendarla cuando alguien busca productos o servicios como los tuyos."
            />
        </div>
    </div>
    
    )
}
