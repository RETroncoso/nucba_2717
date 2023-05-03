import React, { useContext } from 'react'
import { BiReset } from "react-icons/bi";
import { CountContext } from '../../context/CountContext';
import { TYPES } from '../../actionTypes/countActions';

const Reset = () => {

  const {dispatch} = useContext(CountContext)

    const handleReset = () => {
        dispatch({type: TYPES.RESET})
      }

  return (
    <BiReset
            cursor="pointer"
            size="38px"
            color='#F24C4C'
            onClick={handleReset}
           />
  )
}

export default Reset