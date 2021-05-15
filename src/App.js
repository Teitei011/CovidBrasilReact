import React, { useState, useEffect } from 'react'
import './App.css';


// Design extra
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBBtn } from 'mdb-react-ui-kit';


// Dados estáticos
import cidades from "./data/cidades"
import estados from "./data/estados";


// My Components
import SelectComponent from "./components/selectComponent";
import CovidCardInfo from "./components/covidCardInfo"
import GraphComponents from "./components/GraphsComponent"
import Header from "./components/Header"


// Funçoes 

import fetchData from "./tools/getData";

function App() {
  const [localEscolhido, setLocalEscolhido] = useState("");
  const [selecaoBuffer, setSelecaoBuffer] = useState("");
  const [data, setData] = useState();
  // Put a loading option
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = async (escolha) => {
    document.title = escolha;
    setLocalEscolhido(escolha);

    setIsLoading(true);
    let buffer = await fetchData(escolha);
    console.log(`Buffer: ${buffer}`);
    setData(buffer);
    setIsLoading(false);
  }

  const searchOptions = (value) => {
    let filterOption = cidades.filter(cidade => value === cidade);
    setSelecaoBuffer(filterOption);
  }

  useEffect(() => {
    document.title = "CoronaBrasil";
    handleChange("Brasil");
  }, [])

  return (
    <div className="App">
      <main className="App-header">

        <Header localEscolhido={localEscolhido} />

        <h5>Escolha ou digite a cidade</h5>

        <SelectComponent options={cidades} searchOptions={searchOptions} handleChange={handleChange} /> <br />

        <h5>Ou você pode <br /> Escolher um estado </h5>

        <SelectComponent options={estados} searchOptions={searchOptions} handleChange={handleChange} /><br />

        <MDBBtn rounded color='danger' style={{ "margin-bottom": "5 rem" }} onClick={() => handleChange("Brasil")}>Brasil</MDBBtn> <br />

        <CovidCardInfo data={data} />

        {isLoading ? "" : <GraphComponents titulo={localEscolhido} dados={data} />}

      <div className="small-text">

        Dados atualizados no dia: <br /> {!data ? " 24/08/1998" : data.date[data.date.length - 1]}

        <br />
        <p> Informações retiradas do Ministério da Saúde, link abaixo: </p>

        <p> <a href="http://covid.saude.gov.br/">Source</a></p>
              Total de visitas: <br />
            <img src="https://profile-counter.glitch.me/Teitei011/count.svg" alt="Contador de Visitas"></img>
            <br />
        <p> Bugs, comentários ou sugestões? </p> <br />
        <a href="mailto: stefantleal14@gmail.com">Me mande um email!</a>
        <br /><br />
        </div>
      </main>
    </div>

  );
}

export default App;
