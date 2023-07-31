import React, { useState } from "react"

export default function Navbar() {
    let Links = [
        { name: "Início", link: "#home" },
        { name: "Sobre mim", link: "#about" },
        { name: "Habilidades", link: "#skills" },
        { name: "Projetos", link: "#projects" },
        { name: "Contato", link: "#contact" },
    ];

    let [open, setOpen] = useState(false);

    return (
        <div className="w-full fixed top-0 left-0 shadow-md shadow-gray-800 z-50">
            <div className="bg-gray-900 items-center justify-between p-6 md:flex">
                <div className="font-bold text-lg text-white flex items-center cursor-pointer">
                    <a href="#home"><img className="w-6 ml-4" src="./logo.png" alt="Logo"></img></a>

                    <p className="font-medium ml-4">
                        <a href="#home">Murilo Storari</a>
                    </p>
                </div>

                <div onClick={() => setOpen(!open)} className="text-3xl text-white absolute right-8 top-6 md:hidden cursor-pointer">
                    <ion-icon name={open ? "close" : "menu"}></ion-icon>
                </div>

                <ul className={`bg-gray-900 w-full absolute left-0 pl-10 z-[-1] lg:space-x-4 md:space-x-4 md:flex md:items-center md:pb-0 md:static md:z-auto md:w-auto md:pl-0 ${open ? "top-15 space-x-0" : "top-[-500px] space-x-4"}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className="text-lg font-medium text-white my-7 md:ml-8 md:my-0">
                                <a href={link.link} className="mr-5 hover:text-blue-500 transition-all duration-200">{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}