import styled from "styled-components";

const Container = styled.section`
  opacity: ${props=>props.isPage>props.idx+1? 1 : 0};
  padding: 5% 15%;
  transition: 2s;
  &>div{
    padding: 1rem 5rem 0;
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
`
const Description = styled.p`
  white-space: pre;
  margin-bottom: 2rem;
`
const Box = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
`
const ImgBox = styled.div`
  height: 33rem;
  width: 30rem;
  background: url(${props=>props.backImage}) center 0px / cover no-repeat;
  &>img{
    max-height: 555rem;
    max-width: 22rem;
  }
`
const DetailDescription = styled.p`
  white-space: pre;
  line-height: 2rem;
  font-size: 1.2rem;
  font-weight: 700;
`
const MyTask = styled.p`
  padding: 0 5rem;
  text-align: left;
  white-space: pre;
  font-size: 1rem;
  font-weight: 700;
  &>:first-child{
    margin: 0.5rem 0 0.2rem 1rem;
  }
`
const Stack = styled.div`
  padding: 0 5rem;
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
`
const Skill = styled.div`
  margin: 0.1rem;
  padding: 0.1rem 0.5rem;
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

function Project({isPage,idx,project}){
    return(
      <Container isPage={isPage} idx={idx}>
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
                {project.myTask}
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