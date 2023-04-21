import React from 'react'
import { StyledButton } from './ButtonStyles'

const Button = ({radius="32", disabled = false, children}) => {
  return (
    <StyledButton
        disabled={disabled}
        radius= {radius}
    >
        {children}
    </StyledButton>
  )
}

export default Button