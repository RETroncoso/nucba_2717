import React from 'react';
import { CountStyled } from './CountStyles';

const Count = ({ children }) => {
  return <CountStyled>{children}</CountStyled>;
};

export default Count;
