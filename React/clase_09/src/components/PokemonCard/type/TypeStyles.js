import styled from "styled-components";
import { POKEMON_TYPE_COLORS } from "../../../data/colors";

export const TypeStyled = styled.div`
  padding: 5px 10px;

  background-color: ${({ type }) => POKEMON_TYPE_COLORS[type]};
  border-radius: 15px;
`;
