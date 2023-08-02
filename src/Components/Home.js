import React from "react";

export default function Home() {
    return (
        <section id="home" className="text-gray-400 bg-gray-900 body-font">
            <div className="mx-auto flex pt-48 pb-40 max-w-[85%] md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Olá, eu sou o Murilo Storari
                    </h1>
                    <p className="mb-8 leading-relaxed text-xl">
                        Estudante de Ciência da Computação
                    </p>
                    <div className="flex justify-center">
                        <a href="#about" className="text-lg font-medium text-white bg-blue-500 inline-flex rounded-md px-6 py-2 hover:bg-blue-600 transition-all duration-150">
                            Saiba mais
                        </a>
                        <a href="#contact" className="text-lg font-medium text-white border border-gray-700 inline-flex rounded-md px-6 py-2 ml-4 hover:bg-gray-800 transition-all duration-150">
                            Contato
                        </a>
                    </div>
                </div>

                <img className="object-cover object-center rounded-full md:max-w-[50%] sm:max-w-[85%]" alt="hero" src="./perfil.jpg"></img>
            </div>
        </section>
    );
}