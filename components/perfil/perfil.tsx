import PresentacionFrank from "./presentacion_frank";
import PresentacionJan from "./presentacion_jan";

const Perfil = () => {
    return (
        <div id="team" className="mt-14"> 
            <div className=" gap-4 m-4 text-center">
                <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">Equipo Codeva</h1>

                <p className=" mt-2 text-lg text-center text-gray-600 dark:text-neutral-400">
                Somos un equipo de diseño y desarrollo web, combinando creatividad y tecnología para crear soluciones visuales y digitales efectivas.
                </p>
            </div>
            <div className=" sm:flex-row items-stretch gap-4 m-4 justify-center">
                <div className="flex-1 max-w-3xl mx-auto">
                    <PresentacionJan />
                </div>
                <div className="flex-1 max-w-3xl mx-auto mt-4">
                    <PresentacionFrank />
                </div>
            </div>
        </div>
    );
};

export default Perfil