import React from "react";
import { BarChart } from "./Graph";

import styled from "styled-components";

const Container = styled.div`
  display: grid;
  gap: 1rem;

  margin-left: 3rem;
  margin-right: 3rem;

  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const convertString2Date = (date) => {
  let newArray = [];
  for (let index = 0; index < date.length; index++) {
    let parts = date.split("-");
    return new Date(parts[0], parts[1] - 1, parts[2]).toDateString();
  }
};

const BarChartsCovidComponent = ({ titulo, dados }) => {
  let {
    date,
    totalCases,
    newCases,
    deaths,
    newDeaths,
    daily_cases_moving_average,
    daily_deaths_moving_average,
  } = dados;

  date = Object.values(date).map((dia) => {
    let parts = dia.split("-");
    return new Date(parts[0], parts[1] - 1, parts[2]).toDateString();
  });

  console.log(date)
  totalCases = Object.values(totalCases);
  newCases = Object.values(newCases);
  deaths = Object.values(deaths);
  newDeaths = Object.values(newDeaths);
  daily_cases_moving_average = Object.values(daily_cases_moving_average);
  daily_deaths_moving_average = Object.values(daily_deaths_moving_average);

  return (
    <Container>
      <BarChart
        titulo={`Total de Casos: ${titulo}`}
        label={date}
        dados={totalCases}
        backgroundColor={"rgba(255,99,132,0.2)"}
        borderColor={"rgba(255,99,132,1)"}
      />
      <BarChart
        titulo={`Total de mortes: ${titulo}`}
        label={date}
        dados={deaths}
        backgroundColor={"rgba(255,99,132,0.2)"}
        borderColor={"rgba(255,99,132,1)"}
      />

      <BarChart
        titulo={`Casos Diários: ${titulo}`}
        label={date}
        dados={newCases}
        backgroundColor={"rgba(255,99,132,0.2)"}
        borderColor={"rgba(255,99,132,1)"}
      />
      <BarChart
        titulo={`Mortes Diárias: ${titulo}`}
        label={date}
        dados={newDeaths}
        backgroundColor={"rgba(255,99,132,0.2)"}
        borderColor={"rgba(255,99,132,1)"}
      />
      <BarChart
        titulo={`Média Móvel de Casos: ${titulo}`}
        label={date}
        dados={daily_cases_moving_average}
        backgroundColor={"rgba(255,99,132,0.2)"}
        borderColor={"rgba(255,99,132,1)"}
      />
      <BarChart
        titulo={`Média Móvel de Mortes: ${titulo} `}
        label={date}
        dados={daily_deaths_moving_average}
        backgroundColor={"rgba(255,99,132,0.2)"}
        borderColor={"rgba(255,99,132,1)"}
      />
    </Container>
  );
};

export default BarChartsCovidComponent;
