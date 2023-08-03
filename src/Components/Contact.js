import React from "react";
import { ContactsData } from "../Data";
import { PhoneIcon } from "@heroicons/react/solid";

export default function Contact() {
    return (
        <section id="contact">
            <div className="max-w-[85%] mx-auto py-4">
                <div className="text-center">
                    <PhoneIcon className="w-10 inline-block mb-4" />
                    <h1 className="text-3xl font-medium title-font text-white mb-4">
                        Entre em contato
                    </h1>
                </div>

                <div className="flex flex-wrap lg:w-full sm:mx-auto sm:mb-2">
                    {ContactsData.map((contato) => (
                        <div key={contato} className="p-2 lg:w-1/2 md:w-1/2 sm:w-full mbsc:w-full">
                            <div className="border-gray-800 border rounded-md px-2 py-1">
                                <div className="flex items-center mbsc:break-all">
                                    <img className="ml-3 mr-3 lg:w-10 lg:h-10 md:w-10 md:h-10 sm:w-10 sm:h-10 mbsc:w-8 mbsc:h-8" src={contato.Image} alt={contato.Name}></img>

                                    <div className="md:p-1 md:text-left sm:p-1">
                                        <p className="text-sb text-white font-medium">
                                            <div className="text-white mb-1">{contato.Name}</div>
                                            <a href={contato.Link} className="text-gray-400 hover:text-blue-500 transition-all duration-200 cursor-pointer" target="_blank" rel="noopener noreferrer">{contato.ItemText}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}