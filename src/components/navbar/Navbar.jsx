import "./styleNavbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";


export const Navbar =({scrollToSection })=> {

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu=()=> {
        setShowMenu(!showMenu)
    }

    return (

        <nav className={"bg-black text-white"} >
            <div className={"flex justify-between items-center"}>
                <div className={"text-3xl m-2"}>Maximo Omar</div>
                <div className={"flex items-center"}>
                    <div className={"navbar-toggle p-8"} onClick={toggleMenu}>
                        <FontAwesomeIcon  icon={faBars} />
                    </div>
                    <div className={"pl-4"}>
                        <ul className={"nav-links"}>
                            <li className="hide-on-small-screen m-2"><button onClick={() => scrollToSection('inicio')}>Inicio</button></li>
                            <li className="hide-on-small-screen m-2"><button onClick={() => scrollToSection('proyectos')}>Proyectos</button></li>
                            <li className="hide-on-small-screen m-2"><button onClick={() => scrollToSection('habilidades')}>Habilidades</button></li>
                            <li className="hide-on-small-screen m-2"><button onClick={() => scrollToSection('contacto')}>Contacto</button></li>
                        </ul>
                    </div>
                </div>



            </div>
            {
                showMenu && ( <div >
                        <ul className={"text-center text-white"}>
                            <li className="hide-on-small-screen m-2"><button onClick={() => scrollToSection('inicio')}>Inicio</button></li>
                            <li className="hide-on-small-screen m-2"><button onClick={() => scrollToSection('proyectos')}>Proyectos</button></li>
                            <li className="hide-on-small-screen m-2"><button onClick={() => scrollToSection('habilidades')}>Habilidades</button></li>
                            <li className="hide-on-small-screen m-2"><button onClick={() => scrollToSection('contacto')}>Contacto</button></li>
                        </ul>
                    </div>
                )
            }


        </nav>
    );
}