import React from "react";

import styled from "styled-components";

const Container = styled.div`
`;

const DangerColor = styled.div`
  width: 20rem;
  height: 5rem;
  align-items: center;
  background-color:  #fb3554;
  border-radius: 1rem;

`;

const DarkColor = styled.div`
  width: 20rem;
  height: 5rem;
  background-color:  #262727;
  border-radius: 1rem;

`;

const   h5Texts= styled.h5`
  margin-top: 2rem;
`;

const DangerCard = ({ color, title, text }) => {
  return (
    <Container>
       <DangerColor >
         <div style={{height: "1rem"}}/>
        <h5Texts>{title}</h5Texts>
        <h6>{text}</h6>
      </DangerColor>

    </Container>
  );
};


const DarkCard = ({  title, text }) => {
  return (
    <Container>
       <DarkColor >
       <div style={{height: "1rem"}}/>
        <h5Texts>{title}</h5Texts>
        <h6>{text}</h6>
      </DarkColor>

    </Container>
  );
};

export  {DangerCard, DarkCard};
