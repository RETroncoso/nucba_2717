import styled from 'styled-components';

export const FoundContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  height: 60vh;
  gap: 5rem;
`;

export const FoundTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;

  & h1 {
    margin: 0;
  }
`;

export const FoundTitleStyled = styled.h1`
  font-weight: 800;
  font-size: 2rem;
`;

export const FoundSubtitleStyled = styled.h2`
  font-weight: 400;
`;
