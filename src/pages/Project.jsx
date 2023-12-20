import styled from "styled-components";

const Container = styled.section`
  padding: 5% 15%;
  &>div{
    height: 100%; width: 100%;
    color: black;
    text-align: center;
    background-color: rgba(234, 234, 234, 1);
    border-radius: 20px;
    border-right: solid 0.5rem orange;
    border-bottom: solid 0.3rem orange;
    box-shadow: 0.5rem 0.3rem 0.7rem rgba(255,127,0,0.5), 0 0.5rem 0.5rem rgba(255,127,0,0.5);
  }
`
const Box = styled.div`
  display: flex;
`

function Project({isPage,idx,project}){
    return(
      <Container>
        <div>
          <h3 >
            {project.title}
          </h3>
          <p>
            {project.description}
          </p>
          <Box>
            <div>
              <img src={project.mainImg} height="555rem" />
            </div>
            <div>
              <p></p>
            </div>
          </Box>
        </div>
      </Container> 
    )
  }
  export default Project;