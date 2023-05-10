import styled from "styled-components";
import { POKEMON_TYPE_COLORS } from "../../../data/colors";

export const StatusBarContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatusBarTitleStyled = styled.p`
  width: 114px;
  margin: 5px 0;
  color: #4b4b4b;

  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
`;

export const StatusBarLineStyled = styled.div`
  width: 180px;
  height: 10;
  padding: 1px;

  background-color: #eeeeee;
  box-shadow: inset -1px -1px 1px rgba(255, 255, 255, 0.7),
    inset 1px 1px 2px rgba(174, 174, 192, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 12px;
`;

export const StatusBarActiveStyled = styled.div`
  margin: 0;
  width: ${(props) => (props.power > 100 ? "100%" : `${props.power}%`)};
  height: 10px;

  background: ${({ type }) => POKEMON_TYPE_COLORS[type]};
  box-shadow: 0px 0px 2px rgba(114, 138, 183, 0.7);
  border-radius: 12px;
`;
