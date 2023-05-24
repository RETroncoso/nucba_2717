import React from 'react';
import { IncreaseStyled } from './IncreaseStyles';

const Increase = ({
  children,
  bgColor,
  disabled = false,
  onClick = e => e.preventDefault(),
}) => {
  return (
    <IncreaseStyled
      whileTap={{ scale: 0.95 }}
      bgColor={bgColor}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </IncreaseStyled>
  );
};

export default Increase;
