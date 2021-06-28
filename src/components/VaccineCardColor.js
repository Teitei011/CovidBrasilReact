import React from "react";

import styled from "styled-components";

const Container = styled.div``;

const FirstDose = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 5rem;
  background-color:  #2BED04;
  border-radius: 1rem;
`;

const SecondDose = styled.div`
  display: flex;
  flex-direction: column;

  width: 20rem;
  height: 5rem;
  background-color: #34B7FB ;
  border-radius: 1rem;
`;


const FirstDoseCard = ({ color, title, text }) => {
  return (
    <Container>
      <FirstDose>
        {title}
        <h5>{text}</h5>
      </FirstDose>
    </Container>
  );
};

const SecondDoseCard = ({ title, text }) => {
  return (
    <Container>
      <SecondDose>
        {title}
        <h5>{text}</h5>
      </SecondDose>
    </Container>
  );
};

export { FirstDoseCard, SecondDoseCard };
