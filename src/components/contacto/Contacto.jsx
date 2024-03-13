export const Contacto =()=> {
    return (
        <div className="bg-black text-white p-8" id={"contacto"}>
            <p className="text-3xl font-bold mb-4 text-center">Contacto</p>
            <div className="mb-4 text-center">
                <p className="text-lg">Teléfono: <span className="font-bold">9911175246</span></p>
            </div>
            <div className="mb-4 text-center">
                <p className="text-lg">Correo: <a href="mailto:omarrojasp1999@gmail.com" className="font-bold">omarrojasp1999@gmail.com</a></p>
            </div>
            <div>
                <p className="text-lg text-center">GitHub: <a href="https://github.com/OMARROJASP" className="font-bold">OMARROJASP</a></p>
            </div>
            <p className="text-sm text-right">&copy; MaximoOmar2023. Todos los derechos reservados.</p>

        </div>
    );


}