import { BiSolidChevronDown } from "react-icons/bi";

const HeroBanner = () => {
    return (
        <div className="mt-20">
            <div className="relative overflow-hidden">
                {/* Gradients */}
                <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-100/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-800"></div>

                    <div className="bg-gradient-to-tl from-blue-200 via-blue-50 to-purple-200 blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] dark:from-red-900/70 dark:via-indigo-900/70 dark:to-red-900/70"></div>
                </div>
                {/* End Gradients */}

                <div className="relative z-10">
                    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                        <div className="max-w-2xl text-center mx-auto">
                            <p className="inline-block font-medium bg-clip-text bg-gradient-to-l from-indigo-600 to-blue-500 text-transparent dark:from-indigo-400 dark:to-blue-400">
                                Jan te Winkel
                            </p>

                            {/* Title */}
                            <div className="mt-5 max-w-2xl mx-auto px-4"> 
                                <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200 transition-all duration-500">
                                    Bienvenido a mi Portfolio
                                </h1>
                            </div>
                            {/* End Title */}

                            <div className="mt-5 max-w-3xl">
                                <p className="mt-2 text-lg text-center text-gray-600 dark:text-neutral-400">
                                Aquí encontrarás una selección de mis proyectos y trabajos más destacados, donde aplico soluciones técnicas innovadoras y eficientes. Explora y descubre cómo puedo contribuir a tus necesidades digitales.
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="mt-8 gap-3 flex justify-center">
                                <a
                                    className="py-3 px-4 inline-flex items-center gap-x-2 text-s font-medium rounded-lg border border-transparent bg-blue-600 dark:bg-indigo-600 text-white hover:bg-blue-700 dark:hover:bg-indigo-800 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                    href="#team"
                                >
                                    Conóceme más
                                    <BiSolidChevronDown className="shrink-0 size-5 transition ease-in-out group-hover:translate-x-1" />
                                </a>
                            </div>
                            {/* End Buttons */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;