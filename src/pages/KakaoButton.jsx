
import styled from "styled-components";

import Modal from "../components/Modal";
import KakaoTalk from "../components/KakaoTalk";

import { ReactComponent as KakaoTalkSvg} from "../assets/KakaoTalk.svg";
import { ReactComponent as Circle } from "../assets/Circle.svg";

import { useState } from "react";

const Container = styled.div`
  position: fixed;
  top: 1%; right: 1%;
  height: 3.5rem; width: 3.5rem;
  display: ${props=>props.maxPage==99? "flex" : "none"};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & *{position: absolute; height: 3.5rem; width: 3.5rem; font-size: 0.1rem;}
  &>:first-child{
    animation: threeBorder 1s ease-in-out forwards;
    fill: black;
    stroke-dasharray: 37;
    transition: all .2s ease-in-out;
  }
  &:hover>:first-child{
    fill: #fff;
    stroke-width: 1rem;
    transition: all .2s ease-in-out;
    animation: circleBorder 1s ease-in-out forwards, colorYellow 1s linear forwards;
  }
  &>:last-child{
    fill: yellow;
    height: 1.5rem; width: 1.5rem;
  }
  &:hover>:last-child{
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
`

function KakaoButton({maxPage}){
  const [isModalOpen,setIsModalOpen] = useState(false);
  return(
    <Container
      maxPage={maxPage}
      onClick={()=>{
        maxPage==99
        ? setTimeout(()=>setIsModalOpen(true),1004)
        : setIsModalOpen(true)
      }}
    >
      <Circle />
      <KakaoTalkSvg />
      {isModalOpen
      ? <Modal setIsModalOpen={setIsModalOpen} content={<KakaoTalk setIsModalOpen={setIsModalOpen} />}/>
      : null}
    </Container>
  )
}
export default KakaoButton;