/* eslint-disable @next/next/no-img-element */
export default function PresentacionFrank() {
    return (
        <div className="cursor-pointer">
            <div className="flex flex-col items-center md:flex-row md:items-stretch gap-4 m-4 p-6 bg-background rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 dark:shadow-gray-900 border">
                <img
                    src="/perfil_images/foto_perfil.jpg"
                    alt="Foto de perfil de Franklin te Winkel"
                    className="aspect-square w-40 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
                />

                <div className="text-center md:text-left flex flex-col justify-center">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 hover:text-red-800 dark:hover:text-red-400 transition-colors duration-300">
                        Franklin te Winkel
                    </h2>

                    <p className="mt-0.5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">
                        Diseñador Gráfico.
                    </p>
                    <p className="mt-0.5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">
                        Ilustración y Comunicación Visual.
                    </p>
                </div>
            </div>

            {/* Sección de habilidades */}
            <div className="flex justify-center items-center">
                <article className="group hover:animate-background rounded-xl bg-gradient-to-r from-yellow-400 via-pink-500 to-red-600 p-0.5 shadow-xl transition-all duration-500 hover:bg-[length:400%_400%] hover:shadow-2xl dark:shadow-gray-900">

                    <div className="rounded-[10px] bg-background  p-4 sm:p-6 transition-transform duration-500 group-hover:scale-105">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                            Habilidades
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {[
                                "Adobe", "Edición", "Publicidad", "Identidad Visual", "Composición", "Fotomontaje", "Redes Sociales",
                            ].map((skill, index) => (
                                <span
                                    key={index}
                                    className="rounded-full bg-orange-100 dark:bg-red-950 px-3 py-1 text-xs font-medium text-gray-900 dark:text-gray-100 transition-all duration-300 hover:bg-orange-200 dark:hover:bg-red-700 hover:text-gray-950 dark:hover:text-gray-50 hover:scale-110"
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