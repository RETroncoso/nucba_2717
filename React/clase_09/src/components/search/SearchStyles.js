import styled from "styled-components";

export const SearchFormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 30px;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  box-shadow: 10px 10px 25px rgba(174, 174, 192, 0.4);
  box-shadow: -10px -10px 20px #ffffff;
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: #c1c0c9;
  font-size: 1rem;
  letter-spacing: 0.5px;

  &::placeholder {
    font-size: 1rem;
    letter-spacing: 0.5px;
    color: #c1c0c9;
  }

  &:focus {
    outline: none;
  }
`;

export const ButtonStyled = styled.button`
  height: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;
