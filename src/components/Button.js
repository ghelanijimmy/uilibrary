import React from "react";
import * as PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { buttonTypes, sizes } from "../constants/constants";

const { PRIMARY, SECONDARY, DEFAULT } = buttonTypes;
const { SM, MD, LG, XL } = sizes;

const ButtonSC = styled.button`
  border-radius: ${({ theme }) => theme.common.box.borderRadius};
  cursor: pointer;
  transition: ${({ theme }) => theme.common.transitions.defaultTransition};
  display: inline-block;
  ${({ type, theme }) => {
    switch (type) {
      case PRIMARY:
        return css`
          color: ${theme.light.button.primary.regular.color};
          background-color: ${theme.light.button.primary.regular.bgColor};
          border: 1px solid ${theme.light.button.primary.regular.borderColor};

          &:hover {
            background-color: ${theme.light.button.primary.regular
              .hoverBGColor};
            color: ${theme.light.button.primary.regular.hoverColor};
            border-color: ${theme.light.button.primary.regular
              .hoverBorderColor};
          }
        `;
      case SECONDARY:
        return css`
          color: ${theme.light.button.secondary.regular.color};
          background-color: ${theme.light.button.secondary.regular.bgColor};
          border: 1px solid ${theme.light.button.secondary.regular.borderColor};

          &:hover {
            background-color: ${theme.light.button.secondary.regular
              .hoverBGColor};
            color: ${theme.light.button.secondary.regular.hoverColor};
            border-color: ${theme.light.button.secondary.regular
              .hoverBorderColor};
          }
        `;
      default:
        return css`
          background-color: transparent;
          border: 1px solid #333;

          &:hover {
            background-color: #333;
            border: 1px solid #333;
            color: #fff;
          }
        `;
    }
  }}
  ${({ size, theme }) => {
    switch (size) {
      case SM:
        return css`
          padding: ${theme.common.sizing.halfPadding};
        `;
      case MD:
        return css`
          padding: ${theme.common.sizing.defaultPadding};
        `;
      case LG:
        return css`
          padding: ${theme.common.sizing.defaultPadding}
            ${theme.common.sizing.biggerPadding};
        `;
      case XL:
        return css`
          padding: ${theme.common.sizing.biggerPadding}
            ${theme.common.sizing.doublePadding};
        `;
      default:
        return css`
          padding: ${theme.common.sizing.defaultPadding};
        `;
    }
  }}
  ${({ isFullWidth }) =>
    isFullWidth &&
    css`
      display: block;
      width: 100%;
    `}
`;

ButtonSC.propTypes = {
  type: PropTypes.oneOf([DEFAULT, PRIMARY, SECONDARY]),
  size: PropTypes.oneOf([SM, MD, LG, XL]),
  isFullWidth: PropTypes.bool,
};

const Button = ({
  text = "Default Text",
  type = DEFAULT,
  size = MD,
  isFullWidth = false,
  asAnchor = false,
  link = "",
}) => (
  <ButtonSC
    as={(asAnchor && "a") || "button"}
    type={type}
    size={size}
    isFullWidth={isFullWidth}
    href={(asAnchor && link) || ""}
  >
    {text}
  </ButtonSC>
);
Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  isFullWidth: PropTypes.bool,
  asAnchor: PropTypes.bool,
  link: PropTypes.string,
};
export default Button;
