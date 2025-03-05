/* eslint-disable @next/next/no-img-element */
import React from 'react';

// Definimos el tipo de datos para las tarjetas
interface CardData {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
}

// Arreglo con la información de las tarjetas
const cardsData: CardData[] = [
    {
        id: 1,
        title: 'Desarrollo de E-commerce para MuySochi',
        description: 'El proyecto resultó en un e-commerce elegante y funcional, alineado con las expectativas de los usuarios modernos y preparado para crecer con el negocio.',
        imageUrl: '/projects/ecommerce foto.jpg',
        tags: ['Next.js', 'PostgreSQL', 'Strapi'],
    },
    {
        id: 2,
        title: 'Web del Condominio Terrazas de Vista Azul',
        description: 'Este portal web es una herramienta esencial para la gestión del condominio, facilitando la comunicación y mejorando la organización y la calidad de vida de los residentes.',
        imageUrl: '/projects/gestion 1.jpg',
        tags: ['Next.js', 'Formspree', 'OpenWeatherMap'],
    },
];

const CardGrid: React.FC = () => {
    return (
        <div className='max-w-4xl mx-auto mt-8 px-4 pb-6'>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-6 md:gap-8 lg:gap-12">
                {cardsData.map((card) => (
                    <div key={card.id} className="group flex flex-col focus:outline-none mt-2">
                        <a href="#" className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out">
                            <img
                                className="object-cover rounded-2xl w-full h-48"
                                src={card.imageUrl}
                                alt="Imagen del proyecto"
                            />
                        </a>

                        <div className="pt-4">
                            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-blue-600 dark:before:bg-indigo-800 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                                {card.title}
                            </h3>
                            <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                {card.description}
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
                                {card.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardGrid;