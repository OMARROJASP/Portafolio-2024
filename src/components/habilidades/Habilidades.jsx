export const Habilidades =()=> {
    return(

        <div className={""} id={"habilidades"}>
            <div className={"flex items-center justify-center"}> <p>Habilidades</p></div>
            <div className={"flex items-center justify-center"}>
                <div className={"grid grid-cols-2 sm:grid-cols-3 gap-3 m-5 sm:m-20"}>
                    <div className={"border-2 flex justify-center items-center"}>
                        <img src={"./src/components/habilidades/imgenes/html.png"}  className={"p-5 sm:w-2/4 h-auto " }  />
                    </div>
                    <div className={"border-2 flex justify-center items-center"}>
                        <img src={"./src/components/habilidades/imgenes/css.png"} className={"p-5 sm:w-2/4 h-auto "}  />
                    </div>
                    <div className={"border-2 flex justify-center items-center"}>
                        <img src={"./src/components/habilidades/imgenes/javaScript.png"} className={"p-5 sm:w-2/4 h-auto"}  />
                    </div>
                    <div className={"border-2 flex justify-center items-center"}>
                        <img src={"./src/components/habilidades/imgenes/react.png"} className={"p-5 sm:w-2/4 h-auto"}  />
                    </div>
                    <div className={"border-2 flex justify-center items-center"}>
                        <img src={"./src/components/habilidades/imgenes/vue.png"} className={"p-5 sm:w-2/4 h-auto"}  />
                    </div>
                    <div className={"border-2 flex justify-center items-center"}>
                        <img src={"./src/components/habilidades/imgenes/java.png"} className={"p-5 sm:w-2/4 h-auto"}  />
                    </div>
                    <div className={"border-2 flex justify-center items-center"}>
                        <img src={"./src/components/habilidades/imgenes/c.png"} className={"p-5 sm:w-2/4 h-auto"}  />
                    </div>
                    <div className={"border-2 flex justify-center items-center"}>
                        <img src={"./src/components/habilidades/imgenes/mySql.png"} className={"p-5 sm:w-2/4 h-auto"}  />
                    </div>
                    <div className={"border-2 flex justify-center items-center"}>
                        <img src={"./src/components/habilidades/imgenes/bootstrap.png"} className={"p-5 sm:w-2/4 h-auto"}  />
                    </div>
                    <div className={"border-2 flex justify-center items-center"}>
                        <img src={"./src/components/habilidades/imgenes/tailwind.png"} className={"p-5 sm:w-2/4 h-auto"}  />
                    </div>
                    <div className={"border-2 flex justify-center items-center"}>
                        <img src={"./src/components/habilidades/imgenes/spring.png"} className={"p-5 sm:w-2/4 h-auto"}  />
                    </div>
                    <div className={"border-2 flex justify-center items-center"}>
                        <img src={"./src/components/habilidades/imgenes/flutter.png"} className={"p-5  sm:w-2/4 h-auto"}  />
                    </div>

                </div>
            </div>

        </div>
    )
}