import React from 'react'
import { CounterButtonStyled } from './AddStyles'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegTimesCircle } from "react-icons/fa";
import { RiNumber5 } from "react-icons/ri";
import { increment, increment_5, multiply } from '../../redux/counter/counterSlice';
import { useDispatch } from 'react-redux';

const Add = () => {

    const dispatch = useDispatch();

  return (
    <>
        <CounterButtonStyled onClick={() => dispatch(increment())} >
            <AiOutlinePlusCircle size="32px" color='white'/>
        </CounterButtonStyled>
        <CounterButtonStyled onClick={() => dispatch(increment_5())}>
            <p>
                +<RiNumber5 size="32px" color='white' />
            </p>
        </CounterButtonStyled>
        <CounterButtonStyled right onClick={() => dispatch(multiply())}>
            <FaRegTimesCircle size="32px" color='white'/>
        </CounterButtonStyled>
    </>
        
  )
}

export default Add