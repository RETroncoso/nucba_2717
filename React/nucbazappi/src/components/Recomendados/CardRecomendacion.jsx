import React from 'react';
import { formatPrice } from '../../utils/index';

import Button from '../UI/Button/Button';

import {
  Card,
  CardImg,
  CardPrice,
  CardText,
  CardTitle,
  InfoCard,
} from './CardsRecomendacionStyled';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';

const CardRecomendacion = ({title, img, price, desc, id}) => {

  const dispatch = useDispatch();

  return (
    <Card>
      <CardImg
        src={img}
        alt={title}
      />
      <CardText>
        <CardTitle>{title}</CardTitle>
        <InfoCard>{desc}</InfoCard>
        <CardPrice>{formatPrice(price)}</CardPrice>
      </CardText>
      <Button onClick={() => dispatch(addToCart({title, img, price, desc, id}))}>Agregar</Button>
    </Card>
  );
};

export default CardRecomendacion;
