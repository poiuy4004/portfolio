import styled from "styled-components";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  height: 100%; width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2b2d2f;
  &.hide{
    display: none;
  }
  &>button{width: 100%; color: white;visibility:hidden;}
  & .fadeOut{
    &>*{
      transition: 1s;
    }
    &>div:nth-of-type(1){border-top: solid 10px white; transform: translateX(-234%);}
    &>div:nth-of-type(2){border-left: solid 10px white; transform: translateY(234%);}
    &>div:nth-of-type(3){border-right: solid 10px white; transform: translateY(-234%);}
    &>div:nth-of-type(4){border-bottom: solid 10px white; transform: translateX(234%);}
    &>span{
      position: absolute;
      top: 101%;
      transform: scale(0%);
    }
  }
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: xxx-large;
  &>:first-child::before{content: "Frontend"}
  &>:last-child::before{content: "Portfolio"}
`
const BorderContainer = styled.div`
  position: absolute;
  top: 35%; left: 35%;
  height: 30%; width: 30%;
  display: flex;
  justify-content: right;
  &>div{
    position: absolute;
    height: 100%; width: 100%;
  }
  &>div:nth-of-type(1){border-top: solid 10px white; animation: borderTop 1s;}
  &>div:nth-of-type(2){border-left: solid 10px white; animation: borderLeft 1s;}
  &>div:nth-of-type(3){border-right: solid 10px white; animation: borderRight 1s;}
  &>div:nth-of-type(4){border-bottom: solid 10px white; animation: borderBottom 1s;}
  &>span{
    position: absolute;
    top: 101%;
    font-size: xx-large;
    font-weight: 700;
    animation: showName 1s;
  }
  @keyframes borderTop {0%{transform: translateX(-234%)}; 25%{transform: translate(0)};}
  @keyframes borderLeft {0%{transform: translateY(234%)}; 74%{transform: translateY(234%)}; 100%{transform: translateY(0);}}
  @keyframes borderRight {0%{transform: translateY(-234%)}; 24%{transform: translateY(-234%)}; 50%{transform: translateY(0%);}}
  @keyframes borderBottom {0%{transform: translateX(234%)}; 49%{transform: translateX(234%)}; 75%{transform: translateX(0%);}}
  @keyframes showName {0%{transform: scale(0%)}}
`

function Intro(){
  const [fadeOut,setFadeOut] = useState(false);
  const [hide,setHide] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    setTimeout(()=>{
      setFadeOut(true)
      setTimeout(()=>{
        navigate('/introduce')
        setHide(true)
      },1000)
    },1500)
  },[])

  return(
    <Container className={hide? "hide" : null}>

      <TextContainer>
        <h1></h1>
        <h1></h1>
      </TextContainer>

      <BorderContainer className={fadeOut? "fadeOut" : null}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <span>by.YongMin</span>
      </BorderContainer>

    </Container>
  )
}
export default Intro;