import React from "react";
import * as PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { button } from "../constants/button";

const { PRIMARY, SECONDARY } = button;

const ButtonSC = styled.button`
  padding: 20px;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #333;
  transition: 0.25s all ease-in-out;

  &:hover {
    background-color: #333;
    border: 1px solid #333;
    color: #fff;
  }
`;

const PrimaryButtonSC = styled(ButtonSC)`
  ${({ theme }) => css`
    color: ${theme.light.button.primary.regular.color};
    background-color: ${theme.light.button.primary.regular.bgColor};
    border: 1px solid ${theme.light.button.primary.regular.borderColor};

    &:hover {
      background-color: ${theme.light.button.primary.regular.hoverBGColor};
      color: ${theme.light.button.primary.regular.hoverColor};
      border-color: ${theme.light.button.primary.regular.hoverBorderColor};
    }
  `};
`;

const SecondaryButtonSC = styled(ButtonSC)`
  ${({ theme }) => css`
    color: ${theme.light.button.secondary.regular.color};
    background-color: ${theme.light.button.secondary.regular.bgColor};
    border: 1px solid ${theme.light.button.secondary.regular.borderColor};

    &:hover {
      background-color: ${theme.light.button.secondary.regular.hoverBGColor};
      color: ${theme.light.button.secondary.regular.hoverColor};
      border-color: ${theme.light.button.secondary.regular.hoverBorderColor};
    }
  `};
`;

const Button = ({ text = "", type = "" }) => {
  switch (type) {
    case PRIMARY:
      return <PrimaryButtonSC>{text}</PrimaryButtonSC>;
    case SECONDARY:
      return <SecondaryButtonSC>{text}</SecondaryButtonSC>;
    default:
      return <ButtonSC>{text}</ButtonSC>;
  }
};
Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};
export default Button;
