import React from "react";

export class EjemploClases extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            saludo: "Hola! Estoy basado en clases"
        }
    }
    render(){
        return <h1>{this.state.saludo}</h1>
    }
};

export const EjemploFuncional = () => {
    const saludo = "Hola! Estoy basado en funciones"
    return <h1>{saludo}</h1>
};