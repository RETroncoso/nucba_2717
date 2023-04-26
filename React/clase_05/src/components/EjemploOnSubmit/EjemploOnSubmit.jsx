import React from 'react'
import { ClickButton } from '../EjemploSetState/EjemploSetState'

const EjemploOnSubmit = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Formulario enviado");
    }

  return (
    <form onSubmit={handleSubmit} >
        <input type="text" />
        <ClickButton type='submit' >Enviar</ClickButton>
    </form>
  )
}

export default EjemploOnSubmit