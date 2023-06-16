import { useNavigate } from 'react-router-dom';
import { formatPrice, formatDate } from '../../utils';
import OrderStatus from '../UI/OrderStatus/OrderStatus';

import {
  IdStyled,
  PedidoContainerStyled,
  PriceStyled,
  TextContainerStyled,
  TitleStyled,
} from './CardMisOrdenesStyles';

const CardMisOrdenes = ({createdAt, status, total, _id}) => {

  const navigate = useNavigate();

  return (
    <PedidoContainerStyled onClick={() => navigate(`/resumen/${_id}`)}>
      <TextContainerStyled>
        <TitleStyled>ID de la orden: {_id.slice(0, 7)}</TitleStyled>
        <IdStyled>Fecha {formatDate(createdAt)}hs</IdStyled>
        <PriceStyled>{formatPrice(total)}</PriceStyled>
      </TextContainerStyled>
      <OrderStatus status={status} />
    </PedidoContainerStyled>
  );
};

export default CardMisOrdenes;
