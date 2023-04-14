import React from "react"

export const EjemploSinJSX = () => {
    return React.createElement(
        "button",
        {id: "botonitoSinJSX"},
        "Clickeame"
    )
}

export const EjemploConJSX = () => {
    return (
        <button id="botonitoConJSX" > Clickeame </button>
    )
}