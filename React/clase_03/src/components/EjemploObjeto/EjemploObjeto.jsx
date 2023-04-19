import React from 'react'

const EjemploObjeto = () => {

    const estilo = {
        fontSize: '1.5rem',
        color: "crimson",
        border: "1px dashed #4747ff",
        padding: "20px",
        borderRadius: "8px"
    }

  return (
    <h3 style={estilo} >
        Soy un ejemplo de estilos con un objeto
    </h3>
  )
}

export default EjemploObjeto