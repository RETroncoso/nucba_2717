import React, { useContext, useState } from 'react'
import { Contexto } from '../../context/MiContexto'

const EjemploFusion = () => {

  const [inputValue, setInputValue] = useState("")

  const {state, dispatch} = useContext(Contexto)

  console.log(state);

  const inputValueChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <h2>{state.data}</h2>
      {
        state.error && <p>Hay un error</p>
      }
      {
        state.loading && <p>Estoy cargando</p>
      }
      
      <input onChange={inputValueChange} type="text" />
      <button onClick={() => dispatch({type: "dataRecibida", payload:inputValue})} >Mandar data</button>
      <button onClick={() => dispatch({type: "isError"})} > Trigger error</button>

    </div>
  )
}

export default EjemploFusion