
"use client"
import ProcessCaption from "../PRODUCT/prdtitle"
import PProcessStep from "./ProcesPaso"
export default function PrdStep(){
    return(
        <div className="m-10 prdPages">
            <div className="pdsdecrip ">
                <ProcessCaption className="DisenoRhiden" 
                texto1="Tu negocio necesita ser encontrado antes de poder ser elegido."
                texto2="Una presencia digital sólida permite que las personas descubran quién eres, qué ofreces y cómo contactarte, incluso cuando todavía no cuentas con un sitio web."
                />
            </div>

            <div className="ExPages">
                <div className="PrPagesSec">
                <PProcessStep
                title="1Discover"
                description="The agile workinn terms up to twice faster as usual."
                />
                        
                <PProcessStep
                title="Discove2r"
                description="The agile working process with flexible task distribution, even for small projects, allows us to shorten terms up to twice faster as usual."
                />
                <PProcessStep
                title="Discover3"
                description="The agile working process with flexible task distribution, even for small projects, allows us to shorten terms up to twice faster as usual."
                />
                <PProcessStep
                title="Discover4"
                description="The agile working process with flexible task distribution, even for small projects, allows us to shorten terms up to twice faster as usual."
                />
                <PProcessStep
                title="Discover5"
                description="The agile working process with flexible task distribution, even for small projects, allows us to shorten terms up to twice faster as usual."
                />
                <PProcessStep
                title="Discover6"
                description="The agile working process with flexible task distribution, even for small projects, allows us to shorten terms up to twice faster as usual."
                />
                <PProcessStep
                title="Discover7"
                description="The agile working process with flexible task distribution, even for small projects, allows us to shorten terms up to twice faster as usual."
                />
                <PProcessStep
                title="Discover8"
                description="The agile working process with flexible task distribution, even for small projects, allows us to shorten terms up to twice faster as usual."
                />
                </div>
            </div>


        </div>
    )
}
