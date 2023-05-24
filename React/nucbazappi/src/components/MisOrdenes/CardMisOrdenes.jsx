import { formatPrice, formatDate } from '../../utils';
import OrderStatus from '../UI/OrderStatus/OrderStatus';

import {
  IdStyled,
  PedidoContainerStyled,
  PriceStyled,
  TextContainerStyled,
  TitleStyled,
} from './CardMisOrdenesStyles';

const CardMisOrdenes = () => {
  return (
    <PedidoContainerStyled onClick={e => e.preventDefault()}>
      <TextContainerStyled>
        <TitleStyled>ID de la orden: 0912</TitleStyled>
        <IdStyled>Fecha {formatDate(new Date())}hs</IdStyled>
        <PriceStyled>{formatPrice(3000)}</PriceStyled>
      </TextContainerStyled>
      <OrderStatus status='pending' />
    </PedidoContainerStyled>
  );
};

export default CardMisOrdenes;
