import React from 'react';

import { FaShoppingCart } from 'react-icons/fa';

import { LinkContainerStyled } from './../NavbarStyles';
import { toggleHiddenCart } from '../../../redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const CartIcon = () => {
  const totalCartItems = useSelector(state => state.cart.cartItems).reduce((acc, item) => (acc += item.quantity), 0)

  const dispatch = useDispatch();

  return (
    <LinkContainerStyled onClick={() => dispatch(toggleHiddenCart())}>
      <FaShoppingCart />
      <span>{totalCartItems}</span>
    </LinkContainerStyled>
  );
};

export default CartIcon;
