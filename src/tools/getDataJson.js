export const getData = async (location) =>{
    const url =    "https://teitei011.github.io/covid/brazil/" + location + ".json";
    const response = await fetch(url);
    const downloadData = await response.json();
    console.log(downloadData)

    return downloadData;
}