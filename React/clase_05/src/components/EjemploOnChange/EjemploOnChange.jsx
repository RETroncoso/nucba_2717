import React, { useState } from 'react'
import styled from 'styled-components'

const InputForm = styled.input`
  height: 2rem;
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
  border-bottom: 1px solid #4747ff;
  color: white;
  margin-top: 2rem;
`

const EjemploOnChange = () => {

    const [value, setValue] = useState('');

    const handleValue = (e) => {
        // console.log(e.target.value);
        setValue(e.target.value)
    }

  return (
    <div>
        <p>{value || "El input está vacio"}</p>
        <InputForm onChange={handleValue} placeholder='Escribí algo' />
    </div>
  )
}

export default EjemploOnChange