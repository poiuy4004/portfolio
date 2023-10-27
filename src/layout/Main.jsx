
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.main`
  position: fixed;
  top: 10%; bottom: 10%; left: 1%; right: 1%;
  width: 98%; height: 80%;
  background-color: white;
`
const GameContainer = styled.canvas`

`
// const Yongmin = styled.

function Main(){
  const canvasRef = useRef(null);

  useEffect(()=>{
    let canvas = canvasRef.current;
    let context = canvas.getContext("2d");
    canvas.width = window.innerWidth*0.98;
    canvas.height = window.innerHeight*0.8;

    let x = 50;
    let y = 50;

    function ball(a,b){
      context.beginPath();
      context.arc(a, b, 20, 0, Math.PI * 2);
      context.fillStyle = 'blue';
      context.fill();
      context.closePath();
    }
    function animationStart(){
      requestAnimationFrame(animationStart);

      context.clearRect(0, 0, canvas.width, canvas.height);
      ball(x,y);
      x++;
      y++;
    }
    animationStart();
  },[])

  return(
    <Container>
      <GameContainer ref={canvasRef}>

      </GameContainer>
    </Container>
  )
}
export default Main;