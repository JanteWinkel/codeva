import Datos from "./datos";
import ContactForm from "./formulario";

const Contact = () => {
    return (
        <div id="contacto">
            <div className="max-w-xl mx-auto mt-8 px-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                        Contáctanos
                    </h1>
                    <p className=" mt-2 text-lg text-center text-gray-600 dark:text-neutral-400">
                    Si tienes alguna pregunta o necesitas un presupuesto personalizado, no dudes en enviarnos un mensaje. Envíanos tu correo y detalles de tu solicitud, y te ofreceremos una solución a la medida de tus proyectos.
                    </p>
                </div>
            </div>
            <ContactForm />
            <Datos />
        </div>
    );
}

export default Contact;