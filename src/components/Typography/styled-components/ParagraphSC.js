import styled, { css } from "styled-components";
import TypographySC from "./Typography";
import PropTypes from "prop-types";
import { sizes } from "../../../constants/constants";

const { SM, MD, LG, XL } = sizes;

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
