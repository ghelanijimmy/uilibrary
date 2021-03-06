import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Button from "../../Button/Button";

export const ModalCloseButton = styled(Button)`
  position: absolute;
  top: 1em;
  right: 1em;
`;

export const ModalSC = styled.div`
  ${({ theme, show, bgColor, hideZIndex }) => {
    const { common } = theme;

    return css`
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: ${(bgColor && bgColor) || "rgba(0, 0, 0, 0.5)"};
      transition: ${common.transitions.defaultTransition};
      ${(show &&
        css`
          opacity: 1;
        `) ||
      css`
        opacity: 0;
        z-index: ${(hideZIndex && "-1") || "initial"};
      `};
    `;
  }}
`;
ModalSC.propTypes = {
  show: PropTypes.bool,
  bgColor: PropTypes.string,
  hideZIndex: PropTypes.bool,
};
