import React from "react";
import { SecondDoseCard, FirstDoseCard } from "./VaccineCardColor";
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

const change2Dot = (nStr) => {
  return new Intl.NumberFormat("de-DE").format(nStr);
};

const VaccineCardInfo = ({ data }) => {
    let vaccinated_Result = 0;
    let vaccinated_second_Result = 0;
    let daily_vaccine_Result = 0;
    let daily_second_vaccine_Result = 0;
    let vaccinated_moving_average_Result = 0;
    let vaccinated_second_moving_average_Result = 0;
 
  if (data !== undefined) {
    let {
      vaccinated,
      vaccinated_second,
      daily_vaccine,
      daily_second_vaccine,
      vaccinated_moving_average,
      vaccinated_second_moving_average
    } = data;

    vaccinated_Result = Object.values(vaccinated);
    vaccinated_second_Result = Object.values(vaccinated_second);
    daily_vaccine_Result = Object.values(daily_vaccine);
    daily_second_vaccine_Result = Object.values(daily_second_vaccine);
    vaccinated_moving_average_Result = Object.values(vaccinated_moving_average);
    vaccinated_second_moving_average_Result = Object.values(vaccinated_second_moving_average);

    vaccinated_Result = change2Dot(vaccinated_Result.slice(-2)[1].toFixed(0));
    vaccinated_second_Result = change2Dot(vaccinated_second_Result.slice(-2)[1].toFixed(0));

    daily_vaccine_Result = change2Dot(daily_vaccine_Result[daily_vaccine_Result.length-2].toFixed(0));
    daily_second_vaccine_Result = change2Dot(daily_second_vaccine_Result[daily_second_vaccine_Result.length-2].toFixed(0));

    vaccinated_moving_average_Result = change2Dot(vaccinated_second_moving_average_Result[vaccinated_moving_average_Result.length-2].toFixed(0));
    vaccinated_second_moving_average_Result = change2Dot(vaccinated_second_moving_average_Result[vaccinated_second_moving_average_Result.length-2].toFixed(0));


}

  return (
    <center>
      <Container>
        <Row>
          <FirstDoseCard
            title="Total da primeira dose"
            text={ vaccinated_Result}
          />
          <FirstDoseCard
            title="Vacinação diária"
            text={ daily_vaccine_Result}
          />
          <FirstDoseCard
            title="Média móvel da primeira dose"
            text={vaccinated_moving_average_Result}
          />
        </Row>

        <Row>
          <SecondDoseCard
            title="Total da segunda dose"
            text={vaccinated_second_Result}
          />
          <SecondDoseCard
            title="Vacinação diária (2 dose)"
            text={daily_second_vaccine_Result}
          />
          <SecondDoseCard
            title="Média móvel da segunda dose"
            text={vaccinated_second_moving_average_Result}
          />
        </Row>
      </Container>
    </center>
  );
};

export default VaccineCardInfo;
