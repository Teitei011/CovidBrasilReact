import React from "react";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Graph from './Graph'

const GraphComponents = ({ titulo, dados }) => {
  return (
    <MDBRow>
      <MDBCol md='6'>
        <Graph titulo={titulo} label={dados.date} dados={dados.cases} />
      </MDBCol>
      <MDBCol md='6'>
        <Graph titulo={titulo} label={dados.date} dados={dados.deaths} />
      </MDBCol>

      <MDBCol md='6'>
        <Graph titulo={titulo} label={dados.date} dados={dados.dailyCases} />
      </MDBCol>
      <MDBCol md='6'>
        <Graph titulo={titulo} label={dados.date} dados={dados.dailyDeaths} />
      </MDBCol>
      <MDBCol md='6'>
        <Graph titulo={titulo} label={dados.date} dados={dados.casesMovingAverage} />
      </MDBCol>
      <MDBCol md='6'>
        <Graph titulo={titulo} label={dados.date} dados={dados.deathsMovingAverage} />
      </MDBCol>
    </MDBRow>
  )
};

export default GraphComponents;