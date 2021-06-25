import React from "react";

import styled from "styled-components";

const Container = styled.div``;

const DangerColor = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 5rem;
  background-color: #fb3554;
  border-radius: 1rem;
`;

const DarkColor = styled.div`
  display: flex;
  flex-direction: column;

  width: 20rem;
  height: 5rem;
  background-color: #262727;
  border-radius: 1rem;
`;


const DangerCard = ({ color, title, text }) => {
  return (
    <Container>
      <DangerColor>
        {title}
        <h5>{text}</h5>
      </DangerColor>
    </Container>
  );
};

const DarkCard = ({ title, text }) => {
  return (
    <Container>
      <DarkColor>
        {title}
        <h5>{text}</h5>
      </DarkColor>
    </Container>
  );
};

export { DangerCard, DarkCard };
