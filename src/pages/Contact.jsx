import styled from "styled-components";

import Modal from "../components/Modal";

import { useEffect, useRef, useState } from "react";

import { ReactComponent as Circle } from "../assets/Circle.svg";

import { ReactComponent as KakaoTalkSvg} from "../assets/KakaoTalk.svg";
import KakaoTalk from "../components/KakaoTalk";
import { ReactComponent as GithubWhiteSvg} from "../assets/GithubWhite.svg";

const Container = styled.section`
  padding: 3% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 6rem;
  font-weight: 700;
`
const Name = styled.strong`
  color: transparent;
  &.render{
    animation: renderName 2s forwards;
  }
  @keyframes renderName {100%{color: rgb(255,255,255); text-shadow: 0.25rem 0.25rem 0 rgba(255,127,0,0.3);}}
`
const TypingText = styled.div`
  display: ${props=>props.maxPage>7? "flex" : "none"};
  flex-direction: column;
  justify-content: left;
  text-align: left;
  align-items: center;
  height: 7rem;
  &>div{
    position: absolute;
    visibility: hidden;
  }
  &>div::after{
    position: absolute;
    top: 0; left: 0;
    visibility: visible;
    white-space: pre;
    overflow: hidden;
    animation: typing 3s infinite;
    content: "Frontend Developer Portfolio";
    @keyframes typing {
      0%{content: ""; border-right: 0.8rem solid rgb(102, 102, 102);}
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
      28%{content: "Frontend Developer"; width: min-content;border-right: 0.8rem solid rgb(102, 102, 102);}
      33%{content: "Frontend Developer"; width: min-content;border-right: 0.8rem solid rgb(102, 102, 102);}
      34%{content: "Frontend Developer"; width: 100%; border:none;}
      70%{content: "Frontend Developer"; width: 100%; border:none;}
      71%{content: "Frontend Developer"; width: 100%; border-right: 0.8rem solid rgb(102, 102, 102);}
      80%{content: "Frontend Developer"; width: 0%; border-right: 0.8rem solid rgb(102, 102, 102);}
      81%{content: ""; width: min-content; border: none;}
      100%{content: ""; width: min-content; border: none;}
    }
  }
  @media (max-height: 888px),(max-width: 1280px) {
    font-size: 3rem;
  }
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  &>*{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7rem;
    height: 7rem;
    margin: 2rem;
    cursor: pointer;
  }

  &>*>:first-child{
    position: absolute;
    width: 7rem;
    height: 7rem;
    animation: threeBorder 1s ease-in-out forwards;
    fill: none;
    stroke-dasharray: 37;
    transition: all .2s ease-in-out;
  }
  &>*:hover>:first-child{
    fill: #fff;
    stroke-width: 5rem;
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
    width: 7rem;
    height: 7rem;
    color: white;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.3rem;
  }
  &>:nth-child(2)>:nth-child(2){
    fill: yellow;
    width: 7rem;
    height: 7rem;
    font-size: 1rem;
    &>*{
      width: 2.7rem;
      height: 2.7rem;
    }
  }
  &>:nth-child(2):hover>:nth-child(2){
    fill: black;
    width: 7rem;
    height: 7rem;
  }

  &>:nth-child(5)>:nth-child(2){
    margin: 1rem 0 0 0.05rem;
    height: 3.7rem;
    width: 3.7rem;
    fill: white;
  }
  &>:nth-child(5):hover>:nth-child(2){
    fill: black;
  }

  @keyframes threeBorder {
    0% {
      stroke: #fff;
      stroke-dasharray: 555;
      stroke-width: 1rem;
    }
    100% {
      stroke: #fff;
      stroke-dasharray: 84;
      stroke-width: 1rem;
    }
  }
  @keyframes circleBorder {
    100% {
      stroke-dasharray: 555;
      stroke-width: 1rem;
    }
  }
  @keyframes colorRed {100% {stroke: red;}}
  @keyframes colorYellow {100% {stroke: yellow;}}
  @keyframes colorBlue {100% {stroke: blue;}}
  @keyframes colorBlack {100% {stroke: black;}}
  @keyframes colorGreen {100% {stroke: green;}}
  @media (max-height: 888px),(max-width: 1280px) {
    &>*{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3rem;
      height: 3rem;
      margin: 1rem;
      cursor: pointer;
    }
    &>*>:first-child{
      position: absolute;
      width: 3rem;
      height: 3rem;
      animation: threeBorder 1s ease-in-out forwards;
      fill: none;
      stroke-dasharray: 37;
      transition: all .2s ease-in-out;
    }
    &>*:hover>:first-child{
      fill: #fff;
      stroke-width: 5rem;
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
      width: 3rem;
      height: 3rem;
      color: white;
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0.3rem;
    }
    &>:nth-child(2)>:nth-child(2){
      fill: yellow;
      width: 3rem;
      height: 3rem;
      font-size: 1rem;
      &>*{
        width: 1rem;
        height: 1rem;
      }
    }
    &>:nth-child(2):hover>:nth-child(2){
      fill: black;
      width: 3rem;
      height: 3rem;
    }
  
    &>:nth-child(5)>:nth-child(2){
      margin: 0.3rem 0 0 0.05rem;
      height: 1.4rem;
      width: 1.4rem;
      fill: white;
    }
    &>:nth-child(5):hover>:nth-child(2){
      fill: black;
    }
  }
`

function Contact({maxPage}){
  const [isModalOpen,setIsModalOpen] = useState(false);
  const iconContainerRef = useRef();

  return(
    <Container>
      <div><Name className={maxPage>7? "render": null}>장용민</Name></div>
      <TypingText maxPage={maxPage}>
        <div>Frontend Developer</div>
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