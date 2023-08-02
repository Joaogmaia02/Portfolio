import React from "react";
import { SkillsData } from "../Data";
import { CodeIcon } from "@heroicons/react/solid";

export default function Skills() {
    return (
        <section id="skills" className="text-gray-400 bg-gray-900 body-font">
            <div className="mx-auto pt-10 pb-40">
                <div className="text-center">
                    <CodeIcon className="inline-block w-10 mb-4" />
                    <h1 className="text-3xl font-medium title-font text-white">
                        Habilidades &amp; Tecnologias
                    </h1>
                </div>

                <div className="flex flex-wrap justify-center mx-auto max-w-[85%] sm:mb-2">
                    {SkillsData.map((skill) => (
                        <div key={skill} className="px-8 lg:py-8 md:py-8 sm:py-8 mbsc:py-6">
                            <div class="group flex relative">
                                <img className="w-16 h-16 hover:scale-110 transition-all duration-300" src={skill.SkillImage} alt={skill.SkillName}></img>

                                <span className="text-sm font-medium text-gray-100 absolute mx-auto opacity-0 m-4 mt-14 px-2 left-1/2 group-hover:opacity-100 transition-opacity -translate-x-1/2 translate-y-full duration-200">
                                    {skill.SkillName}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}