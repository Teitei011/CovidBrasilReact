import React from "react";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import CardColor from "./cardColor"


const CovidCardInfo = ({data}) => {

  return (
    <MDBRow >
    <MDBCol sm="12" md='6'>
      <CardColor color="danger" className="cardInfo" title="Total de casos" text={data ? "0" : data.cases[data.cases.length - 1]} />
      <CardColor color="danger" className="cardInfo" title="Média móvel de casos" text={data ? "0" : data.casesMovingAverage[data.cases.length - 1]} />
      <CardColor color="danger" className="cardInfo" title="Variação da Média móvel" text={data ? "0" : data.casesVariation[data.cases.length - 1]} />
    </MDBCol>


    <MDBCol md='6'>
      <CardColor color="dark" className="cardInfo" title="Total de mortes" text={data ? "0" : data.deaths[data.cases.length - 1]} />
      <CardColor color="dark" className="cardInfo" title="Média móvel de mortes" text={data ? "0" : data.deathsMovingAverage[data.cases.length - 1]} />
      <CardColor color="dark" className="cardInfo" title="Variação da Média móvel" text={data ? "0" : data.deathsVariation[data.cases.length - 1]} />
    </MDBCol>
  </MDBRow>
  );
}

export default CovidCardInfo;