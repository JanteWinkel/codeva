import PresentacionFrank from "./presentacion_frank";
import PresentacionJan from "./presentacion_jan";

export default function Perfil() {
    return (
        <div id="team" className="mt-4"> 
            <div className=" gap-4 m-4">
                <h1 className="text-2xl font-semibold text-gray-900 capitalize lg:text-3xl dark:text-white">Equipo</h1>

                <p className=" mt-2 text-gray-700 dark:text-gray-300 text-justify">
                Somos un equipo de diseño y desarrollo web, combinando creatividad y tecnología para crear soluciones visuales y digitales efectivas.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch gap-4 m-4 justify-center">
                <div className="flex-1">
                    <PresentacionJan />
                </div>
                <div className="flex-1">
                    <PresentacionFrank />
                </div>
            </div>
        </div>
    );
};