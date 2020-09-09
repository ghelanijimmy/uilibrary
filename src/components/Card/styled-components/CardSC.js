import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { ParagraphSC } from "../../Typography/styled-components/ParagraphSC";

export const CardInnerWrapperSC = styled.div``;

export const CardSC = styled.div`
  border-radius: ${({ theme }) => theme.common.box.borderRadius};
  border: 1px solid ${({ theme }) => theme.light.colors.body};
  padding: ${({ theme }) => theme.common.sizing.defaultPadding};

  ${ParagraphSC} {
    margin-top: 0;
  }

  ${CardInnerWrapperSC} {
    margin-bottom: ${({ theme }) => theme.common.sizing.defaultPadding};
  }

  ${({ displayFlex }) =>
    displayFlex &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > * {
        margin: ${({ theme }) => theme.common.sizing.halfPadding};
      }
      ${ParagraphSC} {
        margin-top: ${({ theme }) => theme.common.sizing.halfPadding};
      }
      ${CardInnerWrapperSC} {
        margin: 0 ${({ theme }) => theme.common.sizing.halfPadding};
        ${ParagraphSC} {
          margin-top: 0;
        }
      }
    `}
`;
CardSC.propTypes = {
  displayFlex: PropTypes.bool,
};
