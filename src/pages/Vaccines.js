import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

import styled from "styled-components";

// Dados estáticos

import cidades from "../data/cidades";
import estados from "../data/estados";

// My Components
import CovidCardInfo from "../components/covidCardInfo";
import GraphComponents from "../components/GraphsComponent";
import Header from "../components/Header";

import SelectComponent from "../components/searchSelectComponent";

import fetchData from "../tools/getGithubData";


const AppContainer = styled.div`
  text-align: center;
  background-color: #282c34;
  display: grid;
  grid-template-rows: repeat(auto-fill);
  font-size: 22px;
  color: white;
  height: 100vh;

  h5{
    font-size: 18px;
  }
`;

const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  display: grid;
  grid-template-rows: repeat(auto-fill);
  font-size: 15px;
  color: white;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fb3554;
  border-radius: 2rem;
  border: 2px;
  width: 7rem;

  p {
    margin-top: 0.5rem;
    color: white;
  }
`;

const  Home = ( {place}) => {
  const history = useHistory();
  const { id } = useParams();

  const [localEscolhido, setLocalEscolhido] = useState("");
  const [data, setData] = useState();
  // Put a loading option
  const [isLoading, setIsLoading] = useState(true);


  const handleChange = (item) => {
    history.push(`/${item}`);
  };

  const processData = async (id) =>{
    setLocalEscolhido(id);

    setIsLoading(true);
    let buffer =  await fetchData(id);
    setData(buffer);
    setIsLoading(false);
    document.title = id;
  }

  useEffect(() => {
    document.title = "CoronaBrasil";
    processData(id)
    
  }, [id]);

  return (
    <AppContainer>
      <br/>
      <br/>
      <Header style={{"margin-top": "5rem"}} localEscolhido={localEscolhido} />

      <Container>
        <h5>Digite e selecione seu estado</h5>
       
        <SelectComponent items={estados} handleChange={handleChange} />
        <br />
        <center>
        <Button onClick={() => history.push("/vaccines/Brasil")}>
            <p>Brasil</p>
          </Button>
        </center>
        <br />
        <CovidCardInfo data={data} />
         <br />
      </Container>
      {/* {isLoading ? (
        ""
      ) : (
        <GraphComponents
          className="graph"
          titulo={localEscolhido}
          dados={data}
        />
      )} */}
    </AppContainer>
  );
}

export default Home;
