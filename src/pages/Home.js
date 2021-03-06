import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import styled from "styled-components";

// Dados estáticos
import cidades from "../data/cidades";
import estados from "../data/estados";

// My Components
import CovidCardInfo from "../components/covidCardInfo";
import GraphsCovidComponent from "../components/GraphsCovidComponent";
import HeaderCovid from "../components/HeaderCovid";
import Footer from "../components/Footer";
import SelectComponent from "../components/searchSelectComponent";

import { fetchData } from "../tools/getData";

const AppContainer = styled.div`
  text-align: center;
  background-color: #282c34;
  display: grid;
  grid-template-rows: repeat(auto-fill);
  font-size: 22px;
  color: white;

  h5 {
    font-size: 18px;
  }

  .graph {
    margin-left: 2rem;
    margin-right: 2rem;
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

  margin: 2rem;

  p {
    margin-top: 0.5rem;
    color: white;
  }
`;

const Home = ({ place }) => {
  const history = useHistory();
  const { id } = useParams();

  const [localEscolhido, setLocalEscolhido] = useState("Brasil");
  const [data, setData] = useState();
  // Put a loading option
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (item) => {
    history.push(`/${item}`);
  };

  const processData = async (location) => {
    setLocalEscolhido(location);
    setIsLoading(true);
    let buffer = await fetchData(location);
    setData(buffer);
    setIsLoading(false);
  };

  useEffect(() => {
    setLocalEscolhido("Brasil")
    if (id === undefined) {
      processData("Brasil");
    }
    processData(id);
  }, [id]);

  return (
    <AppContainer>
      <br />
      <br />

      <HeaderCovid
        style={{ "margin-top": "5rem" }}
        localEscolhido={localEscolhido}
      />

      <Container>
        <h5>Digite e selecione sua cidade</h5>
        <SelectComponent
          style={{ width: "%" }}
          className="App-Header"
          items={cidades}
          handleChange={handleChange}
        />
        <h5>
          Ou você pode <br />
          Digitar e selecionar o seu estado
        </h5>
        <SelectComponent items={estados} handleChange={handleChange} />
        <br />
        <center>
          <Button onClick={() => history.push("/Brasil")}>
            <p>Brasil</p>
          </Button>
        </center>
        <br />
        <CovidCardInfo data={data} />
        <br />
      </Container>
      {isLoading ? (
        ""
      ) : (
        <GraphsCovidComponent
          className="graph"
          titulo={!localEscolhido ? "Brasil" : localEscolhido}
          dados={data}
        />
      )}

      <Footer
        data={data ? "01/01/1970" : data}
        path={`https://covid-brasil.vercel.app/${localEscolhido}`}
      />
    </AppContainer>
  );
};

export default Home;
