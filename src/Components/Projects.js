/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { ProjectsData } from "../Data";
import { PuzzleIcon } from "@heroicons/react/solid";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="mx-auto pt-10 pb-40 max-w-[85%]">
                <div className="text-center">
                    <PuzzleIcon className="inline-block w-10 mb-4" />
                    <h1 className="text-3xl font-medium title-font text-white mb-4">
                        Projetos
                    </h1>
                </div>

                <div className="flex flex-wrap mx-auto sm:mb-2">
                    {ProjectsData.map((project) => (
                        <div key={project} className="p-2 lg:w-1/2 md:w-full sm:w-full">
                            <div className="border-gray-800 border rounded-md px-5 pt-4 pb-3">
                                <h1 className="text-lg font-medium text-center text-white mb-3 hover:text-blue-500 transition-all duration-150 cursor-pointer">
                                    {project.Demo ? (<a href={project.DemoLink} target="_blank" rel="noopener noreferrer" data-te-toggle="tooltip" title="Demo do projeto">{project.Title}</a>) : (<a href={project.Link} target="_blank" rel="noopener noreferrer" data-te-toggle="tooltip" title="Repositório do projeto">{project.Title}</a>)}
                                </h1>

                                <p className="leading-relaxed text-center mb-4">{project.Description}</p>

                                <img className="object-cover rounded-md mx-auto my-3" src={project.Image} alt="Imagem do projeto"></img>

                                <div className="flex flex-wrap">
                                    {project.Techs.map(item => (
                                        <div className="inline-block p-1 lg:max-w-full md:max-w-full sm:max-w-[70%] mbsc:max-w-[60%]">
                                            <p className="font-medium text-base text-white leading-relaxed bg-blue-500 rounded-full bg-opacity-80 px-2 lg:text-base md:text-base sm:text-base mbsc:text-sm">{item.TechName}</p>
                                        </div>
                                    ))}

                                    <div className="flex space-x-3 ml-auto pt-1">
                                        {project.Demo ? (<a href={project.DemoLink} target="_blank" rel="noopener noreferrer" data-te-toggle="tooltip" title="Demo do projeto"><img className="w-6 lg:w-6 md:w-6 sm:w-6 mbsc:w-5 hover:scale-105 transition-all duration-200 cursor-pointer" src="./img/icons/rocket.png" alt="Demo do projeto"></img></a>) : (null)}

                                        <a href={project.Link} target="_blank" rel="noopener noreferrer" data-te-toggle="tooltip" title="Repositório no GitHub"><img className="w-6 lg:w-6 md:w-6 sm:w-6 mbsc:w-5 hover:scale-105 transition-all duration-200 cursor-pointer" src="./img/icons/github.png" alt="Repositório no GitHub"></img></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}