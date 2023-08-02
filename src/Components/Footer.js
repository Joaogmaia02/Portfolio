import React from "react"

export default function Footer() {
    return (
        <footer className="text-gray-400 bg-gray-800 body-font z-10">
            <div class="items-center justify-between p-6 md:flex">
                <span class="text-base font-medium ml-4">© 2023 - Murilo Storari</span>

                <div className="flex float-right space-x-6">
                    <a href="https://www.linkedin.com/in/murilostorari/" target="_blank" rel="noopener noreferrer" data-te-toggle="tooltip" title="Meu LinkedIn"><img className="w-6 hover:scale-105 transition-all duration-200 cursor-pointer" src="./img/icons/linkedin.png" alt="Meu LinkedIn"></img></a>
                    <a href="https://github.com/murilostorari" target="_blank" rel="noopener noreferrer" data-te-toggle="tooltip" title="Meu GitHub"><img className="w-6 hover:scale-105 transition-all duration-200 cursor-pointer" src="./img/icons/github.png" alt="Meu GitHub"></img></a>
                </div>
            </div>
        </footer>
    );
}
