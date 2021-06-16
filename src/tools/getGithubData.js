// import { React, useState } from "react";

// const url =
//   "https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-states.csv";

// const convertString2Date = (date) => {
//   try {
//     let parts = date.split("-");
//     return new Date(parts[0], parts[1] - 1, parts[2]).toDateString();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const returnIndicesThatDoesNotRepeat = (data) =>{
  
// }

// const getColumnsIntoArrays = (data, position) => {
//   let newArray = [];
//   for (let index = 0; index < data.length; index += 2) {
//     newArray.push(data[index][position]);
//   }
//   return newArray;
// };

// const convertData2Json = async (csvData) => {
//   let epi_week = getColumnsIntoArrays(csvData, 0);
//   let date = getColumnsIntoArrays(csvData, 1);
//   let country = getColumnsIntoArrays(csvData, 2);
//   let state = getColumnsIntoArrays(csvData, 3);
//   let city = getColumnsIntoArrays(csvData, 4);
//   let newDeaths = getColumnsIntoArrays(csvData, 5);
//   let deaths = getColumnsIntoArrays(csvData, 6);
//   let newCases = getColumnsIntoArrays(csvData, 7);
//   let totalCases = getColumnsIntoArrays(csvData, 8);
//   let deathsMS = getColumnsIntoArrays(csvData, 9);
//   let totalCasesMS = getColumnsIntoArrays(csvData, 10);
//   let deaths_per_100k_inhabitants = getColumnsIntoArrays(csvData, 11);
//   let totalCases_per_100k_inhabitants = getColumnsIntoArrays(csvData, 12);
//   let deaths_by_totalCases = getColumnsIntoArrays(csvData, 13);
//   let recovered = getColumnsIntoArrays(csvData, 14);
//   let suspects = getColumnsIntoArrays(csvData, 15);
//   let tests = getColumnsIntoArrays(csvData, 16);
//   let tests_per_100k_inhabitants = getColumnsIntoArrays(csvData, 17);
//   let vaccinated = getColumnsIntoArrays(csvData, 18);
//   let vaccinated_per_100k_inhabitants = getColumnsIntoArrays(csvData, 19);
//   let vaccinated_second = getColumnsIntoArrays(csvData, 20);
//   let vaccinated_second_per_100k_inhabitants = getColumnsIntoArrays(
//     csvData,
//     21
//   );

//   return (
//     date,
//     newDeaths,
//     deaths,
//     newCases,
//     totalCases,
//     deathsMS,
//     totalCasesMS,
//     vaccinated,
//     vaccinated_second,
//     vaccinated_per_100k_inhabitants,
//     vaccinated_second_per_100k_inhabitants);
  
// };

// const GetDataFromGithub = async () => {
//   console.log("GetDataFromGithub");
//   const response = await fetch(url);
//   const downloadData = await response.text();

//   let csvData = [];
//   let lbreak = downloadData.split("\n");
//   let counter = 0;

//   let buffer = [];
//   let csvDataBuffer = [];

//   lbreak.forEach((res) => {
//     if (counter > 0) {
//       csvDataBuffer = res.split(",");
//       if (buffer !== csvDataBuffer) {
//         csvData.push(res.split(","));
//       } else {
//         buffer = csvDataBuffer;
//       }
//     }
//     counter += 1;
//   });

//   let data = await convertData2Json(csvData);
//   console.log(data);

//   // data = Object.keys(data);

//   // for (let index = 1; index < data.date.length; index++) {
//   //   if (data.date[index] !== data.date[index + 1]) {
//   //     newData.push(data[index]);
//   //   }
//   // }

//   let duplicate = data.date.reduce((acc, currentValue, index, array) => {
//     if (array.indexOf(currentValue) != index && !acc.includes(currentValue))
//       acc.push(currentValue);
//     return acc;
//   }, []);
  
//   console.log(duplicate)

//   return data;
// };

// export default GetDataFromGithub;
