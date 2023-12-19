import styled from "styled-components"

const Snow = styled.div`
  color: #fff;
  font-size: 1rem;
  font-family: Arial;
  text-shadow: 0 0 1px #000;
  position: fixed;
  top: -5%;
  user-select: none;
  cursor: default;
  animation-name: snowFall, snowShake;
  animation-timing-function: linear,ease-in-out;
  animation-iteration-count: infinite,infinite;
  animation-play-state: running,running;
  &:nth-of-type(1){
    left: 20%;
    animation-delay: 6s,.5s;
    animation-duration: 10s,3s;
  }
  &:nth-of-type(2){
    left: 30%;
    animation-delay: 4s,.2s;
    animation-duration: 7s,2s;
  }
  &:nth-of-type(3){
    left: 40%;
    animation-delay: 2s,.2s;
    animation-duration: 8s,3s;
  }
  &:nth-of-type(4){
    left: 50%;
    animation-delay: 8s,.3s;
    animation-duration: 4s,2s;
  }
  &:nth-of-type(5){
    left: 60%;
    animation-delay: 6s,.2s;
    animation-duration: 6s,5s;
  }
  &:nth-of-type(6){
    left: 70%;
    animation-delay: 2.5s,.1s;
    animation-duration: 7s,3s;
  }
  &:nth-of-type(7){
    left: 80%;
    animation-delay: 1s,.0s;
    animation-duration: 8s,2s;
  }
  &:nth-of-type(8){
    left: 90%;
    animation-delay: 3s,.1.5s;
    animation-duration: 9s,3s;
  }
  &:nth-of-type(9){
    left: 5%;
    animation-delay: 3s,.1s;
    animation-duration: 10s,8s;
  }
  &:nth-of-type(10){
    left: 95%;
    animation-delay: 6s,.1s;
    animation-duration: 7s,4s;
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
    <div aria-hidden="true" style={{position: 'absolute',zIndex: '-999',}}>
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
