import React from 'react'
import { PHeredado, StyledButton, StyledContainer, StyledH4, StyledP } from './EjemplosStyledStyles'

const EjemplosStyled = () => {
  return (
    <StyledContainer>
        <StyledH4> Soy un h4 con styled components </StyledH4>
        <StyledP> Soy un P con styled components </StyledP>
        <h3>Soy un H3 común</h3>
        <PHeredado> Soy un P heredado </PHeredado>
        <StyledButton>Soy un botón</StyledButton>
        <StyledButton color width={"200px"} >Soy un boton con props</StyledButton>
    </StyledContainer>
  )
}

export default EjemplosStyled