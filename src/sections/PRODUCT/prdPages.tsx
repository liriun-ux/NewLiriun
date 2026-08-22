"use client"
import ProcessCaption from "./prdtitle"
import ProcessStep from "./itemPages"
export default function PrdPages(){


const Pages = [
    {
        title: "inicio",
        description:
            "Comunica quién eres, qué haces y qué diferencia a tu negocio desde el primer momento."
    },
    {
        title: "Productos",
        description:
            "Muestra tus productos y servicios de forma clara, atractiva y fácil de encontrar."
    },
    {
        title: "Proceso de trabajo",
        description:
            "Explica cómo trabajas y qué puede esperar el cliente de una forma clara y profesional."
    },
    {
        title: "Contactos",
        description:
            "Haz que tus clientes puedan contactarte fácilmente y dar el siguiente paso."
    },
    {
        title: "Adaptado a tu Negocio",
        description:
            "Añadimos las secciones que tu negocio necesita para comunicar mejor su propuesta."
    },
];

    return(
        <div className="m-10 prdPages">
            <div className="pdsdecrip">
                <ProcessCaption
                texto1="Tu sitio web debe guiar a tus clientes hasta lo que necesitan."
                texto2="Una estructura web bien pensada organiza la información de tu negocio de forma clara y estratégica, facilitando que las personas conozcan tu propuesta, descubran lo que ofreces, encuentren respuestas a sus necesidades y sepan cómo dar el siguiente paso."
                />
            </div>

            <div className="ExPages">
                <div className="PrPagesSec">
                                        {Pages.map((item) => (
                                        <ProcessStep key={item.title}
                                        title={item.title}
                                        description={item.description}
                                            />
                                        ))}

                        
                </div>
            </div>


        </div>
    )
}
