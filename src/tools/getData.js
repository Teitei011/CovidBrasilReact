import React from "react";

const fetchData = async (name) => {
  let fixer = 1;
  if(name === "Brasil"){
    fixer = 0;
  } 

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


  const convertString2Date = (date) => {
    try {
      let parts = date.split('-');
      return  new Date(parts[0], parts[1] - 1, parts[2]).toDateString(); 
    } catch (error) {
      console.log(error);
    }

  }

  const table = data.split("\n").slice(1);

  table.forEach((row) => {
    const cols = row.split(",");
    date.push(convertString2Date(cols[1+fixer]));
    cases.push(Number(cols[2+fixer]));
    dailyCases.push(Number(cols[3+fixer]));
    deaths.push(Number(cols[4 + fixer]));
    dailyDeaths.push(Number(cols[5 + fixer]));

    casesMovingAverage.push(Number(cols[6+fixer]));
    deathsMovingAverage.push(Number(cols[7+fixer]));

  });




  // Brasil dataset is different than the rest 
  date.pop();
  cases.pop();
  deaths.pop();
  dailyCases.pop();
  dailyDeaths.pop();
  casesMovingAverage.pop();
  deathsMovingAverage.pop();

  let casesVariation = -100 * (1 - casesMovingAverage[casesMovingAverage.length - 2] / casesMovingAverage[casesMovingAverage.length - 15]);
  let deathsVariation = -100 * (1 - deathsMovingAverage[deathsMovingAverage.length - 2] / deathsMovingAverage[deathsMovingAverage.length - 15]);

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




export default fetchData;
