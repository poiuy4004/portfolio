import { createPortal } from "react-dom";

import styled from "styled-components"

const Container = styled.article`
  position: fixed;
  top: 0; bottom: 0; left: 0; right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.3);
`

function Modal({setIsModalOpen,content}){

  return(
    <>
    {createPortal(
      <Container onClick={()=>setIsModalOpen(false)}>
          {content}
      </Container>,
      document.body
    )}
    </>
  )
}
export default Modal;