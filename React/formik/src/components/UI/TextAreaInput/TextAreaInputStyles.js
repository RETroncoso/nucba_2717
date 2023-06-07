import styled from "styled-components";

export const TextArea = styled.textarea`
  border: 1px solid;
  border-color: ${({ error }) => (error ? "var(--error)" : "var(--white)")};
  border-radius: 5px;
  padding: 10px;
  width: 550px;
  height: 20px;
  resize: none;
  background: transparent;
  color: var(--white);
  outline: none;
`;

export const ErrorStyled = styled.span`
  padding-left: 5px;
  color: var(--error);
`;
