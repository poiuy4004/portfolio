import styled from "styled-components";

import Modal from "../components/Modal";

import { useEffect, useRef, useState } from "react";

import { ReactComponent as Circle } from "../assets/Circle.svg";

import KakaoQRPng from "../assets/kakaoQR.png";
import { ReactComponent as KakaoTalkSvg} from "../assets/KakaoTalk.svg";
import KakaoTalk from "../components/KakaoTalk";
import { ReactComponent as GithubWhiteSvg} from "../assets/GithubWhite.svg";

const Container = styled.div`
  height: 100%; width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 6em;
  font-weight: 700;
`
const Name = styled.strong`
  color: transparent;
  &.render{
    animation: renderName 1s forwards;
  }
  @keyframes renderName {100%{color: rgb(238, 245, 255); -webkit-text-stroke: 1px rgb(162, 87, 114);}}
`
const TypingText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  &>:first-child{
    visibility: hidden;
  }
  &>:last-child{
    position: absolute;
    visibility: hidden;
  }
  &>:last-child::after{
    display: block;
    visibility: visible;
    width: min-content;
    white-space: pre;
    overflow: hidden;
    border-right: 0.08em solid rgb(102, 102, 102);
    text-align: left;
    animation: typing 5s infinite;
    content: "Frontend Developer Portfolio";
    @keyframes typing {
      0%{content: "";}
      1%{content: "F";}
      2%{content: "Fr";}
      3%{content: "Fro";}
      4%{content: "Fron";}
      5%{content: "Front";}
      6%{content: "Fronte";}
      7%{content: "Fronten";}
      8%{content: "Frontend";}
      9%{content: "Frontend ";}
      10%{content: "Frontend D";}
      11%{content: "Frontend De";}
      12%{content: "Frontend Dev";}
      13%{content: "Frontend Deve";}
      14%{content: "Frontend Devel";}
      15%{content: "Frontend Develo";}
      16%{content: "Frontend Develop";}
      17%{content: "Frontend Develope";}
      18%{content: "Frontend Developer";}
      19%{content: "Frontend Developer ";}
      20%{content: "Frontend Developer P";}
      21%{content: "Frontend Developer Po";}
      22%{content: "Frontend Developer Por";}
      23%{content: "Frontend Developer Port";}
      24%{content: "Frontend Developer Portf";}
      25%{content: "Frontend Developer Portfo";}
      26%{content: "Frontend Developer Portfol";}
      27%{content: "Frontend Developer Portfoli";}
      28%{content: "Frontend Developer Portfolio";width: min-content;border-right: 0.08em solid rgb(102, 102, 102);}
      33%{content: "Frontend Developer Portfolio";width: min-content;border-right: 0.08em solid rgb(102, 102, 102);}
      34%{content: "Frontend Developer Portfolio";width: 100%;border:none;}
      70%{content: "Frontend Developer Portfolio";width: 100%;border:none;}
      71%{content: "Frontend Developer Portfolio";width: 100%;border-right: 0.08em solid rgb(102, 102, 102);}
      80%{content: "Frontend Developer Portfolio";width: 0%;}
      81%{content: "";width: min-content;}
      100%{content: "";width: min-content;}
    }
  }
`

const IconContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 2em;
  &>*{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5em;
    height: 1.5em;
    margin: 0.2em;
    cursor: pointer;
  }

  &>*>:first-child{
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    animation: threeBorder 1s ease-in-out forwards;
    fill: none;
    stroke-dasharray: 37;
    transition: all .2s ease-in-out;
  }
  &>*:hover>:first-child{
    fill: #fff;
    stroke-width: 0.5em;
    transition: all .2s ease-in-out;
  }
  &>:nth-child(1):hover>:first-child{
    animation: circleBorder 1s ease-in-out forwards, colorRed 1s linear forwards;
  }
  &>:nth-child(2):hover>:first-child{
    animation: circleBorder 1s ease-in-out forwards, colorYellow 1s linear forwards;
  }
  &>:nth-child(3):hover>:first-child{
    animation: circleBorder 1s ease-in-out forwards, colorGreen 1s linear forwards;
  }
  &>:nth-child(4):hover>:first-child{
    animation: circleBorder 1s ease-in-out forwards, colorBlue 1s linear forwards;
  }
  &>:nth-child(5):hover>:first-child{
    animation: circleBorder 1s ease-in-out forwards, colorBlack 1s linear forwards;
  }

  &>*>:nth-child(2){
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    color: white;
    font-size: 0.5em;
    font-weight: 400;
    text-align: center;
  }
  &>:nth-child(2)>:nth-child(2){
    fill: yellow;
    font-size: 0.4em;
  }
  &>:nth-child(2):hover>:nth-child(2){
    fill: black;
  }

  &>:nth-child(5)>:nth-child(2){
    margin: 0.2em 0 0 0.05em;
    width: auto; height: auto;
    fill: white;
  }
  &>:nth-child(5):hover>:nth-child(2){
    fill: black;
  }

  @keyframes threeBorder {
    0% {
      stroke: #fff;
      stroke-dasharray: 555;
      stroke-width: 0.2em;
    }
    100% {
      stroke: #fff;
      stroke-dasharray: 84;
      stroke-width: 0.1em;
    }
  }
  @keyframes circleBorder {
    100% {
      stroke-dasharray: 555;
      stroke-width: 0.2em;
    }
  }
  @keyframes colorRed {100% {stroke: red;}}
  @keyframes colorYellow {100% {stroke: yellow;}}
  @keyframes colorBlue {100% {stroke: blue;}}
  @keyframes colorBlack {100% {stroke: black;}}
  @keyframes colorGreen {100% {stroke: green;}}
`

function Contact(){
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [isValue,setIsValue] = useState("");
  const [isNameRender,setIsNameRender] = useState(false);
  const iconContainerRef = useRef();
  useEffect(()=>{
    observer.observe(iconContainerRef.current)
  })
  function nameRenderHandler(entries){
    setIsNameRender(entries[0].isIntersecting)
  }
  const observer = new IntersectionObserver(nameRenderHandler,{threshold: 1.0,})

  return(
    <Container>
      <div><Name className={isNameRender? "render": null}>장용민</Name></div>
      <TypingText>
        <div>Frontend Developer <strong>Portfolio</strong></div>
        <div>Frontend Developer <strong>Portfolio</strong></div>
      </TypingText>
      <IconContainer ref={iconContainerRef}>
        <a href="tel:010-7184-2594" target="_blank" rel="noreferrer noopener">
          <Circle />
          <div>
            <div>📞</div>
          </div>
        </a>
        <div onClick={()=>{setIsModalOpen(true)}}>
          <Circle />
          <div>
            <div><KakaoTalkSvg /></div>
          </div>
        </div>
        <a href="mailto:poiuy4004@naver.com" target="_blank" rel="noreferrer noopener">
          <Circle />
          <div>
            <div>✉️</div>
          </div>
        </a>
        <a href="https://poiuy4004.github.io/" target="_blank" rel="noreferrer noopener">
          <Circle />
          <div>
            <div>💻</div>
          </div>
        </a>
        <a href="https://github.com/poiuy4004" target="_blank" rel="noreferrer noopener">
          <Circle />
          <div>
            <div><GithubWhiteSvg /></div>
          </div>
        </a>
      </IconContainer>
      {isModalOpen
      ? <Modal setIsModalOpen={setIsModalOpen} content={<KakaoTalk setIsModalOpen={setIsModalOpen} />}/>
      : null}
    </Container>
  )
}
export default Contact;