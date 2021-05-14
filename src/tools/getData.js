import React from "react";

const fetchData = async (name) => {
  const url = "https://teitei011.github.io/covid/brazil/" + name + ".csv";
  const response = await fetch(url);
  const data = await response.text();

  const date = [];
  const cases = [];
  const deaths = [];
  const dailyCases = [];
  const dailyDeaths = [];
  const casesMovingAverage = [];
  const deathsMovingAverage = [];
  const table = data.split("\n").slice(1);


  table.forEach((row) => {
    const cols = row.split(",");
    date.push(change2Dot(cols[1]));
    cases.push(change2Dot(cols[2]));
    dailyCases.push(change2Dot(cols[3]));
    deaths.push(change2Dot(cols[4]));
    dailyDeaths.push(change2Dot(cols[5]));

    casesMovingAverage.push(change2Dot(cols[6]));
    deathsMovingAverage.push(change2Dot(cols[7]));

  });




  // Brasil dataset is different than the rest 
  date.pop();
  cases.pop();
  deaths.pop();
  dailyCases.pop();
  dailyDeaths.pop();
  casesMovingAverage.pop();
  deathsMovingAverage.pop();

  let casesVariation = -100 * (1 - casesMovingAverage[casesMovingAverage.length - 1] / casesMovingAverage[casesMovingAverage.length - 15]);
  let deathsVariation = -100 * (1 - deathsMovingAverage[deathsMovingAverage.length - 1] / deathsMovingAverage[deathsMovingAverage.length - 15]);


  // date = await changeDateOrderArray(date);


  return {
    date,
    cases,
    dailyCases,
    deaths,
    dailyDeaths,
    casesMovingAverage,
    deathsMovingAverage,
    casesVariation,
    deathsVariation
  };
}




function change2Dot(nStr) {
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


function changeSymbol(value) {
  return value.replace(".", ',');

}

export default fetchData;