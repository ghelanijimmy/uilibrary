import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colorStyles, sizes } from "../../constants/constants";
import TypographySC from "./styled-components/Typography";
import returnValidColor from "../../helpers/returnValidColor";

const { SM, MD, LG, XL } = sizes;
const { DEFAULT } = colorStyles;

export const ParagraphSC = styled(TypographySC)`
  ${({ makeBlock }) =>
    makeBlock &&
    css`
      display: block;
    `}
`;

ParagraphSC.propTypes = {
  size: PropTypes.oneOf([SM, MD, LG, XL, ""]),
  color: PropTypes.string,
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
      color={(returnValidColor(color) && color) || DEFAULT}
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
  color: PropTypes.string,
  asSpan: PropTypes.bool,
  displayInline: PropTypes.bool,
  makeInlineBlock: PropTypes.bool,
  makeBlock: PropTypes.bool,
};

export default Paragraph;
