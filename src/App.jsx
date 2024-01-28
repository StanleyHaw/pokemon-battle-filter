import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/global-style';
import ThemeColor from './style/theme-color';

const MainTitle = styled.div`
  margin: 24px auto;

  & h1 {
    text-align: center;
    letter-spacing: 1px;
    color: ${(props) => props.theme.defaultWhite};
  }
`;

function App() {
  return (
    <ThemeProvider theme={ThemeColor}>
      <>
        <GlobalStyle />
        <MainTitle>
          <h1>寶可夢篩選搜尋器</h1>
        </MainTitle>
      </>
    </ThemeProvider>
  );
}

export default App;
