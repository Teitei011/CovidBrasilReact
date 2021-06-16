import { React, useState } from "react";

const url =
  "https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-states.csv";

  const convertString2Date = (date) =>{
      try{
          let parts = date.split("-")
            return new Date(parts[0], parts[1] -1, parts[2]).toDateString();
      } catch(error){
          console.log(error);
      }
  }


const GetDataFromGithub = async () => {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  const response = await fetch(url);
  const downloadData = await response.text();
  console.log(`Data from Github: ${downloadData}`);

  // Variables
  let epi_week,
    date,
    country,
    state,
    city,
    newDeaths,
    deaths,
    newCases,
    totalCases,
    deathsMS,
    totalCasesMS,
    deaths_per_100k_inhabitants,
    totalCases_per_100k_inhabitants,
    deaths_by_totalCases,
    recovered,
    suspects,
    tests,
    tests_per_100k_inhabitants,
    vaccinated,
    vaccinated_per_100k_inhabitants,
    vaccinated_second,
    vaccinated_second_per_100k_inhabitants = [];

    let array = [epi_week,
    date,
    country,
    state,
    city,
    newDeaths,
    deaths,
    newCases,
    totalCases,
    deathsMS,
    totalCasesMS,
    deaths_per_100k_inhabitants,
    totalCases_per_100k_inhabitants,
    deaths_by_totalCases,
    recovered,
    suspects,
    tests,
    tests_per_100k_inhabitants,
    vaccinated,
    vaccinated_per_100k_inhabitants,
    vaccinated_second,
    vaccinated_second_per_100k_inhabitants]


    const table = data.split("\n").slice(1);

    table.forEach((row) =>{
        const cols = row.split(",");

        date.push(convertString2Date(cols[array[date]]));

        // Cases
        totalCases.push(Number(cols[array[totalCases]]));
        newCases.push(Number(cols[array[newCases]]));
        totalCasesMS.push(Number(cols[array[totalCasesMS]])); //Mudar numeros


        // Deaths
        deaths.push(Number(cols[array[deaths]])); //Mudar numeros
        newDeaths.push(Number(cols[array[newDeaths]])); 
        deathsMS.push(Number(cols[array[deathsMS])]); 

        // Tests
        tests.push(Number(cols[array[tests]])); 
        tests_per_100k_inhabitants.push(Number(cols[array[tests_per_100k_inhabitants]])); 

        // Vaccines
        vaccinated.push(Number(cols[array[vaccinated])); 
        vaccinated_per_100k_inhabitants.push(Number(cols[array[vaccinated_per_100k_inhabitants]])); 

        // Second Dose
        vaccinated_second.push(Number(cols[array[vaccinated_second]])); 
        vaccinated_second_per_100k_inhabitants.push(Number(cols[array[vaccinated_second_per_100k_inhabitants]])); 


    })

};

export default GetDataFromGithub;
