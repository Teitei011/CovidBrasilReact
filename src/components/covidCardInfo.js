import React from "react";
import { DangerCard, DarkCard } from "./cardColor";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  gap: 1rem;
  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Row = styled.div`
  display: grid;
  gap: 1rem;
`;

const CovidCardInfo = ({ data }) => {
  let totalDeCasos = 0;
  let totalDeMortes = 0;
  let casesMovingAverage = 0;
  let deathsMovingAverage = 0;
  let casesVariation = 0;
  let deathsVariation = 0;

  const change2Dot = (nStr) => {
    return new Intl.NumberFormat("de-DE").format(nStr);
  };

  if (data !== undefined) {
    let {
      deaths,
      totalCases,
      daily_cases_moving_average,
      daily_deaths_moving_average,
    } = data;

    totalDeMortes = Object.values(deaths);
    totalDeCasos = Object.values(totalCases);
    casesMovingAverage = Object.values(daily_cases_moving_average);
    deathsMovingAverage = Object.values(daily_deaths_moving_average);

    console.log(deathsMovingAverage)

    casesVariation =
      -100 *
      (1 -
        casesMovingAverage[casesMovingAverage.length - 2] /
          casesMovingAverage[casesMovingAverage.length - 15]);

    deathsVariation =
      -100 *
      (1 -
        deathsMovingAverage[deathsMovingAverage.length - 2] /
          deathsMovingAverage[deathsMovingAverage.length - 15]);

    totalDeCasos = change2Dot(totalDeCasos.slice(-2)[1].toFixed(2));
    totalDeMortes = change2Dot(totalDeMortes.slice(-2)[1].toFixed(2));

    casesMovingAverage = casesMovingAverage[casesMovingAverage.length-2].toFixed(2);
    deathsMovingAverage = deathsMovingAverage[deathsMovingAverage.length-2].toFixed(2);

    casesVariation = casesVariation.toFixed(2);
    if (casesVariation > 0) casesVariation = "+" + casesVariation + " %";
    else casesVariation = casesVariation + " %";

    deathsVariation = deathsVariation.toFixed(2);
    if (deathsVariation > 0) deathsVariation = "+" + deathsVariation + " %";
    else deathsVariation = deathsVariation + " %";
  }

  return (
    <center>
      <Container>
        <Row>
          <DangerCard
            title="Total de casos"
            text={!data ? "0" : totalDeCasos}
          />
          <DangerCard
            title="Média móvel de casos"
            text={!data ? "0" : casesMovingAverage}
          />
          <DangerCard
            title="Variação da Média móvel"
            text={!data ? "0" : casesVariation}
          />
        </Row>

        <Row>
          <DarkCard
            title="Total de mortes"
            text={!data ? "0" : totalDeMortes}
          />
          <DarkCard
            title="Média móvel de mortes"
            text={!data ? "0" : deathsMovingAverage}
          />
          <DarkCard
            title="Variação da Média móvel"
            text={!data ? "0" : deathsVariation}
          />
        </Row>
      </Container>
    </center>
  );
};

export default CovidCardInfo;
