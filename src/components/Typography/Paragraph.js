import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colorStyles, sizes } from "../../constants/constants";
import TypographySC from "./styled-components/Typography";

const { SM, MD, LG, XL } = sizes;
const { PRIMARY, DEFAULT, SECONDARY } = colorStyles;

export const ParagraphSC = styled(TypographySC)`
  ${({ makeBlock }) =>
    makeBlock &&
    css`
      display: block;
    `}
`;

ParagraphSC.propTypes = {
  size: PropTypes.oneOf([SM, MD, LG, XL, ""]),
  color: PropTypes.oneOf([PRIMARY, SECONDARY, DEFAULT, PropTypes.string]),
  displayInline: PropTypes.bool,
  makeInlineBlock: PropTypes.bool,
  makeBlock: PropTypes.bool,
};

const Paragraph = ({
  children = null,
  size = MD,
  color = DEFAULT,
  asSpan = false,
  displayInline = false,
  makeInlineBlock = false,
  makeBlock = false,
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
  size: PropTypes.oneOf([SM, MD, LG, XL, ""]),
  color: PropTypes.oneOf([PRIMARY, SECONDARY, DEFAULT, PropTypes.string, ""]),
  asSpan: PropTypes.bool,
  displayInline: PropTypes.bool,
  makeInlineBlock: PropTypes.bool,
  makeBlock: PropTypes.bool,
};

export default Paragraph;
