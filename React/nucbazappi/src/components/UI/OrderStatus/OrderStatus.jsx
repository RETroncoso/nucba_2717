import React from 'react';

import { BiTime } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlineCheck } from 'react-icons/ai';

import { CheckStyled, PendingStyled, CancelStyled } from './OrderStatusStyles';

const OrderStatus = ({ status }) => {
  return (
    <div>
      {status === 'check' && (
        <CheckStyled>
          <AiOutlineCheck />
        </CheckStyled>
      )}
      {status === 'pending' && (
        <PendingStyled>
          <BiTime />
        </PendingStyled>
      )}
      {status === 'cancel' && (
        <CancelStyled>
          <MdOutlineCancel />
        </CancelStyled>
      )}
    </div>
  );
};

export default OrderStatus;
