import SnowBackground from './components/SnowBackground';
import TopPageButton from './components/TopPageButton';
import Intro from './pages/Intro';
import Profile from './pages/Profile';
import SkillStack from './pages/SkillStack';
import projects from './assets/projects';
import Project from './pages/Project';
import Contact from './pages/Contact';
import KakaoButton from './pages/KakaoButton';

import { useEffect, useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  a{text-decoration: none}
  article>section{height: 100%; width: 100%;}
`
const Container = styled.main`
`
const OnePage = styled.article`
  height: 100vh;
  width: 100wh;
`

const TopPageButtonBox = styled.a`
  display: ${props=>(props.maxPage)>0&&(props.maxPage)!=99? "block" : "none"};
  position: fixed;
  bottom: 3%; right: 3%;
  font-size: 3rem;
  color: white;
`
function App() {
  const [isPage,setIsPage] = useState(0);
  const [maxPage,setMaxPage] = useState(0);
  const outerDivRef = useRef();
  function pageHandler(e){
    e.preventDefault();
    if(e.deltaY>0){
      if(isPage<projects.length-1+3){
        setIsPage(Math.floor(window.scrollY/window.innerHeight)+1);
        setMaxPage(Math.floor(window.scrollY/window.innerHeight)+1);
      }
      else if(isPage>=projects.length-1+3){
        setIsPage(projects.length-1+3);
      }
    }
    else if(e.deltaY<0){
      if((window.scrollY/window.innerHeight)>0){
        setIsPage(Math.floor(window.scrollY/window.innerHeight)-1);
      }
      else if((window.scrollY/window.innerHeight)<=0){
        setIsPage(0);
      }
    }
  }
  useEffect(()=>{
    outerDivRef.current.addEventListener("wheel",e=>pageHandler(e),{passive: false})

    if(window.innerHeight<888||window.innerWidth<1280){
      setMaxPage(99)
    }
    
    return ()=>{
      outerDivRef.current.removeEventListener("wheel",e=>pageHandler(e),{passive: false})
    }
  },[isPage, projects.length])

  function fullPageScrollHandler(e){
    if(e.deltaY>0){
      window.scrollTo({top: window.innerHeight*isPage, behavior: 'smooth'})
    }
    else if(e.deltaY<=0){
      window.scrollTo({top: window.innerHeight*isPage, behavior: 'smooth'})
    }
  }

  return (
    <div id='wheelBox' onWheel={e=>fullPageScrollHandler(e)} ref={outerDivRef} >
    <GlobalStyle />
    <SnowBackground />
    <Container>
      <Intro />
      <OnePage id='profile'>
        <Profile />
      </OnePage>
      <div>
        <OnePage id='skillStack'>
          <SkillStack maxPage={maxPage} />
        </OnePage>
        {projects.map((project,idx)=>(
          <OnePage id={"project"+String(idx)}>
            <Project maxPage={maxPage} idx={idx} project={project} key={idx}/>
          </OnePage>
        ))}
        <OnePage id='contact'>
          <Contact maxPage={maxPage} />
        </OnePage>
      </div>
      <TopPageButtonBox
        href='#profile' maxPage={maxPage}
        onClick={()=>{
          setIsPage(0);
          setMaxPage(0);
        }}
      >
        <TopPageButton />
      </TopPageButtonBox>
      <KakaoButton maxPage={maxPage} />
    </Container>
    </div>
  );
}
export default App;
