import SnowBackground from './components/SnowBackground';
import TopPageButton from './components/TopPageButton';
import Intro from './pages/Intro';
import Profile from './pages/Profile';
import SkillStack from './pages/SkillStack';
import projects from './assets/projects';
import Project from './pages/Project';
import Contact from './pages/Contact';

import { useEffect, useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior: smooth;
    cursor: url(../public/favicon.ico), auto;
    color: white;
    background-color: #2b2d2f;
    overflow: hidden;
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Karla', sans-serif
  }
  a{
    text-decoration: none
  }
`
const Container = styled.main`
  height: 100%; width: 100%;
`
const TopPageButtonBox = styled.a`
  display: ${props=>props.renderTopPageButton? "block" : "none"};
  position: fixed;
  bottom: 3%; right: 3%;
  font-size: xxx-large;
  color: white;
`
function App() {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const [isPage,setIsPage] = useState(0);
  const [renderTopPageButton,setRenderTopPageButton] = useState(false);
  const skillStackRef = useRef();
  useEffect(()=>{
    window.addEventListener('wheel',e=>{
      e.preventDefault();
      e.deltaY>0
      ? isPage<2+projects.length? setIsPage(isPage+1) : setIsPage(2+projects.length)
      : isPage-1<0? setIsPage(0) : setIsPage(isPage-1)
    },{passive : false});
    window.scrollTo({ top: windowHeight*isPage, behavior: 'smooth' })

    function topPageButtonRenderHandler(entries){
      setRenderTopPageButton(entries[0].isIntersecting)
    }
    const observer = new IntersectionObserver(topPageButtonRenderHandler,{threshold: 0.1,})
    observer.observe(skillStackRef.current)
    return()=>observer.disconnect();
  },[isPage])
  
  return (
    <>
    <GlobalStyle />
    <SnowBackground />
    <Container>
      <Intro />
      <section id='profile' style={{height: windowHeight, width: windowWidth,}}>
        <Profile />
      </section>
      <div ref={skillStackRef}>
        <section style={{height: windowHeight, width: windowWidth,}}>
          <SkillStack />
        </section>
        {projects.map((project)=>(
          <section style={{height: windowHeight, width: windowWidth,}}>
            <Project project />
          </section>
        ))}
        <section style={{height: windowHeight, width: windowWidth,}}>
          <Contact />
        </section>
      </div>
      <TopPageButtonBox href='#profile' onClick={()=>setIsPage(0)} renderTopPageButton={renderTopPageButton}><TopPageButton /></TopPageButtonBox>
    </Container>
    </>
  );
}
export default App;
