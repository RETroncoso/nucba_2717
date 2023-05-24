import React from 'react';
import { formatPrice } from '../../../utils';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';

import Count from '../../UI/Count/Count';
import Increase from '../../UI/Increase/Increase';

import {
  ProductContainerStyled,
  TextContainerStyled,
  CardTitleStyled,
  TextStyled,
  PriceStyled,
  QuantityContainerStyled,
} from './ModalCartStyles';

const ModalCartCard = () => {
  return (
    <ProductContainerStyled>
      <img
        src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648456/coding/NucbaZappi/Productos/muzza-mentolada_fmh9at.png'
        alt='La Aco'
      />
      <TextContainerStyled>
        <CardTitleStyled>La Aco</CardTitleStyled>
        <TextStyled>Cheta la gorra</TextStyled>
        <PriceStyled>{formatPrice(3000)}</PriceStyled>
      </TextContainerStyled>
      <QuantityContainerStyled>
        <Increase
          bgColor='var(--btn-gradient-secondary)'
          onClick={e => e.preventDefault()}
        >
          <FaMinus />
        </Increase>
        <Count>3</Count>
        <Increase onClick={e => e.preventDefault()}>
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard;
