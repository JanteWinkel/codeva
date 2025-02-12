import React from 'react';
import { BiCheck } from "react-icons/bi";

const servicios = [
    {
        nombre: "Emprendedor",
        precio: 80,
        descripcion: "Ideal para emprendedores que inician su camino, con lo básico para crecer.",
        características: [
            "Creación de logo",
            "20 imágenes para redes sociales",
            "Banner de portada",
            "Gestión básica de redes"
        ]
    },
    {
        nombre: "Premium",
        precio: 120,
        descripcion: "Paquete avanzado con más opciones para fortalecer tu marca.",
        características: [
            "Creación de logo",
            "30 imágenes para redes sociales",
            "Banner + diseño de tarjeta",
            "Gestión avanzada de redes"
        ]
    },
    {
        nombre: "Web Básico",
        precio: 150,
        descripcion: "Para aquellos que necesitan presencia web con información básica.",
        características: [
            "Creación de logo",
            "10 imágenes para redes sociales",
            "Diseño de landing page",
            "Página optimizada para móviles"
        ]
    },
    {
        nombre: "Full Branding + Web",
        precio: 250,
        descripcion: "La solución completa con branding y una página web totalmente funcional.",
        características: [
            "Creación de logo",
            "40 imágenes para redes sociales",
            "Diseño web Personalizada",
            "Dominio y hosting"
        ]
    }
];

const Servicios = () => {
    return (
        <div className="px-4 mt-16 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="mx-auto text-center mb-10 lg:mb-8">
                <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">Planes de Servicio</h2>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">Planes flexibles diseñados para ajustarse a las necesidades de tu negocio.</p>

                {/* Grid */}
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
                    {servicios.map((servicio, index) => (
                        <div key={index} className="flex flex-col border shadow-lg dark:shadow-gray-900 border-gray-200 text-center hover:border-blue-500 rounded-xl p-8 dark:border-neutral-800 group h-full hover:bg-gray-100 dark:hover:border-indigo-800 focus:outline-none focus:bg-gray-100 sm:p-6 dark:hover:bg-neutral-700/10 dark:focus:bg-neutral-500/10">
                            <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">{servicio.nombre}</h4>
                            <span className="mt-4 font-bold text-5xl text-gray-800 dark:text-neutral-200">
                                <span className="font-bold text-3xl ">$</span>
                                {servicio.precio}
                            </span>
                            <p className="mt-4 text-sm text-gray-500 dark:text-neutral-500">{servicio.descripcion}</p>

                            <ul className="mt-7 space-y-2.5 text-sm">
                                {servicio.características.map((característica, idx) => (
                                    <li key={idx} className="flex gap-x-2">
                                        <BiCheck className="shrink-0 mt-0.5 size-6 text-blue-600 dark:text-indigo-800" />
                                        <span className="text-gray-800 dark:text-neutral-400">
                                            {característica}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <a className="mt-5 py-3 mx-16 inline-flex justify-center items-center gap-x-2 text-sm font-medium  border border-gray-200  shadow-sm disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:border-neutral-700 dark:text-neutral-300  dark:focus:bg-neutral-800  bg-blue-600 dark:bg-indigo-600 text-white rounded-md hover:bg-blue-700 dark:hover:bg-indigo-800 transition-all duration-300" href="https://wa.me/+584125308748">
                            Contacto
                        </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Servicios;
