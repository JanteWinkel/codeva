/* eslint-disable @next/next/no-img-element */
export default function PresentacionJan() {
    return (
        <div className="cursor-pointer">
            <div className="flex flex-col items-center md:flex-row md:items-stretch gap-4 m-4 p-6 bg-background rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 dark:shadow-gray-900 border">
                <img
                    src="/perfil_images/foto_perfil.jpg"
                    alt="Foto de perfil de Jan te Winkel"
                    className="aspect-square w-40 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
                />

                <div className="text-center md:text-left flex flex-col justify-center">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 hover:text-indigo-800 dark:hover:text-indigo-400  transition-colors duration-300">
                        Jan te Winkel
                    </h2>

                    <p className="mt-0.5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">
                        Ingeniero de Sistemas.
                    </p>
                    <p className="mt-0.5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">
                        Desarrollo Web.
                    </p>

                    <div id="Iconos" className="flex mt-3 -mx-2 justify-center md:justify-start">
                        <a href="https://wa.me/+584125308748" className="mx-2 text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-100 group-hover:text-white" aria-label="Whatsapp">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.463,3.488C18.217,1.24,15.231,0.001,12.05,0    C5.495,0,0.16,5.334,0.157,11.892c-0.001,2.096,0.547,4.142,1.588,5.946L0.057,24l6.304-1.654    c1.737,0.948,3.693,1.447,5.683,1.448h0.005c6.554,0,11.89-5.335,11.893-11.893C23.944,8.724,22.708,5.735,20.463,3.488z     M12.05,21.785h-0.004c-1.774,0-3.513-0.477-5.031-1.378l-0.361-0.214l-3.741,0.981l0.999-3.648l-0.235-0.374    c-0.99-1.574-1.512-3.393-1.511-5.26c0.002-5.45,4.437-9.884,9.889-9.884c2.64,0,5.122,1.03,6.988,2.898    c1.866,1.869,2.893,4.352,2.892,6.993C21.932,17.351,17.498,21.785,12.05,21.785z M17.472,14.382    c-0.297-0.149-1.758-0.868-2.031-0.967c-0.272-0.099-0.47-0.149-0.669,0.148s-0.767,0.967-0.941,1.166    c-0.173,0.198-0.347,0.223-0.644,0.074c-0.297-0.149-1.255-0.462-2.39-1.475c-0.883-0.788-1.48-1.761-1.653-2.059    s-0.018-0.458,0.13-0.606c0.134-0.133,0.297-0.347,0.446-0.521C9.87,9.97,9.919,9.846,10.019,9.647    c0.099-0.198,0.05-0.372-0.025-0.521C9.919,8.978,9.325,7.515,9.078,6.92c-0.241-0.58-0.486-0.501-0.669-0.51    C8.236,6.401,8.038,6.4,7.839,6.4c-0.198,0-0.52,0.074-0.792,0.372c-0.272,0.298-1.04,1.017-1.04,2.479    c0,1.463,1.065,2.876,1.213,3.074c0.148,0.198,2.095,3.2,5.076,4.487c0.709,0.306,1.263,0.489,1.694,0.626    c0.712,0.226,1.36,0.194,1.872,0.118c0.571-0.085,1.758-0.719,2.006-1.413c0.248-0.694,0.248-1.29,0.173-1.413    C17.967,14.605,17.769,14.531,17.472,14.382z" />
                            </svg>
                        </a>

                        <a href="https://github.com/JanteWinkel" className="mx-2 text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-100 group-hover:text-white" aria-label="Github">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                                </path>
                            </svg>
                        </a>
                        <a href="#" className="mx-2 text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-100 group-hover:text-white" aria-label="Linkedin">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path id="Path_2525" d="M23.002,21.584h0.227l-0.435-0.658l0,0c0.266,0,0.407-0.169,0.409-0.376c0-0.008,0-0.017-0.001-0.025   c0-0.282-0.17-0.417-0.519-0.417h-0.564v1.476h0.212v-0.643h0.261L23.002,21.584z M22.577,20.774h-0.246v-0.499h0.312   c0.161,0,0.345,0.026,0.345,0.237c0,0.242-0.186,0.262-0.412,0.262" /><path id="Path_2520" d="M17.291,19.073h-3.007v-4.709c0-1.123-0.02-2.568-1.564-2.568c-1.566,0-1.806,1.223-1.806,2.487v4.79H7.908   V9.389h2.887v1.323h0.04c0.589-1.006,1.683-1.607,2.848-1.564c3.048,0,3.609,2.005,3.609,4.612L17.291,19.073z M4.515,8.065   c-0.964,0-1.745-0.781-1.745-1.745c0-0.964,0.781-1.745,1.745-1.745c0.964,0,1.745,0.781,1.745,1.745   C6.26,7.284,5.479,8.065,4.515,8.065L4.515,8.065 M6.018,19.073h-3.01V9.389h3.01V19.073z M18.79,1.783H1.497   C0.68,1.774,0.01,2.429,0,3.246V20.61c0.01,0.818,0.68,1.473,1.497,1.464H18.79c0.819,0.01,1.492-0.645,1.503-1.464V3.245   c-0.012-0.819-0.685-1.474-1.503-1.463" /><path id="Path_2526" d="M22.603,19.451c-0.764,0.007-1.378,0.633-1.37,1.397c0.007,0.764,0.633,1.378,1.397,1.37   c0.764-0.007,1.378-0.633,1.37-1.397c-0.007-0.754-0.617-1.363-1.37-1.37H22.603 M22.635,22.059   c-0.67,0.011-1.254-0.522-1.265-1.192c-0.011-0.67,0.523-1.222,1.193-1.233c0.67-0.011,1.222,0.523,1.233,1.193   c0,0.007,0,0.013,0,0.02C23.81,21.502,23.29,22.045,22.635,22.059h-0.031" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
            <div className="flex justify-center items-center">
                <article
                    className="group hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition-all duration-500 hover:bg-[length:400%_400%] hover:shadow-2xl dark:shadow-gray-900"
                >
                    <div className="rounded-[10px] bg-background  p-4 sm:p-6 transition-transform duration-500 group-hover:scale-105">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                            Habilidades
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {[
                                "HTML",
                                "CSS",
                                "JavaScript",
                                "TypeScript",
                                "React",
                                "Next.js",
                                "PostgreSQL",
                                "Git/GitHub",
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