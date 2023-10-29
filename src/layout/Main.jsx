
import { useEffect, useRef, useState } from "react";

import styled from "styled-components";

import dragonPng from "../assets/dragon.png"
import backgroundJpg from "../assets/backCA.jpg"


const Container = styled.main`
  position: fixed;
  top: 10%; bottom: 10%; left: 1%; right: 1%;
  width: 98%; height: 80%;
  background-image: url(${backgroundJpg});
`
const GameContainer = styled.canvas`

`

function Main(){
  const canvasRef = useRef(null);

  useEffect(()=>{
    alert("현재 보시는 사이트는 크롬(Chrome)브라우저의\nPC버전에서 사용하시기를 권장합니다.")
    let canvas = canvasRef.current;
    canvas.width = window.innerWidth*0.98;
    canvas.height = window.innerHeight*0.8;

    let dragon = canvas.getContext("2d");
    let dragonImage = new Image();
    dragonImage.src=dragonPng;
    let y = 50;
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

    let map = canvas.getContext("2d")
    let x = 0
    function drawMap(){
      map.fillStyle="rgba(255, 255, 255, 0)"
      map.fillRect(x,0,window.innerWidth*0.98*5,window.innerHeight*0.8)
    }
    function mapMove(eventKey){
      if(eventKey==="a"&&x>0){
        x=x-0.05
      }
      else if(eventKey==="d"&&x<window.innerWidth*0.98*5){
        x=x+0.05
      }
    }


    function animationStart(){
      requestAnimationFrame(animationStart);

      dragon.clearRect(0, 0, canvas.width, canvas.height);

      window.addEventListener("keydown",e=>{
        dragonMove(e.key)
        mapMove(e.key)
      });
      drawDragon();
      drawMap();
    }
    animationStart();
  },[])

  return(
    <Container>
      <GameContainer
        ref={canvasRef}
      >
      </GameContainer>
    </Container>
  )
}
export default Main;

// https://fe-developers.kakaoent.com/2022/220830-simple-canvas-game/
// https://www.youtube.com/watch?v=7TXGvVblfLs