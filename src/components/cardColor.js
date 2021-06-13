import React from "react";

import styled from "styled-components";

const Container = styled.div``;

const DangerColor = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 5rem;
  align-items: center;
  background-color: #fb3554;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
`;

const DarkColor = styled.div`
  display: flex;
  flex-direction: column;

  width: 20rem;
  height: 5rem;
  background-color: #262727;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
`;

const h5Texts = styled.h5`
  margin-top: 2rem;
`;

const DangerCard = ({ color, title, text }) => {
  return (
    <Container>
      <DangerColor>
        <h5Texts>{title}</h5Texts>
        <h5>{text}</h5>
      </DangerColor>
    </Container>
  );
};

const DarkCard = ({ title, text }) => {
  return (
    <Container>
      <DarkColor>
        <h5Texts>{title}</h5Texts>
        <h5>{text}</h5>
      </DarkColor>
    </Container>
  );
};

export { DangerCard, DarkCard };
