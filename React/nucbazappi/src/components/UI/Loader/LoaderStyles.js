import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: calc(151px - 1.5rem * 2);
  margin: 0 auto;
`;

export const LoaderStyled = styled(motion.div)`
  border: 2px dashed #d9d9d9;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border-left-color: transparent;

  ${({ args }) => css({ ...args })}
`;
