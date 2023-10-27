
import styled from "styled-components";

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0; right: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  text-align: center;
  background-color: green;
  padding: 1%;
`

function Footer(){
  return(
    <Container>
      <div>
        <strong>📞 Mobile</strong>
        <div>010-7184-2594</div>
      </div>
      <a href="mailto:poiuy4004@naver.com" target="_blank" rel="noreferrer">
        <strong>📩 E-mail</strong>
        <div>poiuy4004@naver.com</div>
      </a>
      <a href="https://github.com/poiuy4004" target="_blank" rel="noreferrer">
        <strong>💻 Github</strong>
        <div>https://github.com/poiuy4004</div>
      </a>
      <a href="https://kkamjang.tistory.com" target="_blank" rel="noreferrer">
        <strong>✍🏻 Blog</strong>
        <div>https://kkamjang.tistory.com</div>
      </a>
      <div>
        <strong>🔎 Discord</strong>
        <div>433578902217162753</div>
      </div>
    </Container>
  )
}
export default Footer;