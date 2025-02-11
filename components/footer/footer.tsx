import { BiLogoGithub, BiLogoTwitter, BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
    return (
        <footer className="mt-6 w-full max-w-[85rem]  pb-6 px-4 sm:px-6 lg:px-8 mx-auto relative overflow-hidden">
            <hr className="border-t border-gray-300 w-full mb-4" />
            {/* Grid */}

            <div aria-hidden="true" className="flex absolute bottom-0 start-1/2 transform -translate-x-1/2 rotate-180">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 blur-3xl w-[15rem] h-[20rem] rotate-[60deg] -translate-x-[5rem] dark:from-violet-900/50 dark:to-purple-800"></div>

                <div className="bg-gradient-to-tl from-blue-200 via-blue-50 to-blue-200 blur-3xl w-[40rem] h-[20rem] rounded-full origin-top-left rotate-12 -translate-x-[15rem] dark:from-red-900/70 dark:via-indigo-900/70 dark:to-red-900/70"></div>
            </div>


            <div className="text-center mt-8 relative z-10">
                <p className="mt-4">
                    Transformamos ideas en soluciones digitales.
                </p>
                {/* End Col */}

                <div className="mt-3">
                    <p className="text-gray-500 dark:text-neutral-500">
                        <a
                            className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-indigo-800"
                            href="#team"
                        >
                            Team
                        </a>{' '}
                        <a href="#" className="text-gray-800 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-gray-200">Codeva.</a>
                    </p>
                    <p className="text-gray-500 dark:text-neutral-500 mt-2">
                        <span className="font-bold">
                            © 2025 Codeva.</span>
                        Todos los derechos reservados.</p>
                </div>

                {/* Social Brands */}
                <div className="mt-3 space-x-2">
                    <a
                        className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        href="https://github.com/JanteWinkel"
                    >
                        <BiLogoGithub className="size-6 text-gray-800 mx-auto dark:text-neutral-200" />
                    </a>
                    <a
                        className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        href="#"
                    >
                        <BiLogoTwitter className="size-6 text-gray-800 mx-auto dark:text-neutral-200" />
                    </a>
                    <a
                        className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        href="#"
                    >
                        <BiLogoInstagramAlt className="size-6 text-gray-800 mx-auto dark:text-neutral-200" />
                    </a>
                </div>
                {/* End Social Brands */}
            </div>
            {/* End Grid */}
        </footer>
    );
}

export default Footer;