/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { ProjectsData } from "../Data";
import { PuzzleIcon } from "@heroicons/react/solid";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto pt-10 pb-40">
                <div className="text-center">
                    <PuzzleIcon className="inline-block w-10 mb-4" />
                    <h1 className="text-3xl font-medium title-font text-white mb-4">
                        Projetos
                    </h1>
                </div>

                <div className="flex flex-wrap lg:w-full sm:mx-auto sm:mb-2">
                    {ProjectsData.map((project) => (
                        <div key={project} className="w-full p-2 sm:w-1/2">
                            <div className="border-gray-800 border rounded-md container p-32 px-5 pt-4 pb-3 h-full">
                                <h1 className="text-lg font-medium text-center text-white mb-3 hover:text-blue-500 transition-all duration-150 cursor-pointer">
                                    <a href={project.Link} target="_blank" rel="noopener noreferrer" data-te-toggle="tooltip" title="Demo do projeto">{project.Title}</a>
                                </h1>

                                <p className="leading-relaxed text-center mb-4">{project.Description}</p>

                                <img className="object-cover rounded-md mx-auto my-3" src={project.Image} alt="Imagem do projeto"></img>

                                {project.Techs.map(item => (
                                    <div className="inline-block p-1">
                                        <p className="font-medium text-base text-white leading-relaxed bg-blue-500 rounded-full bg-opacity-80 px-2 lg:text-base md:text-base sm:text-xs mbsc:text-xs">{item.TechName}</p>
                                    </div>
                                ))}

                                <div className="flex float-right space-x-3 pt-1 sm:pt-1 sm:pb-0 mbsc:pt-2 mbsc:pb-3">
                                    {project.Demo ? (<a href={project.DemoLink} target="_blank" rel="noopener noreferrer" data-te-toggle="tooltip" title="Demo do projeto"><img className="w-6 lg:w-6 md:w-6 sm:w-4 mbsc:w-4 hover:scale-105 transition-all duration-200 cursor-pointer" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1yb2NrZXQiPjxwYXRoIGQ9Ik00LjUgMTYuNWMtMS41IDEuMjYtMiA1LTIgNXMzLjc0LS41IDUtMmMuNzEtLjg0LjctMi4xMy0uMDktMi45MWEyLjE4IDIuMTggMCAwIDAtMi45MS0uMDl6Ii8+PHBhdGggZD0ibTEyIDE1LTMtM2EyMiAyMiAwIDAgMSAyLTMuOTVBMTIuODggMTIuODggMCAwIDEgMjIgMmMwIDIuNzItLjc4IDcuNS02IDExYTIyLjM1IDIyLjM1IDAgMCAxLTQgMnoiLz48cGF0aCBkPSJNOSAxMkg0cy41NS0zLjAzIDItNGMxLjYyLTEuMDggNSAwIDUgMCIvPjxwYXRoIGQ9Ik0xMiAxNXY1czMuMDMtLjU1IDQtMmMxLjA4LTEuNjIgMC01IDAtNSIvPjwvc3ZnPg==" alt="Demo do projeto"></img></a>) : (null)}

                                    <a href={project.Link} target="_blank" rel="noopener noreferrer" data-te-toggle="tooltip" title="Repositório no GitHub"><img className="w-6 lg:w-6 md:w-6 sm:w-4 mbsc:w-4 hover:scale-105 transition-all duration-200 cursor-pointer" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1naXRodWIiPjxwYXRoIGQ9Ik0xNSAyMnYtNGE0LjggNC44IDAgMCAwLTEtMy41YzMgMCA2LTIgNi01LjUuMDgtMS4yNS0uMjctMi40OC0xLTMuNS4yOC0xLjE1LjI4LTIuMzUgMC0zLjUgMCAwLTEgMC0zIDEuNS0yLjY0LS41LTUuMzYtLjUtOCAwQzYgMiA1IDIgNSAyYy0uMyAxLjE1LS4zIDIuMzUgMCAzLjVBNS40MDMgNS40MDMgMCAwIDAgNCA5YzAgMy41IDMgNS41IDYgNS41LS4zOS40OS0uNjggMS4wNS0uODUgMS42NS0uMTcuNi0uMjIgMS4yMy0uMTUgMS44NXY0Ii8+PHBhdGggZD0iTTkgMThjLTQuNTEgMi01LTItNy0yIi8+PC9zdmc+" alt="Repositório no GitHub"></img></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}