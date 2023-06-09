import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { MdOutlineClose } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';
import { formatPrice } from '../../../utils';

import Submit from '../../UI/Submit/Submit';
import Increase from '../../UI/Increase/Increase';
import ModalCartCard from './ModalCartCard';

import {
  ButtonContainerStyled,
  MainContainerStyled,
  CloseButtonContainerStyled,
  CloseButtonStyled,
  ContainerStyled,
  EnvioStyled,
  PriceContainerStyled,
  PriceStyled,
  ProductsWrapperStyled,
  SubtotalStyled,
  TitleStyled,
  TotalStyled,
} from './ModalCartStyles';
import { ModalOverlayStyled } from '../NavbarStyles';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, toggleHiddenCart } from '../../../redux/cart/cartSlice';

const ModalCart = () => {
  const hiddenCart = useSelector(state => state.cart.hidden)
  const {cartItems, shippingCost} = useSelector(state => state.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const totalPrice = cartItems.reduce((acc, item) =>{
    return (acc += item.price * item.quantity)
  }, 0)

  return (
    <>
      {!hiddenCart && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleHiddenCart())}
          isHidden={hiddenCart}
        />
      )}
      <AnimatePresence>
        {!hiddenCart && (
          <ContainerStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: 'spring', damping: 27 }}
            key='cart-modal'
          >
            <CloseButtonContainerStyled>
              <CloseButtonStyled
                className='close__modal '
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(toggleHiddenCart())}
              >
                <MdOutlineClose size='24px' />
              </CloseButtonStyled>
            </CloseButtonContainerStyled>

            <MainContainerStyled>
              <TitleStyled>
                <h1>Tus Productos</h1>
                <Increase
                  onClick={() => dispatch(clearCart())}
                  bgColor='var(--magenta)'
                  disabled={!cartItems.length}
                >
                  <IoMdTrash />
                </Increase>
              </TitleStyled>

              <ProductsWrapperStyled>
              {
                cartItems.length ? (
                  cartItems.map((item) => {
                    return <ModalCartCard {...item} key={item.id} />
                  })
                ) : (
                  <p>No seas amarrete, comprá algo.</p>
                )
              }
              </ProductsWrapperStyled>
            </MainContainerStyled>

            <PriceContainerStyled>
              <SubtotalStyled>
                <p>Subtotal:</p>
                <span>{formatPrice(totalPrice)}</span>
              </SubtotalStyled>
              <EnvioStyled>
                <p>Envio</p>
                <span>{formatPrice(shippingCost)}</span>
              </EnvioStyled>
              <hr />
              <TotalStyled>
                <p>Total:</p>
                <PriceStyled>{formatPrice(totalPrice + shippingCost)}</PriceStyled>
              </TotalStyled>
              <ButtonContainerStyled>
                <Submit onClick={() => {
                  navigate('/checkout');
                  dispatch(toggleHiddenCart())
                  }}
                  disabled={!cartItems.length}
                  >
                  Iniciar pedido
                </Submit>
              </ButtonContainerStyled>
            </PriceContainerStyled>
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCart;
