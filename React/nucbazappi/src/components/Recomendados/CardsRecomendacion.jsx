import React from 'react';

import CardRecomendacion from './CardRecomendacion';

import { CardsContainer } from './CardsRecomendacionStyled';
import { useSelector } from 'react-redux';

const CardsRecomendacion = () => {

  const recommended = useSelector(state => state.recommended.recommended)

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
