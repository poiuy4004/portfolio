import styled from "styled-components";

const Container = styled.section`
  opacity: ${props=>props.maxPage>props.idx+1? 1 : 0};
  padding: 5% 10%;
  transition: 2s;
  & *{white-space: break-spaces;}
  &>div{
    padding: 1% 3% 0;
    height: 100%; width: 100%;
    color: black;
    text-align: center;
    background-color: rgba(234, 234, 234, 1);
    border-radius: 20px;
    border-right: solid 0.5rem ${props=>props.idx==0? "rgb(14,120,223)"
                                        : props.idx==1? "rgb(37,161,142)"
                                        : props.idx==2? "rgb(255,166,0)"
                                        : props.idx==3? "rgb(27,117,208)"
                                        : props.idx==4? "rgb(255,215,0)"
                                        : "black"
                                        };
    border-bottom: solid 0.3rem ${props=>props.idx==0? "rgb(14,120,223)"
                                        : props.idx==1? "rgb(37,161,142)"
                                        : props.idx==2? "rgb(255,166,0)"
                                        : props.idx==3? "rgb(27,117,208)"
                                        : props.idx==4? "rgb(255,215,0)"
                                        : "black"
                                        };
    box-shadow: 0.5rem 0.5rem 0.5rem 0.3rem ${props=>props.idx==0? "rgba(14,120,223,0.5)"
                                                    : props.idx==1? "rgba(37,161,142,0.5)"
                                                    : props.idx==2? "rgba(255,166,0,0.5)"
                                                    : props.idx==3? "rgba(27,117,208,0.5)"
                                                    : props.idx==4?"rgb(255,215,0)"
                                                    : "black"
                                                    };
    &>h3{
      text-shadow: 0 0 5px ${props=>props.idx==0? "rgb(14,120,223)"
                                    : props.idx==1? "rgb(37,161,142)"
                                    : props.idx==2? "rgb(255,166,0)"
                                    : props.idx==3? "rgb(27,117,208)"
                                    : props.idx==4?"rgb(255,215,0)"
                                    : "black"
                                    };
      font-size: 3rem;
    }
  }
  @media (max-height: 888px),(max-width: 1280px) {
    padding: 10% 7%;
    &>div{padding: 3% 3% 0;}
    &>div>h3{font-size: 2rem;}
  }
`
const Description = styled.div`
  margin-bottom: 2rem;
  @media (max-height: 888px),(max-width: 1280px) {
    display: none;
  }
`
const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-height: 888px),(max-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`
const ImgBox = styled.div`
  height: 33rem;
  width: 30rem;
  background: url(${props=>props.backImage}) center 0px / cover no-repeat;
  @media (max-height: 888px),(max-width: 1280px) {
    height: 14rem;
    width: 14rem;
    margin-bottom: 1rem;
  }
`
const DetailDescription = styled.div`
  line-height: 2rem;
  font-size: 1.2rem;
  font-weight: 700;
  @media (max-height: 888px),(max-width: 1280px) {
    font-size: 0.7rem;
    line-height: 1rem;
  }
`
const MyTask = styled.div`
  text-align: left;
  font-size: 1rem;
  font-weight: 700;
  &>:first-child{
    margin: 0.5rem 0 0.2rem 1rem;
  }
  @media (max-height: 888px),(max-width: 1280px) {
    margin: 0 0 0 24%;
    font-size: 0.5rem;
  }
`
const Stack = styled.div`
  text-align: left;
  font-size: 1rem;
  font-weight: 700;
  &>:first-child{
    margin: 0.5rem 0 0.2rem 1rem;
  }
  &>:last-child{
    display: flex;
    flex-wrap: wrap;
  }
  @media (max-height: 888px),(max-width: 1280px) {
    margin: 0 0 0 10%;
    font-size: 0.5rem;
  }
`
const Skill = styled.div`
  margin: 0.3% 0.5%;
  padding: 0.5% 3%;
  color: white;
  white-space: nowrap;
  border-radius: 14px;
  background-color: ${props=>props.idx==0? "rgb(14,120,223)"
                            : props.idx==1? "rgb(37,161,142)"
                            : props.idx==2? "rgb(255,166,0)"
                            : props.idx==3? "rgb(27,117,208)"
                            : props.idx==4? "rgb(255,215,0);"
                            : "black"
                            };
`

function Project({maxPage,idx,project}){
    return(
      <Container maxPage={maxPage} idx={idx}>
        <div>
          <h3>
            {project.title}
          </h3>
          <Description>
            {project.description}
          </Description>
          <Box>
            <ImgBox backImage={project.mainImg} style={{padding: "1rem", backgroundColor: "white",}}>
            </ImgBox>
            <div>
              <DetailDescription>{project.detailDescription}</DetailDescription>
              <MyTask>
                <div>&lt;My Task&gt;</div>
                <div>{project.myTask}</div>
              </MyTask>
              <Stack>
                <div>&lt;Stack&gt;</div>
                <div>
                  {project.stack.map(skill=>(
                    <Skill idx={idx}>{skill}</Skill>
                  ))}
                </div>
              </Stack>
            </div>
          </Box>
        </div>
      </Container> 
    )
  }
  export default Project;