import CardGrid from "./proyectos";

const ProjectsComponent = () => {
    return (
        <div id="team" className="mt-12">
            <div className=" gap-4 m-4 text-center">
                <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">Proyectos</h1>

                <p className=" mt-2 text-lg text-center text-gray-600 dark:text-neutral-400">
                En nuestro portafolio encontrarás una amplia gama de proyectos de diseño y desarrollo web. Nos enfocamos en desarrollar soluciones digitales que no solo cumplen con los objetivos de nuestros clientes, sino que también ofrecen una excelente experiencia de usuario.
                </p>
            </div>
            <div className=" sm:flex-row items-stretch gap-4 m-4 justify-center">
                <div className="flex-1 max-w-5xl mx-auto">
                    <CardGrid />
                </div>
            </div>
        </div>
    );
}

export default ProjectsComponent;