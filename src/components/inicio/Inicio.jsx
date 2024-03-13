export const Inicio =()=> {
    return (
        <div id={"inicio"} className={"min-h-screen bg-cover grid sm:grid-cols-2 grid-rows-1"}
             style={{backgroundImage: 'url(./src/components/inicio/fondo.jpg)', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <div className={"flex items-center justify-center"}>
                <div className={""}>
                    <div className={"flex items-center justify-center sm:m-4 sm:p-4 m-2 p-2 "}>
                        <span className={"font-bold text-7xl"}>Hola, <br/>  <p className={" text-amber-600"}>Soy Maximo</p> </span>

                    </div>
                    <div className={""}>
                        <p className={"text-2xl font-bold"}>Soy un ingeniero de software.</p>
                        <p className={"text-2xl text-red-700 font-medium"}>Realizo proyectos en fullstack</p>
                    </div>

                </div>
            </div>

            <div className={"flex items-center justify-center p-5"}>
                <div className={""} >
                    <div  className={"flex items-center justify-center"}>
                        <img src={"./src/components/inicio/desarrollador.jpg"} className={"sm:w-auto w-1/2"} />
                    </div>
                </div>
            </div>
        </div>
    )
}