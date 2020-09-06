import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { sizes } from "../../constants/constants";

const { SM, MD, LG, XL } = sizes;

export const ParagraphSC = styled.p`
  ${({ size }) => {
    switch (size) {
      case SM:
        return css`
          font-size: 0.875em;
        `;
      case MD:
        return css`
          font-size: 1.25em;
        `;
      case LG:
        return css`
          font-size: 1.5em;
        `;
      case XL:
        return css`
          font-size: 2em;
        `;
      default:
        return css`
          font-size: 1em;
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
