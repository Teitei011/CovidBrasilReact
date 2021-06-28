import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

import styled from "styled-components";

// Dados estáticos

import estados from "../data/estados";

// My Components
import VaccineCardInfo from "../components/vaccineCardInfo";
import GraphVaccinesComponents from "../components/GraphVaccinesComponents";
import HeaderVaccines from "../components/HeaderVaccines";
import Footer from "../components/Footer";
import SelectComponent from "../components/searchSelectComponent";

import fetchData from "../tools/getData";


// Cores 
// Verdinho azulado : #34fbdb
// Azul> #34B7FB
// Verdinho claro: #34FB78

const AppContainer = styled.div`
  text-align: center;
  background-color: #DEFFD7;
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
  background-color:#DEFFD7;
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

  background-color: #fff;
  border-radius: 2rem;
  border: 2px;
  width: 7rem;

  p {
    margin-top: 0.5rem;
    color: white;
  }
`;

const Vaccines = () => {
  const history = useHistory();
  const { id } = useParams();

  const [localEscolhido, setLocalEscolhido] = useState("Brasil");
  const [data, setData] = useState();
  // Put a loading option
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (item) => {
    history.push(`/vaccines/${item}`);
  };

  const processData = async (location) => {
    setLocalEscolhido(location);
    setIsLoading(true);
    let buffer = await fetchData(location);
    setData(buffer);
    setIsLoading(false);
  };

  useEffect(() => {
    document.title = "Vacina Brasil";
    if (id === undefined) {
      processData("Brasil");
    }
    processData(id);
  }, [id]);

  return (
    <AppContainer>
      <br />
      <br />
      <HeaderVaccines
        style={{ "margin-top": "5rem" }}
        localEscolhido={localEscolhido}
      />
      <Container>
      {/* <h5>
          Digite e selecionar o seu estado
        </h5>
        <SelectComponent items={estados} handleChange={handleChange} />
        <br /> */}
        {/* <center>
          <Button onClick={() => history.push("/vaccines/Brasil")}>
            <p>Brasil</p>
          </Button>
        </center> */}
        <br />
        <br />
      </Container>

      <VaccineCardInfo data={data} />

      {isLoading ? (
        ""
      ) : (
        <GraphVaccinesComponents
          className="graph"
          titulo={!localEscolhido ? "Brasil" : localEscolhido}
          dados={data}
        />
      )}

      <Footer
        data={data ? "01/01/1970" : data}
        path={`https://covid-brasil.vercel.app/vaccines/${localEscolhido}`}
      />
    </AppContainer>
  );
};

export default Vaccines;
