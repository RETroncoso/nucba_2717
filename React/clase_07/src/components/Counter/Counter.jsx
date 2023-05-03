import React, { useContext, useReducer } from 'react'
import { CounterButtonContainerStyled, CounterButtonStyled, CounterContainerStyled, CounterSpanStyled } from './CounterStyles';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { FiDivideCircle } from "react-icons/fi";
import { FaRegTimesCircle } from "react-icons/fa";
import { RiNumber5 } from "react-icons/ri";
import { BiReset } from "react-icons/bi";
import { counterInitialState, counterReducer } from '../../reducers/countReducer';
import { TYPES } from '../../actionTypes/countActions';
import Add from '../add/Add';
import Substract from '../substract/Substract';
import Reset from '../reset/Reset';
import { CountContext } from '../../context/CountContext';

const Counter = () => {

   const {state} = useContext(CountContext)
    return (
        <CounterContainerStyled>
           <CounterButtonContainerStyled>
          
              <Substract />
              <CounterSpanStyled>{state.count}</CounterSpanStyled>
              <Add/>

           </CounterButtonContainerStyled>
           <Reset />
        </CounterContainerStyled>
    )
}

export default Counter