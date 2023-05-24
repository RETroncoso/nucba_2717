import React from 'react';
import { ContainerLinkStyled, StyledLink } from './LinkStyled';

const Link = ({ radius = '32', to = '/' }) => {
  return (
    <ContainerLinkStyled whileTap={{ scale: 0.95 }}>
      <StyledLink radius={radius} to={to}>
        <span> Volver </span>
      </StyledLink>
    </ContainerLinkStyled>
  );
};

export default Link;
