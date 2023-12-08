
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior: smooth;
    cursor: url(../public/favicon.ico), auto;
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
  #root{
    position: fixed;
    background-color: rgb(255, 155, 41);
  }
`

function App() {
  return (
    <>
    <GlobalStyle />
    </>
  );
}
export default App;
