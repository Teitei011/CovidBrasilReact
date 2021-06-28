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

  let firstDoseData = [];
  let firstDoseBuffer = Number((vaccinated.slice(-1) * 100) / POPULATION);
  firstDoseData.push(firstDoseBuffer);
  firstDoseData.push(100 - firstDoseBuffer);

  let secondDoseData = [];
  let secondDoseBuffer = Number(
    (vaccinated_second.slice(-1) * 100) / POPULATION
  );
  secondDoseData.push(secondDoseBuffer);
  secondDoseData.push(100 - secondDoseBuffer);

  return (
    <Container>
      <PieChart
        titulo={`Primeira Dose: ${titulo} %`}
        label={["Vacinados", "Não vacinados"]}
        dados={firstDoseData}
        backgroundColor={["rgba(43, 237, 4, 1)", "rgba(43, 237, 4, 0)"]}
        borderColor={"rgba(43, 237, 4, 1)"}
      />
      <PieChart
        titulo={`Segunda Dose: ${titulo} %`}
        label={["Vacinados", "Não vacinados"]}
        dados={secondDoseData}
        backgroundColor={["rgba(52, 183, 251, 1)", "rgba(52, 183, 251, 0)"]}
        borderColor={"rgba(52, 183, 251, 1)"}
      />
      <BarChart
        titulo={`Primeira Dose: ${titulo}`}
        label={date}
        dados={vaccinated}
        backgroundColor={["rgba(43, 237, 4, 1)", "rgba(43, 237, 4, 0)"]}
        borderColor={"rgba(43, 237, 4, 1)"}
      />
      <BarChart
        titulo={`Segunda Dose: ${titulo}`}
        label={date}
        dados={vaccinated_second}
        backgroundColor={["rgba(52, 183, 251, 1)", "rgba(52, 183, 251, 0)"]}
        borderColor={"rgba(52, 183, 251, 1)"}
      />
      <BarChart
        titulo={`Doses diárias: ${titulo}`}
        label={date}
        dados={daily_vaccine}
        backgroundColor={["rgba(43, 237, 4, 1)", "rgba(43, 237, 4, 0)"]}
        borderColor={"rgba(43, 237, 4, 1)"}
      />
      <BarChart
        titulo={`Doses diárias (2 dose): ${titulo}`}
        label={date}
        dados={daily_second_vaccine}
        backgroundColor={["rgba(52, 183, 251, 1)", "rgba(52, 183, 251, 0)"]}
        borderColor={"rgba(52, 183, 251, 1)"}
      />
      <BarChart
        titulo={`Média Móvel de Vacinados (1 dose): ${titulo}`}
        label={date}
        dados={vaccinated_moving_average}
        backgroundColor={["rgba(43, 237, 4, 1)", "rgba(43, 237, 4, 0)"]}
        borderColor={"rgba(43, 237, 4, 1)"}
      />
      <BarChart
        titulo={`Média Móvel de Vacinados (2 dose): ${titulo} `}
        label={date}
        dados={vaccinated_second_moving_average}
        backgroundColor={["rgba(52, 183, 251, 1)", "rgba(52, 183, 251, 0)"]}
        borderColor={"rgba(52, 183, 251, 1)"}
      />
    </Container>
  );
};

export default GraphsCovidComponent;
