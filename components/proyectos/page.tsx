import CardGrid from "./proyectos";

const ProjectsComponent = () => {
    return (
        <div id="proyectos" className="mt-24 ">
            <div className=" gap-4 m-4 max-w-2xl text-center mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white ">Proyectos</h1>

                <p className=" mt-2 text-lg text-center text-gray-600 dark:text-neutral-400  ">
                Este portfolio presenta una selección de proyectos que destacan soluciones digitales efectivas. Cada trabajo refleja un enfoque en la calidad y la funcionalidad, adaptado a diversas necesidades y objetivos.
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