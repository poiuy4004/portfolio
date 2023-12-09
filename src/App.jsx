import SnowBackground from './components/SnowBackground';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior: smooth;
    cursor: url(../public/favicon.ico), auto;
    background-color: black;
  }
  *{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: 'Karla', sans-serif
  }
  a{
    color: black;
    text-decoration: none
  }
`

function App() {
  return (
    <>
    <GlobalStyle />
    <SnowBackground />
    </>
  );
}
export default App;
