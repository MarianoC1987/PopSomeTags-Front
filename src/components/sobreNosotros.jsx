import React from "react";
import Img1 from "../assets/sobreNosotrosHeader.png";
import Img2 from "../assets/sobreNosotros2.jpg";

function SobreNosotros() {
    return (
        <section class="flex flex-col justify-between">
            <div class="flex flex-col justify-between w-screen h-1/5">
                <img class="p-3 rounded-2xl" src={Img1} alt="" />
                <h2 class="text-2xl text-gray-800 text-center font-semibold">Conoce quiénes somos y nuestra misión en la moda circular</h2>
            </div>
            <container class="flex items-center justify-between w-screen h-3/5">
                <div class="flex w-6/12">
                    <p class="text-sm text-start text-gray-800 p-3">
                        ¡Hola! Bienvenidos a nuestra tienda de moda circular. Te contaremos un poco sobre nosotros y nuestra misión.<br /><br />
                        Somos un equipo apasionado por la moda sostenible y consciente de que la moda tiene un impacto significativo en el medio ambiente. Decidimos abrir esta tienda de segunda mano con el objetivo de contribuir a la reducción de la huella ambiental de la industria de la moda y fomentar un consumo responsable y ético.<br /><br />
                        En nuestra tienda encontrarás prendas de segunda mano de alta calidad, seleccionadas cuidadosamente para garantizar su durabilidad y estilo atemporal. Además, ofrecemos una amplia variedad de estilos y tallas, para que todas y todos puedan encontrar algo que les guste.<br /><br />
                        Nos importa la satisfacción de nuestros clientes, por lo que nos aseguramos de que cada compra sea una experiencia positiva y sin complicaciones.<br /><br />
                        Creemos que la moda circular es el futuro y que cada vez más personas se están dando cuenta de la importancia de consumir de manera responsable.<br /><br />
                        ¡Únete a nuestra comunidad de moda circular y ayúdanos a crear un futuro más sostenible y consciente!
                    </p>
                </div>
                <div class="flex w-6/12"><img class="p-3 rounded-2xl" src={Img2} alt="" /></div>
            </container>
            <div class="flex items-center justify-center w-screen h-40 bg-slate-700">
                <p class="text-sm text-gray-50 p-3">
                    La moda circular nos brinda la oportunidad de transformar el desperdicio en recursos valiosos, prolongando la vida útil de las prendas y ayudando a conservar los recursos naturales del planeta.
                </p>
            </div>
        </section>
    );
}
export default SobreNosotros