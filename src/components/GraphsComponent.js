import React from "react";
import Graph from "./Graph";


import styled from "styled-components";

const Container = styled.div`
  display: grid;
  gap: 1rem;

  @media only screen and (min-width: 600px){
      grid-template-columns: repeat(2, 1fr);

  }
`;


const GraphComponents = ({ titulo, dados }) => {


  return (
    <Container>
      <Graph
        titulo={`Total de Casos: ${titulo}`}
        label={dados.date}
        dados={dados.cases}
      />
      <Graph
        titulo={`Total de mortes: ${titulo}`}
        label={dados.date}
        dados={dados.deaths}
      />

      <Graph
        titulo={`Casos Diários: ${titulo}`}
        label={dados.date}
        dados={dados.dailyCases}
      />
      <Graph
        titulo={`Mortes Diárias: ${titulo}`}
        label={dados.date}
        dados={dados.dailyDeaths}
      />
      <Graph
        titulo={`Média Móvel de Casos: ${titulo}`}
        label={dados.date}
        dados={dados.casesMovingAverage}
      />
      <Graph
        titulo={`Média Móvel de Mortes: ${titulo} `}
        label={dados.date}
        dados={dados.deathsMovingAverage}
      />
    </Container>
  );
};

export default GraphComponents;
