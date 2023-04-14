import React from 'react'

const EjemploCondicional = () => {

    // const usuario = {
    //     nombre: "Rodrigo",
    //     rol: "user",
    //     id: 3,
    // }

    const usuario = {}

  return (
    <>
    <h3>Perfil de usuario</h3>

    {
        usuario.id ? (
            <>
                <p>Nombre: {usuario.nombre}</p>
                <p>Rol: {usuario.rol}</p>
            </>
        ) : (
            <p>Inicie sesión para ver su perfil</p>
        )
    }

    
    </>
    
  )
}

export default EjemploCondicional