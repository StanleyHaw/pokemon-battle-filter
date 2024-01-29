import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/global-style';
import themeColor from './style/theme-color';
import FilterDisplay from './filter-display/FilterDisplay';

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
    <ThemeProvider theme={themeColor}>
      <>
        <GlobalStyle />
        <MainTitle>
          <h1>寶可夢篩選搜尋器</h1>
        </MainTitle>
        <FilterDisplay />
      </>
    </ThemeProvider>
  );
}

export default App;
