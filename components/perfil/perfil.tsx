import PresentacionJan from "./presentacion_jan";

const Perfil = () => {
    return (
        <div id="team" className="mt-14"> 
            <div className="gap-4 m-4 text-center max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">Sobre Mí</h1>

                <p className="mt-2 text-lg text-center text-gray-600 dark:text-neutral-400 px-4">
                    Soy un desarrollador web apasionado por la tecnología y la creación de aplicaciones modernas y eficientes. Aquí podrás conocer más sobre mi experiencia, habilidades y proyectos.
                </p>
            </div>
            <div className="sm:flex-row items-stretch gap-4 m-4 justify-center">
                <div className="flex-1 max-w-3xl mx-auto">
                    <PresentacionJan />
                </div>
            </div>
        </div>
    );
};

export default Perfil;