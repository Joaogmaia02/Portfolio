import React from "react";
import { UserCircleIcon } from "@heroicons/react/solid";

export default function About() {
    return (
        <section id="about">
            <div className="mx-auto pt-10 pb-40">
                <div className="text-center">
                    <UserCircleIcon className="inline-block w-10 mb-4" />
                    <h1 className="text-3xl font-medium title-font text-white mb-4">
                        Sobre mim
                    </h1>
                    <p className="text-xl leading-relaxed mx-auto max-w-[85%] lg:text-center md:text-center sm:text-justify mbsc:text-justify">
                        <p className="mb-4">
                            Meu nome é Murilo Storari, tenho 18 anos e sou estudante de Ciência da Computação na <a href="https://portal.unifai.com.br" className="text-blue-500" target="_blank" rel="noopener noreferrer">UNIFAI - Centro Universitário de Adamantina</a>. Atualmente estou no segundo semestre do curso e estou dedicando meus estudos ao desenvolvimento de páginas web, com foco em front-end.
                        </p>
                        <p className="mb-4">
                            Meu primeiro contato com tecnologia foi através de um curso de informática que fiz, e foi nesse momento que comecei a me interessar pela coisa.
                        </p>
                        <p className="mb-4">
                            Apesar de ainda não possuir experiência profissional, estou em busca de uma oportunidade no mercado de trabalho para que eu possa colaborar em projetos, aprender coisas novas e contribuir para o sucesso da empresa.
                        </p>
                    </p>
                </div>
            </div>
        </section>
    );
}