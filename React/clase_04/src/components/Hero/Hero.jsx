import React from 'react'
import { HeroContainerStyled, HeroImageContainerStyled, HeroTextContainerStyled } from './HeroStyles'
import Button from '../UI/Button/Button'

const Hero = () => {
  return (
    <HeroContainerStyled>
        <HeroTextContainerStyled>
            <h1>Si tenes Zappi,</h1>
            <h2>tenes Nucba.</h2>
            <p>Buscá lo que quieras y Nucba te quedes sin comida</p>
            <Button
                radius='15'
            >
                VER MAS
            </Button>
        </HeroTextContainerStyled>
        <HeroImageContainerStyled>
            <img src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797662/coding/NucbaZappi/Assets/pizza-hero_enjaeg_oprhww.png" alt="Imagen del hero" />
        </HeroImageContainerStyled>
    </HeroContainerStyled>
  )
}

export default Hero