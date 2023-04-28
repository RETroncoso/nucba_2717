import React, { useContext, useReducer } from 'react'
import styled from 'styled-components';
import { Contexto } from '../../context/MiContexto';

export const ReducerButton = styled.button`
  padding: 1.5rem 4rem;
  background: var(--primary);
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const EjemploUseReducer = () => {

    const {color} = useContext(Contexto)

    const initialState = color

    const reducer = (state, action) => {
        switch (action.type) {
            case 'rojo':
                return '#e63946';
            case 'verde':
                return '#2a9d8f';
            case 'azul':
                return '#0081a7';
            default:
                return;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <h2 style={{color: state}} > Soy un titulo </h2>
        <ReducerButton
            onClick={() => dispatch({ type: 'rojo' })}
        >
            Rojo
        </ReducerButton>
        <ReducerButton
            onClick={() => dispatch({type: 'verde'})}
        >
            Verde
        </ReducerButton>
        <ReducerButton
            onClick={() => dispatch({type: 'azul'})}
        >
            Azul
        </ReducerButton>
    </div>
  )
}

export default EjemploUseReducer