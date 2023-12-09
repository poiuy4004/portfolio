import SnowBackground from './components/SnowBackground';
import Introduce from './components/Introduce';

import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior: smooth;
    cursor: url(../public/favicon.ico), auto;
    background-color: #2b2d2f;
  }
  #root{

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
const Container = styled.main`
  position: fixed;
  top: 3%; left: 3%;
  height: 94%; width: 94%;
  color: white;
`

const IntroduceContainer = styled.section`
  height: 100%; width: 100%;
`

function App() {
  const [page,setPage] = useState(0)
  return (
    <>
    <GlobalStyle />
    
    <Container>
      <SnowBackground />
      <article style={{height: '100%', width: '100%',}}>
        <IntroduceContainer>
          <Introduce />
        </IntroduceContainer>
      </article>
    </Container>
    
    </>
  );
}
export default App;
