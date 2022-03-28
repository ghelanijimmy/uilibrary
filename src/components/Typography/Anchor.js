import React from "react";
import PropTypes from "prop-types";
import { colorStyles, sizes } from "../../constants/constants";
import returnValidColor from "../../helpers/returnValidColor";
import {addThemeWrapper} from "../../styles/addThemeWrapper";
import { AnchorSC } from "./styled-components/AnchorSC";

const { SM, MD, LG, XL } = sizes;
const { DEFAULT } = colorStyles;

const Anchor = ({
  children = null,
  size = MD,
  color = DEFAULT,
  displayBlock = false,
  hrefLink = "",
  hrefTarget = "_blank",
}) => {
  return (
    <AnchorSC
      displayBlock={displayBlock}
      color={(returnValidColor(color) && color) || "#333"}
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
  color: PropTypes.string,
  displayBlock: PropTypes.bool,
  hrefLink: PropTypes.string,
  hrefTarget: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
};

export default addThemeWrapper(Anchor);
