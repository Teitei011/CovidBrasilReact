import {Link } from "react-router-dom";
import styled from "styled-components";


const AppContainer = styled.div`
  text-align: center;
  background-color: #282c34;
  display: grid;
  grid-template-rows: repeat(auto-fill);
  font-size: 15px;
  color: white;
  height: 100vh;
`;

const Error = () =>{
    return (
        <AppContainer>
                There is nothing here, please go to the <Link to="/">Home Page</Link>
        </AppContainer>
    )
}

export default Error;