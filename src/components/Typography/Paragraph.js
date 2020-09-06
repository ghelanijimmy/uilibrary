import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { sizes } from "../../constants/constants";

const { SM, MD, LG, XL } = sizes;

export const ParagraphSC = styled.p`
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
`;

ParagraphSC.propTypes = {
  size: PropTypes.oneOf([SM, MD, LG, XL]),
};

const Paragraph = ({ children, size }) => {
  return <ParagraphSC size={size}>{children}</ParagraphSC>;
};
Paragraph.propTypes = {
  children: PropTypes.any,
  size: PropTypes.oneOf([SM, MD, LG, XL]),
};

export default Paragraph;
