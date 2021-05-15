import React from "react";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import CardColor from "./cardColor"


const CovidCardInfo = ({ data }) => {
  let totalDeCasos = 0;
  let totalDeMortes = 0;
  let casesMovingAverage = 0;
  let deathsMovingAverage = 0;
  let casesVariation = 0;
  let deathsVariation = 0;


  const changeSymbol = (value) => {
    let newValue = value.replace(".", ',');
    return newValue;
  }


  const change2Dot = (nStr) => {
    nStr += '';
    let x = nStr.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
  }

  if (data) {

    totalDeCasos = change2Dot(data.cases[data.cases.length - 1]);
    totalDeMortes = change2Dot(data.deaths[data.deaths.length - 1]);

    casesMovingAverage = change2Dot(parseFloat(data.casesMovingAverage[data.casesMovingAverage.length - 1]).toFixed(0));
    deathsMovingAverage =change2Dot(parseFloat(data.deathsMovingAverage[data.deathsMovingAverage.length - 1]).toFixed(0));


    casesVariation = parseFloat(data.casesVariation).toFixed(2);
    if (casesVariation > 0) casesVariation = "+" + casesVariation + " %";
    else casesVariation = casesVariation + " %";
    casesVariation = change2Dot(changeSymbol(String(casesVariation)))

    deathsVariation = parseFloat(data.deathsVariation).toFixed(2);
    if (deathsVariation > 0) deathsVariation = "+" + deathsVariation + " %";
    else deathsVariation = deathsVariation + " %";
    deathsVariation = change2Dot(changeSymbol(String(deathsVariation)))
  }

  return (
    <MDBRow >
      <MDBCol sm="12" md='6'>
        <CardColor color="danger" className="cardInfo" title="Total de casos" text={!data ? "0" : totalDeCasos} />
        <CardColor color="danger" className="cardInfo" title="Média móvel de casos" text={!data ? "0" : casesMovingAverage} />
        <CardColor color="danger" className="cardInfo" title="Variação da Média móvel" text={!data ? "0" : casesVariation} />
      </MDBCol>


      <MDBCol md='6'>
        <CardColor color="dark" className="cardInfo" title="Total de mortes" text={!data ? "0" : totalDeMortes} />
        <CardColor color="dark" className="cardInfo" title="Média móvel de mortes" text={!data ? "0" : deathsMovingAverage} />
        <CardColor color="dark" className="cardInfo" title="Variação da Média móvel" text={!data ? "0" : deathsVariation} />
      </MDBCol>
    </MDBRow>
  );
}

export default CovidCardInfo;