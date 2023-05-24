import React from 'react';

import { FaShoppingCart } from 'react-icons/fa';

import { LinkContainerStyled } from './../NavbarStyles';

const CartIcon = ({ hiddenCart, setHiddenCart }) => {
  return (
    <LinkContainerStyled onClick={() => setHiddenCart(!hiddenCart)}>
      <FaShoppingCart />
      <span>{3}</span>
    </LinkContainerStyled>
  );
};

export default CartIcon;
