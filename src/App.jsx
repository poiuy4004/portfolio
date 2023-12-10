import SnowBackground from './components/SnowBackground';
import Intro from './pages/Intro';
import Introduce from './pages/Introduce';

import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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

function App() {
  const navigate = useNavigate()
  const [page,setPage] = useState(null);
  useEffect(()=>{
    window.addEventListener('mousewheel',e=>{
      e.deltaY>0
      ? setPage(true)
      : setPage(false)
    })
    page
    ? navigate("/introduce")
    : navigate("/")
    setTimeout(()=>setPage(null),5000)
  },[page])
  return (
    <>

    <GlobalStyle />

    <Container>
      <SnowBackground />
      <article style={{height: '100%', width: '100%',}}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/introduce" element={<Introduce />} />
        </Routes>
      </article>
    </Container>
    
    </>
  );
}
export default App;
