import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'pt sans narrow', 'noto sans TC', sans-serif;
  }

  body {
    position: relative;
    background: ${(props) => props.theme.defaultGrey600};
    overflow: hidden;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    appearance: none;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;

    &:active,
    &:focus {
      outline: none;
    }
  }

  h1 {
  text-align: center;
  color: global.$defaultWhite;
  letter-spacing: 1px;
  }

  h3 {
    color: global.$defaultWhite;
    font-size: 20px;
    font-weight: 500;
  }

  h4 {
    font-size: 20px;
    font-weight: 400;
  }

  h5 {
    font-weight: 600;
    font-size: 12px;
  }

  section {
    margin: 0 20px;
  }
`;

export default GlobalStyle;
