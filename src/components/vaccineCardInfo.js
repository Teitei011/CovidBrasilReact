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

const vaccineCardInfo = ({ data }) => {
    let vaccinated = 0;
    let vaccinated_second = 0;
    let daily_vaccine = 0;
    let daily_second_vaccine = 0;
    let vaccinated_moving_average = 0;
    let vaccinated_second_moving_average = 0;

  const change2Dot = (nStr) => {
    return new Intl.NumberFormat("de-DE").format(nStr);
  };

  if (data !== undefined) {
    let {
      vaccinated_buffer,
      vaccinated_second_buffer,
      daily_vaccine_buffer,
      daily_second_vaccine_buffer,
      vaccinated_moving_average_buffer,
      vaccinated_second_moving_average_buffer
    } = data;

    vaccinated = Object.values(vaccinated_buffer);
    vaccinated_second = Object.values(vaccinated_second_buffer);
    daily_vaccine = Object.values(daily_vaccine_buffer);
    daily_second_vaccine = Object.values(daily_second_vaccine_buffer);
    vaccinated_moving_average = Object.values(vaccinated_moving_average_buffer);
    vaccinated_second_moving_average = Object.values(vaccinated_second_moving_average_buffer);


    vaccinated = change2Dot(vaccinated.slice(-2)[1].toFixed(2));
    vaccinated_second = change2Dot(vaccinated_second.slice(-2)[1].toFixed(2));

    daily_vaccine = change2Dot(daily_vaccine[daily_vaccine.length-2].toFixed(2));
    daily_second_vaccine = change2Dot(daily_second_vaccine[daily_second_vaccine.length-2].toFixed(2));


    vaccinated_moving_average = change2Dot(vaccinated_second_moving_average[vaccinated_moving_average.length-2].toFixed(2));
    vaccinated_second_moving_average = change2Dot(vaccinated_second_moving_average[vaccinated_second_moving_average.length-2].toFixed(2));

}

  return (
    <center>
      <Container>
        <Row>
          <DangerCard
            title="Total de casos"
            text={data ? "0" : vaccinated}
          />
          <DangerCard
            title="Média móvel de casos"
            text={data ? "0" : daily_vaccine}
          />
          <DangerCard
            title="Variação da Média móvel"
            text={data ? "0" : vaccinated_moving_average}
          />
        </Row>

        <Row>
          <DarkCard
            title="Total de mortes"
            text={data ? "0" : vaccinated_second}
          />
          <DarkCard
            title="Média móvel de mortes"
            text={data ? "0" : daily_second_vaccine}
          />
          <DarkCard
            title="Variação da Média móvel"
            text={data ? "0" : vaccinated_second_moving_average}
          />
        </Row>
      </Container>
    </center>
  );
};

export default vaccineCardInfo;
