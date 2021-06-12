import React, { useState, useEffect } from "react";
import "./App.css";

// Design extra
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import styled from "styled-components";

// Dados estáticos
import cidades from "./data/cidades";
import estados from "./data/estados";

// My Components
import CovidCardInfo from "./components/covidCardInfo";
import GraphComponents from "./components/GraphsComponent";
import Header from "./components/Header";
import Footer from "./components/footer";

import SelectComponent from "./components/searchSelectComponent";

import fetchData from "./tools/getData";


const AppContainer = styled.div`
  text-align: center;
  background-color: #282c34;
  display: grid;
  grid-template-rows: repeat(auto-fill);
  font-size: 15px;
  color: white;
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
  background-color: #fb3554;
  border-radius: 2rem;
  border: 2px;
  width: 7rem;

  p {
    margin-top: 0.5rem;
    color: white;
  }
`;

function App() {
  const [localEscolhido, setLocalEscolhido] = useState("");
  const [data, setData] = useState();
  // Put a loading option
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = async (escolha) => {
    document.title = escolha;
    setLocalEscolhido(escolha);

    setIsLoading(true);
    let buffer = await fetchData(escolha);
    console.log(`Buffer: ${buffer}`);
    setData(buffer);
    setIsLoading(false);
  };

  useEffect(() => {
    document.title = "CoronaBrasil";
    handleChange("Brasil");
  }, []);



  return (
    <AppContainer>
      <Header localEscolhido={localEscolhido} />

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
          <Button onClick={() => handleChange("Brasil")}>
            <p>Brasil</p>
          </Button>
        </center>
        <br />
        <CovidCardInfo data={data} /> <br />
      </Container>
      {isLoading ? (
        ""
      ) : (
        <GraphComponents
          className="graph"
          titulo={localEscolhido}
          dados={data}
        />
      )}
      {/* <Footer data={data} /> */}
    </AppContainer>
  );
}

export default App;
