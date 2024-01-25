import MainTitle from './MainTitle';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../style/GlobalStyle';
import ThemeColor from '../style/ThemeColor';

function App() {
  return (
    <ThemeProvider theme={ThemeColor}>
      <>
        <GlobalStyle />
        <MainTitle />
      </>
    </ThemeProvider>
  );
}

export default App;
