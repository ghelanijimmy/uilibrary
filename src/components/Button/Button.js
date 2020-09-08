import React from "react";
import * as PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colorStyles, sizes } from "../../constants/constants";

const { PRIMARY, SECONDARY, DEFAULT } = colorStyles;
const { SM, MD, LG, XL } = sizes;

/**
 * Button Styled Component
 * @param type {string}
 * @param size {string}
 * @param isFullWidth {boolean}
 * @return {JSX.Element}
 * @category Styled Components
 */
export const ButtonSC = styled.button`
  border-radius: ${({ theme }) => theme.common.box.borderRadius};
  text-align: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.common.transitions.defaultTransition};
  display: inline-block;
  
  ${({ type, theme, inverse }) => {
    switch (type) {
      case PRIMARY:
      case SECONDARY:
        return css`
          color: ${theme.light.button[type][(inverse && "inverse") || "regular"]
            .color};
          background-color: ${theme.light.button[type][
            (inverse && "inverse") || "regular"
          ].bgColor};
          border: 1px solid
            ${theme.light.button[type][(inverse && "inverse") || "regular"]
              .borderColor};

          &:hover {
            background-color: ${theme.light.button[type][
              (inverse && "inverse") || "regular"
            ].hoverBGColor};
            color: ${theme.light.button[type][
              (inverse && "inverse") || "regular"
            ].hoverColor};
            border-color: ${theme.light.button[type][
              (inverse && "inverse") || "regular"
            ].hoverBorderColor};
          }
        `;
      default:
        return css`
          background-color: ${theme.light.button.default[
            (inverse && "inverse") || "regular"
          ].bgColor};
          border: 1px solid
            ${theme.light.button.default[(inverse && "inverse") || "regular"]
              .borderColor};
          color: ${theme.light.button.default[
            (inverse && "inverse") || "regular"
          ].color};

          &:hover {
            background-color: ${theme.light.button.default[
              (inverse && "inverse") || "regular"
            ].hoverBGColor};
            border-color: ${theme.light.button.default[
              (inverse && "inverse") || "regular"
            ].hoverBorderColor};
            color: ${theme.light.button.default[
              (inverse && "inverse") || "regular"
            ].hoverColor};
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
  ${({ isFullWidth, as }) =>
    isFullWidth &&
    css`
      display: block;
      width: ${as === "a" ? "auto" : "100%"};
    `}
`;

ButtonSC.propTypes = {
  type: PropTypes.oneOf([DEFAULT, PRIMARY, SECONDARY]),
  size: PropTypes.oneOf([SM, MD, LG, XL]),
  isFullWidth: PropTypes.bool,
  inverse: PropTypes.bool,
};

/**
 * @typedef {'default' | 'primary' | 'secondary'} buttonType
 */

/**
 * @typedef {'sm' | 'md' | 'lg' | 'xl'} buttonSize
 */

/**
 * Button Component
 * @param text {string}
 * @param type {buttonType}
 * @param size {buttonSize}
 * @param isFullWidth {boolean}
 * @param asAnchor {boolean}
 * @param link {string}
 * @param inverse {boolean}
 * @param handleClick {function}
 * @return {JSX.Element}
 * @category Components
 */
const Button = ({
  text = "Default Text",
  type = DEFAULT,
  size = MD,
  isFullWidth = false,
  asAnchor = false,
  link = "",
  inverse = false,
  handleClick = () => null,
}) => {
  return (
    <ButtonSC
      as={(asAnchor && "a") || "button"}
      type={type}
      size={size}
      isFullWidth={isFullWidth}
      href={(asAnchor && link) || ""}
      inverse={inverse}
      onClick={handleClick}
    >
      {text}
    </ButtonSC>
  );
};
Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf([DEFAULT, PRIMARY, SECONDARY]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  isFullWidth: PropTypes.bool,
  asAnchor: PropTypes.bool,
  link: PropTypes.string,
  inverse: PropTypes.bool,
  handleClick: PropTypes.func,
};
export default Button;
