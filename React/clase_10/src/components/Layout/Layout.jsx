import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';

const LayoutContainerStyled = styled.div`
  min-height: 100vh;
  height: auto;
  max-width: 1200px;
  margin: 0 auto;

  & p {
    text-align: center;
  }
`;

const ContentContainerStyled = styled.div`
  height: calc(100vh - 120px);
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainerStyled>
      <Navbar />
      <ContentContainerStyled>{children}</ContentContainerStyled>
      <p>Nucbaneta</p>
    </LayoutContainerStyled>
  );
};

export default Layout;
