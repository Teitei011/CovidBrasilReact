import { React } from "react";

const convertString2Date = (date) => {
  let parts = date.split("-");
  return new Date(parts[0], parts[1] - 1, parts[2]).toDateString();
};

const fetchData = async (location) => {
  const url = "https://teitei011.github.io/covid/brazil/" + location + ".json";
  const response = await fetch(url);
  const downloadData = await response.json();

  return downloadData;
};


export default fetchData;
