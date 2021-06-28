import React from "react";
import { BarChart, PieChart } from "./Graph";
import styled from "styled-components";

const POPULATION = 213264842;

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

const GraphsCovidComponent = ({ titulo, dados }) => {
  let {
    date,
    vaccinated,
    vaccinated_second,
    daily_vaccine,
    daily_second_vaccine,
    vaccinated_moving_average,
    vaccinated_second_moving_average,
  } = dados;

  date = Object.values(date);
  vaccinated = Object.values(vaccinated);
  vaccinated_second = Object.values(vaccinated_second);
  daily_vaccine = Object.values(daily_vaccine);
  daily_second_vaccine = Object.values(daily_second_vaccine);
  vaccinated_moving_average = Object.values(vaccinated_moving_average);
  vaccinated_second_moving_average = Object.values(
    vaccinated_second_moving_average
  );

  let firstDoseData = vaccinated.slice(-1);
  firstDoseData.push(POPULATION);

  let secondDoseData = vaccinated_second.slice(-1);
  secondDoseData.push(POPULATION);

  return (
    <Container>
      <PieChart
        titulo={`Primeira Dose: ${titulo}`}
        label={210000000}
        dados={firstDoseData}
        backgroundColor={["rgba(43, 237, 4, 1)", "rgba(43, 237, 4, 0)"]}
        borderColor={"rgba(255,99,132,1)"}
      />
      <PieChart
        titulo={`Segunda Dose: ${titulo}`}
        label={210000000}
        dados={secondDoseData}
        backgroundColor={["rgba(52, 183, 251, 1)", "rgba(52, 183, 251, 0)"]}
        borderColor={"rgba(255,99,132,1)"}
      />
      <BarChart
        titulo={`Primeira Dose: ${titulo}`}
        label={date}
        dados={vaccinated}
        backgroundColor={"rgba(255,99,132,0.2)"}
        borderColor={"rgba(255,99,132,1)"}
      />
      <BarChart
        titulo={`Segunda Dose: ${titulo}`}
        label={date}
        dados={vaccinated_second}
        backgroundColor={"rgba(255,99,132,0.2)"}
        borderColor={"rgba(255,99,132,1)"}
      />
      <BarChart
        titulo={`Doses diárias: ${titulo}`}
        label={date}
        dados={daily_vaccine}
        backgroundColor={"rgba(255,99,132,0.2)"}
        borderColor={"rgba(255,99,132,1)"}
      />
      <BarChart
        titulo={`Doses diárias (2 dose): ${titulo}`}
        label={date}
        dados={daily_second_vaccine}
        backgroundColor={"rgba(255,99,132,0.2)"}
        borderColor={"rgba(255,99,132,1)"}
      />
      <BarChart
        titulo={`Média Móvel de Vacinados (1 dose): ${titulo}`}
        label={date}
        dados={vaccinated_moving_average}
        backgroundColor={"rgba(255,99,132,0.2)"}
        borderColor={"rgba(255,99,132,1)"}
      />
      <BarChart
        titulo={`Média Móvel de Vacinados (2 dose): ${titulo} `}
        label={date}
        dados={vaccinated_second_moving_average}
        backgroundColor={"rgba(255,99,132,0.2)"}
        borderColor={"rgba(255,99,132,1)"}
      />
    </Container>
  );
};

export default GraphsCovidComponent;
