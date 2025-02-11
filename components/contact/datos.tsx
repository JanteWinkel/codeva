import React from 'react';
import { BiLogoTelegram, BiEnvelope, BiLogoWhatsapp, BiSolidChevronRight } from "react-icons/bi";

const Datos = () => {
    return (
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3  items-center gap-4 lg:gap-8 mx-4">
            {/* Icon Block 1 */}
            <a
                className="group border flex flex-col h-full text-center rounded-lg hover:bg-gray-300 focus:outline-none focus:bg-gray-100 p-4 sm:p-6 dark:hover:bg-neutral-500/10 dark:focus:bg-neutral-500/10 mx-auto"
                href="https://wa.me/+584125308748"
            >
                <BiLogoWhatsapp className="size-10 text-gray-800 mx-auto dark:text-neutral-200" />
                <div className="mt-5">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                        Whatsapp
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-neutral-500">
                        Si necesitas ayuda o más información, ¡no dudes en escribirnos!
                    </p>
                    <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-indigo-800">
                        Escríbenos por Whatsapp
                        <BiSolidChevronRight className="shrink-0 size-5 transition ease-in-out group-hover:translate-x-1" />

                    </p>
                </div>
            </a>

            {/* Icon Block 2 */}
            <a
                className="group border flex flex-col h-full text-center rounded-lg hover:bg-gray-300 focus:outline-none focus:bg-gray-100 p-4 sm:p-6 dark:hover:bg-neutral-500/10 dark:focus:bg-neutral-500/10"
                href="mailto:janpaultewinkeljimenez@gmail.com"
            >
                <BiEnvelope
                    className="size-10 text-gray-800 mx-auto dark:text-neutral-200" />
                <div className="mt-5">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                        Correo
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-neutral-500">
                        Estamos aquí para ayudarte. Mándanos tu correo y te responderemos en breve.
                    </p>
                    <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-indigo-800">
                        Redactar mensaje
                        <BiSolidChevronRight className="shrink-0 size-5 transition ease-in-out group-hover:translate-x-1" />
                    </p>
                </div>
            </a>

            {/* Icon Block 3 */}
            <a
                className="group border flex flex-col h-full text-center rounded-lg hover:bg-gray-300 focus:outline-none focus:bg-gray-100 p-4 sm:p-6 dark:hover:bg-neutral-500/10 dark:focus:bg-neutral-500/10"
                href="https://t.me/+584125308748" target="_blank"
            >
                <BiLogoTelegram
                    className="size-10 text-gray-800 mx-auto dark:text-neutral-200" />

                <div className="mt-5">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                        Telegram
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-neutral-500">
                        Haz tus consultas por Telegram. ¡Estamos para ayudarte!
                    </p>
                    <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-indigo-800">
                        Escríbenos por Telegram
                        <BiSolidChevronRight className="shrink-0 size-5 transition ease-in-out group-hover:translate-x-1" />
                    </p>
                </div>
            </a>
        </div>
    );
};

export default Datos;
