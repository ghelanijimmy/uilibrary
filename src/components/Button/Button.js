import React from "react";
import * as PropTypes from "prop-types";
import { colorStyles } from "../../constants/constants";
import { ButtonSC } from "./styled-components/ButtonSC";

const { PRIMARY, SECONDARY, DEFAULT } = colorStyles;

/**
 * @typedef {'default' | 'primary' | 'secondary'} buttonType
 */

/**
 * @typedef {'sm' | 'md' | 'lg' | 'xl' | ''} buttonSize
 */

/**
 * Button Component
 * @param text {string}
 * @param type {buttonType}
 * @param size {buttonSize}
 * @param isFullWidth {boolean}
 * @param asAnchor {boolean}
 * @param link {string}
 * @param inverse {boolean}
 * @param handleClick {function}
 * @return {JSX.Element}
 * @category Components
 */
const Button = ({
  text = "Default Text",
  type = DEFAULT,
  size = "",
  isFullWidth = false,
  asAnchor = false,
  link = "",
  inverse = false,
  handleClick = () => null,
}) => {
  return (
    <ButtonSC
      as={(asAnchor && "a") || "button"}
      type={type}
      size={size}
      isFullWidth={isFullWidth}
      href={(asAnchor && link) || ""}
      inverse={inverse}
      onClick={handleClick}
    >
      {text}
    </ButtonSC>
  );
};
Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf([DEFAULT, PRIMARY, SECONDARY]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", ""]),
  isFullWidth: PropTypes.bool,
  asAnchor: PropTypes.bool,
  link: PropTypes.string,
  inverse: PropTypes.bool,
  handleClick: PropTypes.func,
};
export default Button;
