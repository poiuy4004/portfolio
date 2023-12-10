import styled from "styled-components";

import { ReactComponent as ArrowBottom } from "../assets/ArrowBottom.svg";

const Container = styled.div`
  position: absolute;
  bottom: .5em;
  width: 100%;
  display: flex;
  justify-content: center;
`
const Box = styled.div`
visibility: visible;
  position: absolute;
  bottom: .5em;
  height: 2em; width: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover>:first-child{
    animation: beat .7s infinite;
    @keyframes beat {
      0%{transform: scale(90%) translateY(-20%);}
      100%{transform: scale(120%) translateY(10%);}
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
      0%{background-color: rgba(255, 255, 255, 1);height: 0.01em; width: 0.01em;}
      100%{background-color: rgba(255, 255, 255, 0.1);height: 2em; width: 2em;}
    }
  }
`

function NextPageButton(){
  return(
    <Container>
      <Box>
        <ArrowBottom />
        <div />
      </Box>
    </Container>
  )
}
export default NextPageButton;