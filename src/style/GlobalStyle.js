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
`;

export default GlobalStyle;
