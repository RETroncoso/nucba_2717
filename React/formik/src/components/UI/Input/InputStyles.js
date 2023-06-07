import styled from "styled-components";

export const InputBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InputLabelStyled = styled.label`
  font-size: 1rem;
  display: flex;
`;

export const InputStyled = styled.input`
  border: 1px solid;
  border-color: ${({ error }) => (error ? "var(--error)" : "var(--white)")};
  border-radius: 5px;
  padding: 10px;
  width: 250px;
  background: transparent;
  color: var(--white);
  outline: none;
`;

export const ErrorStyled = styled.span`
  padding-left: 5px;
  color: var(--error);
`;
