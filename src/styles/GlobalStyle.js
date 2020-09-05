import styled from "styled-components";

/**
 * Global styles reset wrapper
 * @type {*|React.ReactElement<any, any>}
 * @category Styles
 */
const GlobalStyle = styled.div`
  & * {
    font-size: ${({ theme }) => theme.common.font.size};
    font-family: ${({ theme }) => theme.common.font.family};
  }
  & a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
