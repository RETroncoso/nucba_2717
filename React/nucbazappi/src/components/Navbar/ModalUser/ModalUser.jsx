import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import {
  HrStyled,
  LinkStyled,
  ModalContainerStyled,
  UsernameStyled,
} from './ModelUserStyles';

const ModalUser = () => {
  const [hiddenMenu, setHiddenMenu] = useState(true);

  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <ModalContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
          key='cart-user'
        >
          <UsernameStyled>Pepito</UsernameStyled>
          <HrStyled />
          <LinkStyled to='/mis-ordenes'>Mis Ordenes</LinkStyled>
          <span onClick={() => setHiddenMenu(!hiddenMenu)}>Cerrar Sesion</span>
        </ModalContainerStyled>
      )}
    </AnimatePresence>
  );
};

export default ModalUser;
