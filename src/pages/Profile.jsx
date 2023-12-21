import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2b2d2f;
  font-size: 32px;
  &>*{position: absolute;}
  &>:nth-child(2){top: 91%; left: 20%; animation:}
  &>:nth-child(3){top: 34%; left: 63%; animation: cloudText 5s ease-in forwards;}
  &>:nth-child(4){top: 54%; left: 90%; animation:}
  &>:nth-child(5){top: 75%; left: 40%; animation:}
  &>:nth-child(6){top: 18%; left: 89%; animation:}
  &>:nth-child(7){top: 25%; left: 53%; animation: cloudText 5s ease-in forwards;}
  &>:nth-child(8){top: 33%; left: 4%; animation: cloudText 5s ease-in forwards;}
  &>:nth-child(9){top: 62%; left: 20%; animation:}
  &>:nth-child(10){top: 37%; left: 27%; animation:}
  &>:nth-child(11){top: 6%; left: 70%; animation:}
  &>:nth-child(12){top: 84%; left: 84%; animation:}
  &>:nth-child(13){top: 3%; left: 14%; animation:}
  @keyframes cloudText {100%{font-size: 10px; color: gray;}}
  @media (max-height: 888px),(max-width: 1280px) {
    &>div{display:none;}
  }
`
const Name = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7rem;
  &>:first-child{
    margin-right: 1rem;
    animation: moveToLeft 1.2s infinite;
    @keyframes moveToLeft {50%{transform: translateX(-7rem) scale(140%); margin-right: 3rem;}}
  }
  &>strong{
    animation: scaleUp 1.2s infinite;
    @keyframes scaleUp {50%{transform: scale(180%)}}
  }
  &>:last-child{
    margin-left: 1rem;
    animation: moveToRight 1.2s infinite;
    @keyframes moveToRight {50%{transform: translateX(8rem) scale(140%); margin-left: 4rem;}}
  }
  @media (max-height: 888px),(max-width: 1280px) {
    font-size: 3rem;
    @keyframes moveToLeft {50%{transform: translateX(-2rem) scale(140%); margin-right: 3rem;}}
    @keyframes moveToRight {50%{transform: translateX(2rem) scale(140%); margin-left: 4rem;}}
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