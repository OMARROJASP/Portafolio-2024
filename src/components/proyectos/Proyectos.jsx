export const Proyectos =()=> {
    return(
        <>
            <div className={" bg-gray-300"} id={"proyectos"}>
                <div className={" md:p-16  p-4"}>
                    <div className={"bg-amber-400 grid grid-rows-2 sm:grid-cols-2 gap-2 sm:h-96"}>

                        <div className={"sm:h-96"}>
                            <p className={"font-bold text-2xl text-gray-300 m-4"}>PokeApi</p>
                            <p className={"text-justify text-white mx-4"}>En este proyecto mostramos una lista de pokemones que podemos elegir
                                para seleccionarlos como favoritos y de la misma manera eliminarlo de
                                la seccion de favoritos , este informacion se extrajo de atravez de una API.
                                Tecnologias: Vue, bootstrap, FireBase, JavaScript, html, Api de pokemon

                            </p>
                            <button  className={"m-2 bg-green-600 px-2 text-white rounded-md "}>
                            <a href={"https://practica-pokemon-u201920341.netlify.app/pokemons"} target="_blank" rel="noopener noreferrer" className="button-link"> + Informacion </a>
                            </button>
                        </div>

                        <div className={"flex items-center justify-center p-5  sm:h-96"}>
                            <img src={"./src/components/proyectos/proyecto/pokeapi.png"} className={"p-5"}  />
                        </div>
                    </div>

                    <div className={" bg-red-500 grid grid-rows-2 sm:grid-cols-2 gap-2 sm:h-96 border- border-b-white-500"}>
                        <div className={" sm:h-96"}>
                            <p className={"font-bold text-2xl text-gray-300 m-4"}>Credito Hipotecario</p>
                            <p className={"text-justify text-white mx-4"}>En este proyecto mostramos una lista de ventas de combustibles y un
                                formulario para llenar datos. Estos datos lo guardamos en una base
                                de datos en FireBase. De la misma manera tiene autentificacion a
                                travez de FireBase.
                                Tecnologias: Vue, tailwind, FireBase, JavaScript, html

                            </p>
                            <button>
                                <a className={"m-4 text-white bg-green-600 px-2 text-white rounded-md button-link"} href={"https://github.com/maximo261199/Leasing/tree/develop"}
                                   target="_blank" rel="noopener noreferrer"
                                >GitHub</a>
                            </button>

                            <button className={"m-2 bg-green-600 px-2 text-white rounded-md "}>
                                <a href={"https://miviviendainterbank.netlify.app/"} target="_blank" rel="noopener noreferrer" className="button-link"> + Informacion </a>
                            </button>
                        </div>

                        <div className={"flex items-center justify-center p-5  sm:h-96"}>
                            <img src={"./src/components/proyectos/proyecto/mivivienda.png"} className={"p-5"}  />
                        </div>
                    </div>
                    <div className={"bg-amber-400 grid grid-rows-2 sm:grid-cols-2 gap-2 sm:h-96"}>
                        <div className={"sm:h-96 "}>
                            <p className={"font-bold text-2xl text-gray-300 m-4"}>Lubricantes Rukanas</p>
                            <p className={"text-justify text-white mx-4"}>En este proyecto se realizo una pagina web, donde se puede ver diferentes de tipos de lubricantes que se puede divide en categorias y se puede filtrar porductos por precio y marca. Con el fin de dar a conocer los
                            productos que tiene en venta. Se implemento CRUD en spring Boot.
                                Tecnologias: React, tailwind, css, JavaScript, html, Java, SpringBoot, Mysql
                            </p>
                            <button className={"m-2 bg-green-600 px-2 text-white rounded-md "}>
                                <a href={"https://github.com/OMARROJASP/lubricante_java"} target="_blank" rel="noopener noreferrer" className="button-link"> GitHub-Back</a>
                               </button>
                            <button className={"m-2 bg-green-600 px-2 text-white rounded-md "}>
                                <a href={"https://github.com/OMARROJASP/lubricantes_react"} target="_blank" rel="noopener noreferrer" className="button-link"> GitHub-Front</a>
                            </button>
                        </div>

                        <div className={"flex items-center justify-center p-5  sm:h-96"}>
                            <img src={"./src/components/proyectos/proyecto/tienda.png"} className={"p-5"}  />
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}