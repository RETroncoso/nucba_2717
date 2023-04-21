import React from 'react'
import { FooterContainerStyled, LinksContainerStyled } from './FooterStyles'

const Footer = () => {
  return (
    <FooterContainerStyled>
        <LinksContainerStyled>
            <a href="#">
                Términos de Uso
            </a>
            <a href="#">
            Trabajá con Nosotros
            </a>
            <a href="#">
            Soporte
            </a>
        </LinksContainerStyled>
        <p>
            Hecho con ❤️ en <span>NUCBAZAPPI</span>
        </p>
    </FooterContainerStyled>
  )
}

export default Footer