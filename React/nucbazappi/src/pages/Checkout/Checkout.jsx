import React from 'react';

import CheckoutForm from '../../components/Checkout/Form/CheckoutForm';
import ProductsCheckout from '../../components/Checkout/Products/ProductsCheckout';
import { ContainerCheckoutStyled } from '../Checkout/CheckoutStyles';

import {useSelector} from "react-redux";

const Checkout = () => {

  const {cartItems, shippingCost} = useSelector(state => state.cart)

  const price = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity)
  }, 0)

  return (
    <div>
      <ContainerCheckoutStyled>
        <CheckoutForm
          cartItems={cartItems}
          shippingCost={shippingCost}
          price={price}
        />
        <ProductsCheckout
          cartItems={cartItems}
          shippingCost={shippingCost}
          price={price}
        />
      </ContainerCheckoutStyled>
    </div>
  );
};

export default Checkout;
