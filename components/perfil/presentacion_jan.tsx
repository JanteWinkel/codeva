/* eslint-disable @next/next/no-img-element */
"use client"
import { BiLogoWhatsapp, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

const profiles = [
    {
        name: "Jan te Winkel",
        role: "Ingeniero de Sistemas",
        specialty: "Desarrollo Web",
        image: "/perfil_images/foto_perfil.jpg",
        gradient: "from-green-300 via-blue-500 to-purple-600",
        skills: {
            list: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "PostgreSQL", "Git/GitHub"],
            bgLight: "bg-indigo-100",
            bgDark: "dark:bg-indigo-950",
            hoverLight: "hover:bg-indigo-200",
            hoverDark: "dark:hover:bg-indigo-700",
        },
        social: [
            { icon: <BiLogoWhatsapp className="size-9 text-gray-800 mx-auto dark:text-neutral-200" />, link: "https://wa.me/+584125308748", label: "Whatsapp" },
            { icon: <BiLogoGithub className="size-9 text-gray-800 mx-auto dark:text-neutral-200" />, link: "https://github.com/JanteWinkel", label: "Github" },
            { icon: <BiLogoLinkedin className="size-9 text-gray-800 mx-auto dark:text-neutral-200" />, link: "#", label: "Linkedin" },
        ],
    },
    {
        name: "Franklin te Winkel",
        role: "Diseñador Gráfico",
        specialty: "Ilustración y Comunicación Visual",
        image: "/perfil_images/foto_perfil.jpg",
        gradient: "from-yellow-400 via-pink-500 to-red-600",
        skills: {
            list: ["Adobe", "Edición", "Publicidad", "Identidad Visual", "Composición", "Fotomontaje", "Redes Sociales"],
            bgLight: "bg-orange-100",
            bgDark: "dark:bg-red-950",
            hoverLight: "hover:bg-orange-200",
            hoverDark: "dark:hover:bg-red-700",
        },
        social: [],
    },
];

export default function Presentacion() {
    return (
        <div>
            {profiles.map((profile, index) => (
                <div key={index} className="cursor-pointer mt-12">
                    <div className="flex flex-col items-center md:flex-row md:items-stretch gap-4 m-4 p-6 bg-background rounded-xl shadow-lg transition duration-500 dark:shadow-gray-900 border hover:border-transparent hover:shadow-transparent dark:hover:shadow-transparent hover:scale-110 ">
                        <img
                            src={profile.image}
                            alt={`Foto de perfil de ${profile.name}`}
                            className="aspect-square w-40 rounded-full object-cover transform transition-transform duration-500 hover:scale-110"
                        />

                        <div className="text-center md:text-left flex flex-col justify-center w-full md:w-3/4">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-indigo-800 dark:hover:text-indigo-400 transition-colors duration-300">
                                {profile.name}
                            </h2>

                            <p className="mt-0.5 text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">
                                {profile.role}.
                            </p>
                            <p className="mt-0.5 text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">
                                {profile.specialty}.
                            </p>

                            {profile.social.length > 0 && (
                                <div id="Iconos" className="flex mt-3 -mx-2 justify-center md:justify-start">
                                    {profile.social.map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.link}
                                            className="mx-2 text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-100 group-hover:text-white"
                                            aria-label={social.label}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        <article
                            className={`group hover:animate-background rounded-xl bg-gradient-to-r ${profile.gradient} p-0.5 shadow-xl transition-all duration-500 hover:bg-[length:400%_400%] hover:shadow-2xl dark:shadow-gray-900`}
                        >
                            <div className="rounded-[10px] bg-background p-4 sm:p-6 transition-transform duration-500 group-hover:scale-105">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">Habilidades</h3>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {profile.skills.list.map((skill, i) => (
                                        <span
                                            key={i}
                                            className={`rounded-full ${profile.skills.bgLight} ${profile.skills.bgDark} px-3 py-1 text-xs font-medium text-gray-900 dark:text-gray-100 transition-all duration-300 ${profile.skills.hoverLight} ${profile.skills.hoverDark} hover:text-gray-950 dark:hover:text-gray-50 hover:scale-110`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            ))}
        </div>
    );
}