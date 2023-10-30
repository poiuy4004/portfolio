
import { useEffect, useRef, useState } from "react";

import styled from "styled-components";

import backgroundJpg from "../assets/backCA.jpg"

import dragonPng from "../assets/dragon.png"
import fireballPng from "../assets/fireball1.png"

import boxPng from "../assets/box.png"

import manualPng from "../assets/manualBack.png"

const Container = styled.main`
  position: fixed;
  top: 10%; bottom: 10%; left: 1%; right: 1%;
  width: 98%; height: 80%;
  background-image: url(${backgroundJpg});
  background-repeat: repeat-x;
`
const GameContainer = styled.canvas`
`
const ManualContainer = styled.article`
  display: flex;
  justify-content: center;
  position: fixed;
  top: ${window.innerHeight*0.45}px;
  left: ${window.innerWidth*0.14}px;
  width: 30%;
  height: 30%;
  background-image: url(${manualPng});
  background-size: contain;
  background-repeat: no-repeat;
`
const WasdBox = styled.section`
  margin: 10% 0% 20% 25%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr);
	place-items: center;
	grid-gap: 10%;

  &>span:nth-child(1){
	  grid-column: 2;
	  grid-row: 1;
  }
  &>span:nth-child(2) {
    grid-column: 1;
    grid-row: 2;
  }
  &>span:nth-child(3) {
    grid-column: 2;
    grid-row: 2;
  }
  &>span:nth-child(4) {
    grid-column: 3;
    grid-row: 2;
  }
`
const FBox = styled.section`
  margin: 15% 0% 20% 35%;
`
const Wasdf = styled.span`
  font-family: sans-serif;
  font-size: 18px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 3px;
  width: 48px;
  height: 45px;
  border-radius: 5px;
  background-color: #fff;
  color: #444;
  border-top: 1px solid $cccccc;
  box-shadow: 0px 3px 0px 2px #cccccc;
  @keyframes pressKey {
    100%{
      transform: scale(1.1);
    }
  }
  ${props=>props.press
  ? "animation: pressKey 0.3s infinite;"
  : "animation: none;"
  }
`
const ManualDescription = styled.section`
  margin: 10% 20% 0% 10%;
  color: white;
  font-size: xx-large;
  white-space: break-spaces;
  text-align: center;
`

function Main(){
  const canvasRef = useRef(null);
  const [wasd,setWasd] = useState(true)
  const [press,setPress] = useState({w: false,a: false,s: false,d: false,f: false})
  let x = 0
  let y = 50;

  function interaction(eventKey){
    if(eventKey==="w"){
      setPress({w: true,a: false,s: false,d: false,f: false})
    }
    else if(eventKey==="a"){
      setPress({w: false,a: true,s: false,d: false,f: false})
    }
    else if(eventKey==="s"){
      setPress({w: false,a: false,s: true,d: false,f: false})
    }
    else if(eventKey==="d"){
      setPress({w: false,a: false,s: false,d: true,f: false})
    }

    if(window.innerWidth*0.03>window.innerWidth*0.58-x-300&&window.innerWidth*0.58-x-300>10){
      setWasd(false)
      if(eventKey==="f"){
        setPress({w: false,a: false,s: false,d: false,f:true})
      }
    }
    else{
      setWasd(true)
    }
  }

  useEffect(()=>{
    let canvas = canvasRef.current;
    canvas.width = window.innerWidth*0.98;
    canvas.height = window.innerHeight*0.8;

    let map = canvas.getContext("2d")
    let boxImage = new Image()
    boxImage.src=boxPng
    function drawMap(){
      map.drawImage(boxImage,window.innerWidth*0.58-x,window.innerHeight*0.07,400,350)
    }
    function mapMove(eventKey){
      if(eventKey==="a"&&x>window.innerWidth*-3){
        x=x-0.05
      }
      else if(eventKey==="d"&&x<window.innerWidth*0.98*5){
        x=x+0.05
      }
    }

    let dragon = canvas.getContext("2d");
    let dragonImage = new Image();
    dragonImage.src = dragonPng;
    function drawDragon(){
      dragon.drawImage(dragonImage,50,y,250,250)
    }
    function dragonMove(eventKey){
      if(eventKey==="s"&&y<canvas.height*0.59){
        y=y+0.05
      }
      else if(eventKey==="w"&&y>50){
        y=y-0.05
      }
    }
    let fireballImage = new Image();
    fireballImage.src = fireballPng;
    function fireball(){
      dragon.drawImage(fireballImage,325,y,400,250)
    }

    function animationStart(){
      requestAnimationFrame(animationStart);

      dragon.clearRect(0, 0, canvas.width, canvas.height);

      window.addEventListener("keydown",e=>{
        mapMove(e.key.toLowerCase())
        dragonMove(e.key.toLowerCase())
      });

      drawMap();

      drawDragon();
      fireball();
    }
    animationStart();

    window.addEventListener("keydown",e=>{
      interaction(e.key.toLowerCase())
    })
    window.addEventListener("keyup",()=>{
      setPress({w: false,a: false,s: false,d: false,f: false})
    })
  },[])

  return(
    <Container pressA={press.a} pressD={press.d}>
      <GameContainer
        ref={canvasRef}
      >
      </GameContainer>
      <ManualContainer>
        {wasd
        ? <WasdBox>
            <Wasdf press={press.w}>W</Wasdf>
            <Wasdf press={press.a}>A</Wasdf>
            <Wasdf press={press.s}>S</Wasdf>
            <Wasdf press={press.d}>D</Wasdf>
          </WasdBox>
        : <FBox>
            <Wasdf press={press.f}>F</Wasdf>
          </FBox>
        }
        <ManualDescription>
        {wasd
        ? "Press\nWASD\nto move"
        : "Press\nF\nto interact"
        }
        </ManualDescription>
      </ManualContainer>
      
    </Container>
  )
}
export default Main;

// https://fe-developers.kakaoent.com/2022/220830-simple-canvas-game/
// https://www.youtube.com/watch?v=7TXGvVblfLs
// https://www.pngwing.com/