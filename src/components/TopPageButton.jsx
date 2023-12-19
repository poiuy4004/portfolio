import styled from "styled-components";

import { ReactComponent as ArrowTop } from "../assets/ArrowTop.svg";

const Container = styled.div`
  height: 5rem; width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover>:first-child{
    animation: beat .7s infinite;
    @keyframes beat {
      0%{transform: scale(90%) translateY(20%);}
      100%{transform: scale(120%) translateY(-10%);}
    }
  }
  &>:last-child{
    position: absolute;
    height: 0; width: 0;
    border-radius: 50%;
  }
  &:hover>:last-child{
    animation: whiteOver 1s infinite;
    @keyframes whiteOver {
      0%{background-color: rgba(255, 255, 255, 1);}
      100%{background-color: rgba(255, 255, 255, 0.1);height: 5rem; width: 5rem;}
    }
  }
`

function TopPageButton(){
  return(
    <Container>
      <ArrowTop />
      <div />
    </Container>
  )
}
export default TopPageButton;