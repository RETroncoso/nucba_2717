import React from 'react';
import styled from 'styled-components';

const WrapperGeneral = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const GeneralWrapper = ({children}) => {
  return <>
  <WrapperGeneral>{children}</WrapperGeneral>
  </>
};

export default GeneralWrapper;