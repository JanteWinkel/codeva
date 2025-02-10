import { Menu } from "lucide-react";
import { PopoverContent, Popover, PopoverTrigger } from "./ui/popover";


const ItemsMenuMobile = () => {
    // Función para manejar el scroll suave
    const handleSmoothScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <Popover>
            <PopoverTrigger>
                <Menu className="text-primary mr-2" />
            </PopoverTrigger>
            <PopoverContent className="mr-2">
                <button
                    onClick={() => handleSmoothScroll("team")}
                    className="block text-primary m-1 w-full text-left"
                >
                    Equipo
                </button>
                <button
                    onClick={() => handleSmoothScroll("calendario")}
                    className="block text-primary m-1 w-full text-left"
                >
                    Proyecto
                </button>
                <button
                    onClick={() => handleSmoothScroll("eventos")}
                    className="block text-primary m-1 w-full text-left"
                >
                    Servicios
                </button>
                <button
                    onClick={() => handleSmoothScroll("contacto")}
                    className="block text-primary m-1 w-full text-left"
                >
                    Contacto
                </button>
            </PopoverContent>
        </Popover>
    );
};

export default ItemsMenuMobile;