
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
      if(eventKey==="s"&&y<canvas.height*0.7){
        y=y+0.05
      }
      else if(eventKey==="w"&&50<y){
        y=y-0.05
      }
    }

    let map = canvas.getContext("2d")
    function drawMap(){
      map.fillStyle="rgba(255, 255, 255, 0)"
      map.fillRect(0,0,window.innerWidth*0.98,window.innerHeight*0.8)
    }



    function animationStart(){
      requestAnimationFrame(animationStart);

      dragon.clearRect(0, 0, canvas.width, canvas.height);

      window.addEventListener("keydown",e=>{
        dragonMove(e.key)
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