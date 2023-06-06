import React from "react";
import BlogCard from "./blogCard";
import imgHeader from "../assets/blogHeader.png";
import line from "../assets/line.svg"

function Blog() {


    return (
        <section class="flex flex-col justify-between">
            <div class="flex flex-col items-center justify-around h-1/4">
                <img class="w-11/12 rounded-3xl -z-50" src={imgHeader} alt="Blog img" />
                <div class="absolute flex flex-col items-start w-[300px] h-[350px] top-[16rem] right-[6rem] bg-slate-100/[.85] rounded-[20px] p-4 -z-20">
                    <h2 class="text-2xl text-gray-800 text-center font-semibold py-3">Ferias circulares</h2>
                    <img src={line} />
                    <p class="text-sm text-gray-800 text-start font-semibold py-4">Compra productos locales, sostenibles y éticos. <br />Haz un cambio positivo hoy mismo!</p>
                    <span class="text-xs text-gray-800/90 italic py-3">Lectura de 5 minutos.</span>
                    <button class="absolute top-[19rem] right-[2rem] w-[100px] flex justify-center items-center bg-[#ffbc6d] rounded-[10px] text-[#1c2329] hover:bg-[#f68f56] hover:text-[#fdfdfd] -z-10">Leer más</button>
                </div>
            </div>
            <h2 class="text-2xl text-gray-800 text-center font-semibold py-4">Descubre más</h2>
            <div class="grid grid-flow-col auto-cols-max auto-rows-max">
                <BlogCard />
            </div>
            <h2 class="text-2xl text-gray-800 text-center font-semibold py-4">Ver anteriores</h2>
        </section>
    )
}
export default Blog;