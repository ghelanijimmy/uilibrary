import React from "react";
import PropTypes from "prop-types";
import { CardSC } from "./styled-components/CardSC";

const Card = ({ children, displayFlex }) => {
  return <CardSC displayFlex={displayFlex}>{children}</CardSC>;
};
Card.propTypes = {
  displayFlex: PropTypes.bool,
};

export default Card;
