import styled from "styled-components";
import TypographySC from "../styled-components/Typography";
import PropTypes from "prop-types";
import { sizes } from "../../../constants/constants";

const { SM, MD, LG, XL } = sizes;

export const AnchorSC = styled(TypographySC)``;

AnchorSC.propTypes = {
  size: PropTypes.oneOf([SM, MD, LG, XL, ""]),
  color: PropTypes.string,
  displayInline: PropTypes.bool,
  makeInlineBlock: PropTypes.bool,
};
