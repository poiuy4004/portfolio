
import styled from "styled-components";

import dragon from "../assets/dragon.png"

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0; right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: green;
  &>h1{
    padding: 1%;
  }
`

function Header(){
  return(
    <Container>
      <img src={dragon} alt="logo" width="3%" />
      <h1>장용민 포트폴리오 (GAME TYPE)</h1>
      <img src={dragon} alt="logo" width="3%" />
    </Container>
  )
}
export default Header;