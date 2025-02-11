/* eslint-disable @next/next/no-img-element */

import {BiLogoWhatsapp, BiLogoGithub, BiLogoLinkedin   } from "react-icons/bi";

export default function PresentacionJan() {
    return (
        <div className="cursor-pointer mt-12">
            <div className="flex flex-col items-center md:flex-row md:items-stretch gap-4 m-4 p-6 bg-background rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 dark:shadow-gray-900 border ">
                <img
                    src="/perfil_images/foto_perfil.jpg"
                    alt="Foto de perfil de Jan te Winkel"
                    className="aspect-square w-40 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
                />

                <div className="text-center md:text-left flex flex-col justify-center w-full md:w-3/4">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-indigo-800 dark:hover:text-indigo-400  transition-colors duration-300">
                        Jan te Winkel
                    </h2>

                    <p className="mt-0.5 text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">
                        Ingeniero de Sistemas.
                    </p>
                    <p className="mt-0.5 text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">
                        Desarrollo Web.
                    </p>

                    <div id="Iconos" className="flex mt-3 -mx-2 justify-center md:justify-start">
                        <a href="https://wa.me/+584125308748" className="mx-2 text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-100 group-hover:text-white" aria-label="Whatsapp">
                            <BiLogoWhatsapp className="size-9 text-gray-800 mx-auto dark:text-neutral-200" />
                        </a>

                        <a href="https://github.com/JanteWinkel" className="mx-2 text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-100 group-hover:text-white" aria-label="Github">
                            <BiLogoGithub  className="size-9 text-gray-800 mx-auto dark:text-neutral-200" />
                        </a>

                        <a href="#" className="mx-2 text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-100 group-hover:text-white" aria-label="Linkedin">
                            <BiLogoLinkedin  className="size-9 text-gray-800 mx-auto dark:text-neutral-200" />
                        </a>
                    </div>
                </div>
                <article
                    className="group hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition-all duration-500 hover:bg-[length:400%_400%] hover:shadow-2xl dark:shadow-gray-900 "
                >
                    <div className="rounded-[10px] bg-background  p-4 sm:p-6 transition-transform duration-500 group-hover:scale-105">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                            Habilidades
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {[
                                "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "PostgreSQL", "Git/GitHub",
                            ].map((skill, index) => (
                                <span
                                    key={index}
                                    className="rounded-full bg-indigo-100 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-gray-900 dark:text-gray-100 transition-all duration-300 hover:bg-indigo-200 dark:hover:bg-indigo-700 hover:text-gray-950 dark:hover:text-gray-50 hover:scale-110"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </article>

            </div>
        </div>
    );
}