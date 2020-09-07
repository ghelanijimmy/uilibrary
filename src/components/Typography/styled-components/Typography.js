import styled, { css } from "styled-components";
import { colorStyles, sizes } from "../../../constants/constants";
import PropTypes from "prop-types";

const { SM, MD, LG, XL } = sizes;
const { DEFAULT, PRIMARY, SECONDARY } = colorStyles;

const TypographySC = styled.p`
margin-bottom: ${({ theme }) => theme.common.sizing.halfPadding};
  
  ${({ size, theme }) => {
    switch (size) {
      case SM:
        return css`
          font-size: ${theme.common.type.small};
        `;
      case MD:
        return css`
          font-size: ${theme.common.type.medium};
        `;
      case LG:
        return css`
          font-size: ${theme.common.type.large};
        `;
      case XL:
        return css`
          font-size: ${theme.common.type.extraLarge};
        `;
      default:
        return css`
          font-size: ${theme.common.type.default};
        `;
    }
  }}

  ${({ color, theme }) => {
    switch (color) {
      case PRIMARY:
        return css`
          color: ${theme.light.colors.primary};
        `;
      case SECONDARY:
        return css`
          color: ${theme.light.colors.secondary};
        `;
      default:
        return css`
          color: ${color || theme.light.colors.body};
        `;
    }
  }}
  
  ${({ displayInline, makeInlineBlock, theme }) =>
    displayInline &&
    css`
      display: ${(makeInlineBlock && "inline-block") || "inline"};
      margin-right: ${theme.common.sizing.quarterPadding};
    `}
`;
TypographySC.propTypes = {
  size: PropTypes.oneOf([SM, MD, LG, XL]),
  color: PropTypes.oneOf([PRIMARY, SECONDARY, DEFAULT]),
  displayInline: PropTypes.bool,
  makeInlineBlock: PropTypes.bool,
};
export default TypographySC;
