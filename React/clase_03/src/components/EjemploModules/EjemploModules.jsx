import React from 'react'
import estilos from "./EjemploModules.module.css"

const EjemploModules = () => {
  return (
    <div className={estilos.contenedorModule} >
        <p className={estilos.parrafoModule} >
            Ejemplo con module
        </p>
    </div>
  )
}

export default EjemploModules