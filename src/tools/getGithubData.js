import { React } from "react";


const fetchData = async (location) => {
  const url = "https://teitei011.github.io/covid/brazil/" + location + ".json";
  const response = await fetch(url);
  const downloadData = await response.json();


  console.log(Object.values(downloadData.daily_deaths_moving_average))

  return downloadData;
};


export default fetchData;