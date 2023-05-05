import React from 'react'
import { CounterButtonContainerStyled, CounterContainerStyled, CounterSpanStyled } from './CounterStyles';
import Add from '../add/Add';
import Substract from '../substract/Substract';
import Reset from '../reset/Reset';
import { useSelector } from 'react-redux';


const Counter = () => {

    const count = useSelector((state) => state.count);

    return (
        <CounterContainerStyled>
           <CounterButtonContainerStyled>
          
              <Substract />
              <CounterSpanStyled>{count}</CounterSpanStyled>
              <Add/>

           </CounterButtonContainerStyled>
           <Reset />
        </CounterContainerStyled>
    )
}

export default Counter