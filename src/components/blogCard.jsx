import React from "react";

const blogCards = [
    {
        id: 1,
        title: "Sustentabilidad",
        tiempoLectura: 4,
        fotoPath: ""
    },
    {
        id: 2,
        title: "Crea tu moda",
        tiempoLectura: 5,
        fotoPath: ""
    },
    {
        id: 3,
        title: "Less new",
        tiempoLectura: 8,
        fotoPath: ""
    },
    {
        id: 4,
        title: "Street style",
        tiempoLectura: 4,
        fotoPath: ""
    },
    {
        id: 5,
        title: "Tendencias hombre",
        tiempoLectura: 5,
        fotoPath: ""
    },
    {
        id: 6,
        title: "Limpia tu ropero",
        tiempoLectura: 8,
        fotoPath: ""
    }
]

function BlogCard() {

    return (
        <ul role="list">
            {blogCards.map((key, card) => {
                return (

                    <li class="group/item hover:bg-slate-100 bg-white rounded-[20px] w-[15rem] h-[18rem]">
                        <img src={card.fotoPath} alt="Foto" />
                        <div>
                            <h2 class="text-2xl text-gray-800 text-start font-semibold p-2">{card.title}</h2>
                            <p class="text-xs italic text-gray-800 text-start font-semibold p-2">Lectura de {card.tiempoLectura} minutos</p>
                        </div>
                        <a class="group/edit invisible hover:bg-slate-200 group-hover/item:visible" href="{card.descr}">
                            <span class="group-hover/edit:text-gray-700">Ver más</span>
                            <svg class="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500">
                            </svg>
                        </a>
                    </li>
                );
            })}
        </ul>
    )
}
export default BlogCard;