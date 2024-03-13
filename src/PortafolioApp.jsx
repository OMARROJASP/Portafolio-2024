import {Navbar} from "./components/navbar/Navbar.jsx";
import {Inicio} from "./components/inicio/Inicio.jsx";
import {Proyectos} from "./components/proyectos/Proyectos.jsx";
import {Habilidades} from "./components/habilidades/Habilidades.jsx";
import {Contacto} from "./components/contacto/Contacto.jsx";

export const PortafolioApp=()=> {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <Navbar scrollToSection={scrollToSection} />
            <Inicio />
            <Proyectos />
            <Habilidades  />
            <Contacto  />
        </>
    )
}