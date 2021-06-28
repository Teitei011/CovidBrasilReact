export const fetchData = async (location) => {

  if(location === undefined){
    location= "Brasil"
  }
  
  const url = "https://teitei011.github.io/covid/brazil/" + location + ".json";
  const response = await fetch(url);
  const downloadData = await response.json();
  return downloadData;
};

export default fetchData;