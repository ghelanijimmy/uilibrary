import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TypographySC from "./styled-components/Typography";
import { colorStyles, sizes } from "../../constants/constants";

const { SM, MD, LG, XL } = sizes;
const { DEFAULT, PRIMARY, SECONDARY } = colorStyles;

const AnchorSC = styled(TypographySC)`
  color: ${({ theme, color }) => color || theme.light.colors.primary};
`;
AnchorSC.propTypes = {
  size: PropTypes.oneOf([SM, MD, LG, XL, ""]),
  color: PropTypes.oneOf([PRIMARY, SECONDARY, DEFAULT, PropTypes.string, ""]),
  displayInline: PropTypes.bool,
  makeInlineBlock: PropTypes.bool,
};

const Anchor = ({
  children = null,
  size = MD,
  color = DEFAULT,
  displayInline = false,
  makeInlineBlock = false,
  hrefLink = "",
  hrefTarget = "_blank",
}) => {
  return (
    <AnchorSC
      makeInlineBlock={makeInlineBlock}
      displayInline={displayInline}
      color={color}
      size={size}
      as={"a"}
      href={hrefLink}
      target={hrefTarget}
    >
      {children}
    </AnchorSC>
  );
};

Anchor.propTypes = {
  children: PropTypes.any,
  size: PropTypes.oneOf([SM, MD, LG, XL, ""]),
  color: PropTypes.oneOf([PRIMARY, SECONDARY, DEFAULT, PropTypes.string]),
  displayInline: PropTypes.bool,
  makeInlineBlock: PropTypes.bool,
  hrefLink: PropTypes.string,
  hrefTarget: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
};

export default Anchor;
