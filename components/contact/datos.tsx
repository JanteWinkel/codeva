import React from 'react';
import { BiLogoTelegram, BiEnvelope, BiLogoWhatsapp, BiSolidChevronRight } from "react-icons/bi";

const contactOptions = [
    {
        id: 1,
        name: "Whatsapp",
        description: "Si necesitas ayuda o más información, ¡no dudes en escribirme!",
        link: "https://wa.me/+584125308748",
        buttonText: "Haz tus consultas por Whatsapp",
        icon: <BiLogoWhatsapp className="size-10 text-gray-800 mx-auto dark:text-neutral-200" />
    },
    {
        id: 2,
        name: "Correo",
        description: "Por favor, envíame tu correo y te responderé lo antes posible.",
        link: "mailto:janpaultewinkeljimenez@gmail.com",
        buttonText: "Redactar mensaje",
        icon: <BiEnvelope className="size-10 text-gray-800 mx-auto dark:text-neutral-200" />
    },
    {
        id: 3,
        name: "Telegram",
        description: "No dudes en contactarme por Telegram para cualquier consulta. ",
        link: "https://t.me/+584125308748",
        buttonText: "Contáctame por Telegram",
        icon: <BiLogoTelegram className="size-10 text-gray-800 mx-auto dark:text-neutral-200" />
    }
];

const Datos = () => {
    return (
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-8 mx-4">
            {contactOptions.map(({ id, name, description, link, buttonText, icon }) => (
                <a
                    key={id}
                    className="group border flex flex-col h-full text-center rounded-lg hover:bg-gray-200 hover:border-transparent focus:outline-none focus:bg-gray-100 p-4 sm:p-6 dark:hover:bg-neutral-500/10 dark:focus:bg-neutral-500/10 mx-auto"
                    href={link}
                    target={name === "Correo" ? "_self" : "_blank"}
                >
                    {icon}
                    <div className="mt-5">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">{name}</h3>
                        <p className="mt-1 text-lg text-gray-500 dark:text-neutral-500">{description}</p>
                        <p className="mt-5 text-lg inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-indigo-800">
                            {buttonText}
                            <BiSolidChevronRight className="shrink-0 size-5 transition ease-in-out group-hover:translate-x-1" />
                        </p>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Datos;
