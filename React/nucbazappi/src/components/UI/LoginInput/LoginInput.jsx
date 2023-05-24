import React from 'react';

import { InputContainerStyled, LoginInputStyled } from './LoginInputStyles';

const LoginInput = ({ type, placeholder }) => {
  return (
    <InputContainerStyled>
      <LoginInputStyled type={type} placeholder={placeholder} />
    </InputContainerStyled>
  );
};

export default LoginInput;
