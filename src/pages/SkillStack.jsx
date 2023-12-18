import styled from "styled-components";

import skills from "../assets/skills";

const Container = styled.section`
  padding-top: 123px;
  display: flex;
  justify-content: center;
  color: black;
  &>div{padding-top: 147px;}
  &>div:nth-of-type(1){opacity: 0; animation: ${props=>props.renderTopPageButton? "renderOne 3s ease-in forwards;" : null}}
  &>div:nth-of-type(2){opacity: 0; animation: ${props=>props.renderTopPageButton? "renderTwo 3s ease-in forwards;" : null}}
  &>div:nth-of-type(3){opacity: 0; animation: ${props=>props.renderTopPageButton? "renderThree 3s ease-in forwards;" : null}}
  &>div:nth-of-type(4){opacity: 0; animation: ${props=>props.renderTopPageButton? "renderFour 3s ease-in forwards;" : null}}
  @keyframes renderOne {25%{opacity: 1;} 100%{opacity: 1;}}
  @keyframes renderTwo {50%{opacity: 1;} 100%{opacity: 1;}}
  @keyframes renderThree {75%{opacity: 1;} 100%{opacity: 1;}}
  @keyframes renderFour {100%{opacity: 1;}}
`
const Title = styled.h1`
  position: absolute;
  color: white;
  font-size: 100px;
  text-shadow: 5px 3px 0 rgba(255,127,0,0.3);
`
const Box = styled.div`
  margin: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  background-color:white;
  border-radius: 20px;
  border-right: solid 12px orange;
  border-bottom: solid 10px orange;
  box-shadow: 7px 5px 14px rgba(255,127,0,0.5), 0 10px 10px rgba(255,127,0,0.5);
  &>h2{font-size: xxx-large;}
  &>span{margin: 7px 0 14px 0; border: solid 12px orange; border-bottom-right-radius: 50px;}
`
const Skill = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  &>img{margin-right: 20px;}
  &>text{font-size: xxx-large;}
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
              <img src={front.img} height="70px" width="70px" /><text>{front.name}</text>
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
              <img src={back.img} height="70px" width="70px" /><text>{back.name}</text>
            </Skill>
          ))}
        </Box>
        <Box>
          <h2>Native</h2>
          <span />
          {skills.native.map(native=>(
            <Skill>
              <img src={native.img} height="70px" width="70px" /><text>{native.name}</text>
            </Skill>
          ))}
        </Box>
        <Box>
          <h2>CrossPlatform</h2>
          <span />
          {skills.crossPlatform.map(crossPlatform=>(
            <Skill>
              <img src={crossPlatform.img} height="70px" width="70px" /><text>{crossPlatform.name}</text>
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
              <img src={communication.img} height="70px" width="70px" /><text>{communication.name}</text>
            </Skill>
          ))}
        </Box>
        <Box>
          <h2>Design</h2>
          <span />
          {skills.design.map(design=>(
            <Skill>
              <img src={design.img} height="70px" width="70px" /><text>{design.name}</text>
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
              <img src={other.img} height="70px" width="70px" /><text>{other.name}</text>
            </Skill>
          ))}
        </Box>
      </div>
    </Container>
  )
}
export default SkillStack;