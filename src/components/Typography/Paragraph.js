import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colorStyles, sizes } from "../../constants/constants";

const { SM, MD, LG, XL } = sizes;
const { PRIMARY, DEFAULT, SECONDARY } = colorStyles;

export const ParagraphSC = styled.p`

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
  
  ${({ makeBlock }) =>
    makeBlock &&
    css`
      display: block;
    `}
  
`;

ParagraphSC.propTypes = {
  size: PropTypes.oneOf([SM, MD, LG, XL]),
  color: PropTypes.oneOf([PRIMARY, SECONDARY, DEFAULT]),
  displayInline: PropTypes.bool,
  makeInlineBlock: PropTypes.bool,
  makeBlock: PropTypes.bool,
};

const Paragraph = ({
  children,
  size,
  color,
  asSpan,
  displayInline,
  makeInlineBlock,
  makeBlock,
}) => {
  return (
    <ParagraphSC
      size={size}
      color={color}
      as={(asSpan && "span") || "p"}
      displayInline={!makeBlock && (displayInline || asSpan)}
      makeInlineBlock={
        (displayInline || asSpan) && !makeBlock && makeInlineBlock
      }
      makeBlock={makeBlock}
    >
      {children}
    </ParagraphSC>
  );
};
Paragraph.propTypes = {
  children: PropTypes.any,
  size: PropTypes.oneOf([SM, MD, LG, XL]),
  color: PropTypes.oneOf([PRIMARY, SECONDARY, DEFAULT, PropTypes.string]),
  asSpan: PropTypes.bool,
  displayInline: PropTypes.bool,
  makeInlineBlock: PropTypes.bool,
  makeBlock: PropTypes.bool,
};

export default Paragraph;
