import styled from "styled-components";

const Container = styled.div`
  height: 100%; width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2b2d2f;
  transition: color 10s ease-in-out;
  &>*{position: absolute;}
  &>:nth-child(2){top: 34%; left: 63%;}
  &>:nth-child(3){top: 91%; left: 20%; animation: cloudText 30s forwards;}
  &>:nth-child(4){top: 54%; left: 90%;}
  &>:nth-child(5){top: 25%; left: 53%;}
  &>:nth-child(6){top: 18%; left: 89%;}
  &>:nth-child(7){top: 75%; left: 40%; animation: cloudText 30s forwards;}
  &>:nth-child(8){top: 33%; left: 4%; animation: cloudText 30s forwards;}
  &>:nth-child(9){top: 62%; left: 20%;}
  &>:nth-child(10){top: 37%; left: 27%;}
  &>:nth-child(11){top: 6%; left: 70%;}
  &>:nth-child(12){top: 84%; left: 84%;}
  &>:nth-child(13){top: 3%; left: 14%;}
  @keyframes cloudText {100%{color: gray;}}
`
const Name = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: xxx-large;;
  &>:first-child{
    margin-right: 0.1em;
    animation: moveToLeft 1s infinite;
    @keyframes moveToLeft {50%{transform: translateX(-50%) scale(150%); margin-right: 2em;}}
  }
  &>strong{
    animation: scaleUp 1s infinite;
    @keyframes scaleUp {50%{transform: scale(200%)}}
  }
  &>:last-child{
    margin-left: 0.1em;
    animation: moveToRight 1s infinite;
    @keyframes moveToRight {50%{transform: translateX(50%) scale(150%); margin-left: 2em;}}
  }
`


function Profile(){
    return(
      <Container>
        <Name><div>{"<"} </div><strong>장용민</strong><div>{"/>"}</div></Name>
        <div>개발자?</div>
        <div>백엔드?</div>
        <div>노력파?</div>
        <div>웹개발?</div>
        <div>디자인?</div>
        <div>천재?</div>
        <div>SM?</div>
        <div>앱개발?</div>
        <div>프론트엔드?</div>
        <div>서버?</div>
        <div>SI?</div>
        <div>기획?</div>
      </Container>
    )
  }
  export default Profile;