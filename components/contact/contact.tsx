import Datos from "./datos";
import ContactForm from "./formulario";

const Contact = () => {
    return (
        <div id="contacto" className="px-4 mt-8 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="mx-auto text-center mb-10 lg:mb-8">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                        Contáctame
                    </h1>
                    <p className=" mt-2 text-lg text-center text-gray-600 dark:text-neutral-400">
                    Si tienes alguna pregunta o necesitas un presupuesto personalizado, no dudes en enviarme un mensaje. Manda tu correo y detalles de tu solicitud, y te ofreceremos una solución a la medida de tus proyectos.
                    </p>
                </div>
            </div>
            <ContactForm />
            <Datos />
        </div>
    );
}

export default Contact;