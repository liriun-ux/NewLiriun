"use client"
import ProcessCaption from "./prdtitle"
import ProcessStep from "./itemPages"
export default function PrdPages(){
    return(
        <div className="m-10 prdPages">
            <div className="pdsdecrip">
                <ProcessCaption
                texto1="Tu negocio necesita ser encontrado antes de poder ser elegido."
                texto2="Una presencia digital sólida permite que las personas descubran quién eres, qué ofreces y cómo contactarte, incluso cuando todavía no cuentas con un sitio web."
                />
            </div>

            <div className="ExPages">
                <div className="PrPagesSec">
                <ProcessStep
                title="1Discover"
                description="The agile working process with flexible task distribution, even for small projects, allows us to shorten terms up to twice faster as usual."
                />
                        
                <ProcessStep
                title="Discove2r"
                description="The agile working process with flexible task distribution, even for small projects, allows us to shorten terms up to twice faster as usual."
                />
                <ProcessStep
                title="Discover3"
                description="The agile working process with flexible task distribution, even for small projects, allows us to shorten terms up to twice faster as usual."
                />
                <ProcessStep
                title="Discover4"
                description="The agile working process with flexible task distribution, even for small projects, allows us to shorten terms up to twice faster as usual."
                />
                <ProcessStep
                title="Discover5"
                description="The agile working process with flexible task distribution, even for small projects, allows us to shorten terms up to twice faster as usual."
                />
                </div>
            </div>


        </div>
    )
}
