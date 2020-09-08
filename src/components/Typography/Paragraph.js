import React from "react";
import PropTypes from "prop-types";
import { colorStyles, sizes } from "../../constants/constants";
import returnValidColor from "../../helpers/returnValidColor";
import { ParagraphSC } from "./styled-components/ParagraphSC";

const { SM, MD, LG, XL } = sizes;
const { DEFAULT } = colorStyles;

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
      color={(returnValidColor(color) && color) || "#333"}
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
