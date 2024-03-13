
import { useState } from "react";
import styled from "styled-components";
import kakaoQRPng from "../assets/kakaoQR.png";

const Container = styled.section`
  height: ${20*45}px; width: ${10*45}px;
  background-color: black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: center no-repeat url("https://png.pngtree.com/thumb_back/fh260/background/20230316/pngtree-heaven-gate-ladder-background-image_1948845.jpg");
  background-color: gray;
  & a{color: white;}
  @media (max-height: 888px),(max-width: 1280px) {
    height: 100%; width: 100%;
  }
`
const Header = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 20px 24px;
  &>:first-child{justify-self: flex-start; font-size: 2rem; cursor: pointer;}
`
const IconBox = styled.div`
  display: flex;
  &>*{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 14px;
    height: 30px; width: 30px;
    border: solid 1px white; border-radius: 50px;
    cursor: pointer;
  }
  &>:nth-child(3){color: yellow;}
`

const Profile = styled.div`
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  &>img{
    height: 100px; width: 100px;
    border-radius: 50px;
    margin-bottom: 14px;
  }
`

const Footer = styled.div`
  height: 140px;
  border-top: solid 1px rgba(255,255,255,0.5);
  margin-top: 50px;
  padding-top: 50px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  &>*{cursor: pointer;}
  &>*>i{font-size: x-large; margin-bottom: 10px;}
  &>*>div{font-size: x-small;}
`

const QRBox = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
  padding: 7rem 0 0;
  &>img{
    height: 390px;
    width: 390px;
  }
  &>button{
    padding: 10px 20px;
    font-size: 30px;
    font-weight: 700;
    background-color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  &>button:hover{background-color: ivory; color: gray; border: none; border-radius: 10px;}
  &>button:active{background-color: gray; color: white; border: none; border-radius: 10px;}
`

function KakaoTalk({setIsModalOpen}){
  const [isQROpen,setIsQROpen] = useState(false);
  return(
    <Container onClick={e=>e.stopPropagation()}>
      <Header>
        <div onClick={()=>setIsModalOpen(false)}>×</div>
        <IconBox>
          <i class="fa-solid fa-gift"></i>
          <a href="https://toss.me/kjbank" target="_blank" class="fa-solid fa-won-sign"></a>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </IconBox>
      </Header>
      <div>
        <Profile>
          <img src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg" />
          <div>장용민</div>
        </Profile>
        <Footer>
          <a href="https://open.kakao.com/o/sjgSKmJf" target="_blank" rel="noreferrer noopener">
            <i class="fa-solid fa-comment"></i>
            <div>1:1채팅</div>
          </a>
          <a href="tel:010-7184-2594" target="_blank" rel="noreferrer noopener">
            <i class="fa-solid fa-phone"></i>
            <div>통화하기</div>
          </a>
          <div onClick={()=>setIsQROpen(true)}>
            <i class="fa-solid fa-video"></i>
            <div>페이스톡</div>
          </div>
        </Footer>
      </div>
      {isQROpen?
        <QRBox>
          <img src={kakaoQRPng} />
          <button onClick={()=>setIsQROpen(false)}>QR 닫기</button>
        </QRBox>
      : null}
    </Container>
  )
}
export default KakaoTalk;