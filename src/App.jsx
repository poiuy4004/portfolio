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
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Karla', sans-serif
  }
  a{text-decoration: none}
  article>section{height: 100%; width: 100%;}
`
const Container = styled.main`
  /* height: 100%; width: 100%; */
`
const OnePage = styled.article`
  height: ${window.innerHeight}px;
  width: ${window.innerWidth}px;
  /* margin-top: 2rem; */
`

const TopPageButtonBox = styled.a`
  display: ${props=>props.isPage>0? "block" : "none"};
  position: fixed;
  bottom: 3%; right: 3%;
  font-size: xxx-large;
  color: white;
`
function App() {
  const [isPage,setIsPage] = useState(0);
  const introRef = useRef();
  const skillStackRef = useRef();
  useEffect(()=>{
    const introObserver = new IntersectionObserver(entries=>entries[0].isIntersecting? setIsPage(0) : null,{threshold: 0.9,})
    introObserver.observe(introRef.current)
    const skillObserver = new IntersectionObserver(entries=>entries[0].isIntersecting? setIsPage(1) : null,{threshold: 0.05,})
    skillObserver.observe(skillStackRef.current)

    window.addEventListener("wheel",e=>{
      e.preventDefault();
      if(e.deltaY>0){
        if(isPage+1<projects.length+3+1){
          setIsPage(Math.floor(window.scrollY/window.innerHeight)+1)
        }
        else{
          setIsPage(projects.length+3)
        }
      }
      else if(e.deltaY<0){
        if(isPage-1>0-1){
          setIsPage(0)
        }
        else{
          setIsPage(Math.floor(window.scrollY/window.innerHeight)-1)
        }
      }
    },{passive: false})

    return ()=>{
      introObserver.disconnect();
      skillObserver.disconnect();
    }
  },[])

  return (
    <div>
    <GlobalStyle />
    <SnowBackground />
    <Container
      onWheel={e=>{
        window.scrollTo({top: window.innerHeight*isPage, behavior: 'smooth'})
    }}>
      <Intro />
      <OnePage id='profile' ref={introRef}>
        <Profile />
      </OnePage>
      <div ref={skillStackRef}>
        <OnePage id='skillStack'>
          <SkillStack isPage={isPage} />
        </OnePage>
        {projects.map((project,idx)=>(
          <OnePage id={"project"+String(idx)}>
            <Project isPage={isPage} idx={idx} project={project} />
          </OnePage>
        ))}
        <OnePage id='contact'>
          <Contact isPage={isPage} />
        </OnePage>
      </div>
      <TopPageButtonBox href='#profile' onClick={()=>setIsPage(0)} isPage={isPage}><TopPageButton /></TopPageButtonBox>
    </Container>
    </div>
  );
}
export default App;
