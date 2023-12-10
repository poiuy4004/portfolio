import styled from "styled-components";

import Intro from "./Intro";
import NextPageButton from "../components/NextPageButton";

import Modal from "../components/Modal";

import { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Circle } from "../assets/Circle.svg";
import KakaoTalkPng from "../assets/KakaoTalk.png";
import { ReactComponent as KakaoTalk} from "../assets/KakaoTalk.svg";
import { ReactComponent as GithubWhite} from "../assets/GithubWhite.svg";

const Container = styled.h1`
  height: 100%; width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  &>a{
    width: 100%;
    color: white;
  }
`
const Name = styled.strong`
  color: orange;
  text-shadow: 0.05em 0.05em 0.08em #ff073a;
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
      2%{content: "F";}
      4%{content: "Fr";}
      6%{content: "Fro";}
      8%{content: "Fron";}
      10%{content: "Front";}
      12%{content: "Fronte";}
      14%{content: "Fronten";}
      16%{content: "Frontend";}
      18%{content: "Frontend ";}
      20%{content: "Frontend D";}
      22%{content: "Frontend De";}
      24%{content: "Frontend Dev";}
      26%{content: "Frontend Deve";}
      28%{content: "Frontend Devel";}
      30%{content: "Frontend Develo";}
      32%{content: "Frontend Develop";}
      34%{content: "Frontend Develope";}
      36%{content: "Frontend Developer";}
      38%{content: "Frontend Developer ";}
      40%{content: "Frontend Developer P";}
      42%{content: "Frontend Developer Po";}
      44%{content: "Frontend Developer Por";}
      46%{content: "Frontend Developer Port";}
      48%{content: "Frontend Developer Portf";}
      50%{content: "Frontend Developer Portfo";}
      52%{content: "Frontend Developer Portfol";}
      54%{content: "Frontend Developer Portfoli";}
      56%{content: "Frontend Developer Portfolio";width: min-content;}
      57%{content: "Frontend Developer Portfolio";width: 100%;}
      77%{content: "Frontend Developer Portfolio";width: 100%;}
      87%{content: "Frontend Developer Portfolio";width: 0%;}
      88%{content: "";width: min-content;}
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
    stroke-dasharray: 40;
    transition: all .2s ease-in-out;
  }
  &>*:hover>:first-child{
    fill: #fff;
    stroke-width: 2em;
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
      stroke-width: 0.2em;
    }
  }
  @keyframes circleBorder {
    100% {
      stroke-dasharray: 555;
      stroke-width: 0.3em;
    }
  }
  @keyframes colorRed {100% {stroke: red;}}
  @keyframes colorYellow {100% {stroke: yellow;}}
  @keyframes colorBlue {100% {stroke: blue;}}
  @keyframes colorBlack {100% {stroke: black;}}
  @keyframes colorGreen {100% {stroke: green;}}
`

function Introduce(){
  const [isModal,setIsModal] = useState(false);
  const [isValue,setIsValue] = useState("");
  return(
    <Container>
      <div>안녕하세요, <Name>장용민</Name> 입니다.</div>
      <TypingText>
        <div>Frontend Developer <strong>Portfolio</strong></div>
        <div>Frontend Developer <strong>Portfolio</strong></div>
      </TypingText>
      <IconContainer>
        <div onClick={()=>{
          setIsValue("010-7184-2594")
          setIsModal(true)
        }}>
          <Circle />
          <div>
            <div>📞</div>
          </div>
        </div>
        <div onClick={()=>{
          setIsValue("010-7184-2594")
          setIsModal(true)
        }}>
          <Circle />
          <div>
            <div><KakaoTalk /></div>
          </div>
        </div>
        <a
          href="mailto:poiuy4004@naver.com" target="_blank" rel="noreferrer noopener"
          onClick={()=>{
          setIsValue("010-7184-2594")
          setIsModal(true)
        }}>
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
            <div><GithubWhite /></div>
          </div>
        </a>
      </IconContainer>
      <Link to="/introduce"><NextPageButton /></Link>
      <Modal />
      {/* <Intro /> */}
    </Container>
  )
}
export default Introduce;