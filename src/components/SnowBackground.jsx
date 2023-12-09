import styled from "styled-components"

const Snow = styled.div`
  color: #fff;
  font-size: 1em;
  font-family: Arial;
  text-shadow: 0 0 1px #000;
  position: fixed;
  top: -10%;
  z-index: 9999;
  user-select: none;
  cursor: default;
  animation-name: snowFall, snowShake;
  animation-duration: 10s,3s;
  animation-timing-function: linear,ease-in-out;
  animation-iteration-count: infinite,infinite;
  animation-play-state: running,running;
  &:nth-of-type(1){
    left: 20%;
    animation-delay: 6s,.5s;
  }
  &:nth-of-type(2){
    left: 30%;
    animation-delay: 4s,.2s;
  }
  &:nth-of-type(3){
    left: 40%;
    animation-delay: 2s,.2s;
  }
  &:nth-of-type(4){
    left: 50%;
    animation-delay: 8s,.3s;
  }
  &:nth-of-type(5){
    left: 60%;
    animation-delay: 6s,.2s;
  }
  &:nth-of-type(6){
    left: 70%;
    animation-delay: 2.5s,.1s;
  }
  &:nth-of-type(7){
    left: 80%;
    animation-delay: 1s,.0s;
  }
  &:nth-of-type(8){
    left: 90%;
    animation-delay: 3s,.1.5s;
  }
  &:nth-of-type(9){
    left: 5%;
    animation-delay: 3s,.1s;
  }
  &:nth-of-type(10){
    left: 95%;
    animation-delay: 6s,.1s;
  }
  @keyframes snowFall {
    0% {
      top: -10%;
    }
    100% {
      top: 100%;
    }
  }
  @keyframes snowShake {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(80px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`

function SnowBackground(){
  return(
    <div aria-hidden="true">
      <Snow>❅</Snow>
      <Snow>❅</Snow>
      <Snow>❆</Snow>
      <Snow>❄</Snow>
      <Snow>❅</Snow>
      <Snow>❆</Snow>
      <Snow>❄</Snow>
      <Snow>❅</Snow>
      <Snow>❆</Snow>
      <Snow>❄</Snow>
    </div>
  )
}
export default SnowBackground;
