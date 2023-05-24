import React from 'react';

import { recommended } from '../../data/Recommended';

import CardRecomendacion from './CardRecomendacion';

import { CardsContainer } from './CardsRecomendacionStyled';

const CardsRecomendacion = () => {
  return (
    <CardsContainer gridLength={recommended.length}>
      {
        recommended.map((recomendado) => {
          return <CardRecomendacion {...recomendado} key={recomendado.id} />
        })
      }
    </CardsContainer>
  );
};

export default CardsRecomendacion;
