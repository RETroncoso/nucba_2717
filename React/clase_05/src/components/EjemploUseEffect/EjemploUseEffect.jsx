import React, { useEffect, useState } from 'react'
import { ClickButton } from '../EjemploSetState/EjemploSetState'

const EjemploUseEffect = () => {
    const [click, setClick] = useState(false)

    useEffect(() => {
        console.log("Componente montado");
    }, [])

    useEffect(() => {
        setClick(!click)
        // console.log("Cambio el estado");
    }, [])

  return (
    <div>
        <span>
            {
                click ? "True" : "False"
            }
        </span>
        <ClickButton onClick={() => setClick(!click)} > Click</ClickButton>
    </div>
  )
}

export default EjemploUseEffect