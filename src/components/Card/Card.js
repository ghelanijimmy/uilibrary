import React from "react";
import { CardSC } from "./styled-components/CardSC";

const Card = ({ children }) => {
  return <CardSC>{children}</CardSC>;
};

export default Card;
