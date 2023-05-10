import React from "react";
import { TypeStyled } from "./TypeStyles";

const Type = ({ typeName }) => {
  return <TypeStyled type={typeName}>{typeName}</TypeStyled>;
};

export default Type;
