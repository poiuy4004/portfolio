import styled from "styled-components";

import skills from "../assets/skills";

const Container = styled.section`
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  color: black;
  &>div{padding-top: 8rem;}
  &>div:nth-of-type(1){opacity: 0; animation: ${props=>props.renderTopPageButton? "renderOne 2s ease-in forwards;" : null}}
  &>div:nth-of-type(2){opacity: 0; animation: ${props=>props.renderTopPageButton? "renderTwo 2s ease-in forwards;" : null}}
  &>div:nth-of-type(3){opacity: 0; animation: ${props=>props.renderTopPageButton? "renderThree 2s ease-in forwards;" : null}}
  &>div:nth-of-type(4){opacity: 0; animation: ${props=>props.renderTopPageButton? "renderFour 2s ease-in forwards;" : null}}
  @keyframes renderOne {25%{opacity: 1;} 100%{opacity: 1;}}
  @keyframes renderTwo {50%{opacity: 1;} 100%{opacity: 1;}}
  @keyframes renderThree {75%{opacity: 1;} 100%{opacity: 1;}}
  @keyframes renderFour {100%{opacity: 1;}}
`
const Title = styled.h1`
  position: absolute;
  color: white;
  font-size: 5rem;
  text-shadow: 0.25rem 0.15rem 0 rgba(255,127,0,0.3);
`
const Box = styled.div`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color:white;
  border-radius: 20px;
  border-right: solid 0.5rem orange;
  border-bottom: solid 0.3rem orange;
  box-shadow: 0.5rem 0.3rem 0.7rem rgba(255,127,0,0.5), 0 0.5rem 0.5rem rgba(255,127,0,0.5);
  &>h2{font-size: 3rem;}
  &>span{margin: 0.5rem 0 0.5rem; border: solid 12px orange; border-bottom-right-radius: 50px;}
`
const Skill = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  &>img{margin-right: 1rem;}
  &>text{font-size: 2rem;}
`

function SkillStack({renderTopPageButton}){
  return(
    <Container renderTopPageButton={renderTopPageButton}>
      <Title>Skill</Title>
      <div>
        <Box>
          <h2>Frontend</h2>
          <span />
          {skills.frontend.map(front=>(
            <Skill>
              <img src={front.img} height="50rem" width="50rem" /><text>{front.name}</text>
            </Skill>
          ))}
        </Box>
      </div>
      <div>
        <Box>
          <h2>Backend</h2>
          <span />
          {skills.backend.map(back=>(
            <Skill>
              <img src={back.img} height="50rem" width="50rem" /><text>{back.name}</text>
            </Skill>
          ))}
        </Box>
        <Box>
          <h2>Native</h2>
          <span />
          {skills.native.map(native=>(
            <Skill>
              <img src={native.img} height="50rem" width="50rem" /><text>{native.name}</text>
            </Skill>
          ))}
        </Box>
        <Box>
          <h2>CrossPlatform</h2>
          <span />
          {skills.crossPlatform.map(crossPlatform=>(
            <Skill>
              <img src={crossPlatform.img} height="50rem" width="50rem" /><text>{crossPlatform.name}</text>
            </Skill>
          ))}
        </Box>
      </div>
      <div>
        <Box>
          <h2>Communication</h2>
          <span />
          {skills.communication.map(communication=>(
            <Skill>
              <img src={communication.img} height="50rem" width="50rem" /><text>{communication.name}</text>
            </Skill>
          ))}
        </Box>
        <Box>
          <h2>Design</h2>
          <span />
          {skills.design.map(design=>(
            <Skill>
              <img src={design.img} height="50rem" width="50rem" /><text>{design.name}</text>
            </Skill>
          ))}
        </Box>
      </div>
      <div>
        <Box>
          <h2>Others</h2>
          <span />
          {skills.Others.map(other=>(
            <Skill>
              <img src={other.img} height="50rem" width="50rem" /><text>{other.name}</text>
            </Skill>
          ))}
        </Box>
      </div>
    </Container>
  )
}
export default SkillStack;