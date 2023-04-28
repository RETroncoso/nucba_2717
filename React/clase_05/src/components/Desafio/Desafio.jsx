import React, { useEffect, useRef, useState } from 'react'
import { ClickButton } from '../EjemploSetState/EjemploSetState'

const Desafio = () => {

    const [counter, setCounter] = useState(0)

    let id = useRef();

    useEffect(() => {
      id.current = setInterval(() => {
                setCounter((prev) => prev + 1)
            }, 2000) 
        console.log(id);
    }, [])

    const stopIncrement = () => {
        console.log(id);
        clearInterval(id.current)
    }

  return (
    <>
        <span>{counter}</span>
        <ClickButton estadito={counter} onClick={stopIncrement} >Stop</ClickButton>
    </>
  )
}

export default Desafio