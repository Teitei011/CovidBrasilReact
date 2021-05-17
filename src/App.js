import React, { useState, useEffect } from 'react'
import './App.css';


// Design extra
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBBtn } from 'mdb-react-ui-kit';


// Dados estáticos
import cidades from "./data/cidades"
import estados from "./data/estados";


// My Components
import CovidCardInfo from "./components/covidCardInfo"
import GraphComponents from "./components/GraphsComponent"
import Header from "./components/Header"
import Footer from "./components/footer"

import SelectComponent from "./components/searchSelectComponent";

// Funçoes ./components/searchSelectComponent

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

        <Header localEscolhido={localEscolhido} />

        <h5>Escolha ou digite a cidade</h5>

        <SelectComponent className="App-Header" items={cidades} handleChange={handleChange} /> <br />

        <h5>Ou você pode <br /> Escolher um estado </h5>

        <SelectComponent items={estados} handleChange={handleChange} /><br />

        <MDBBtn rounded color='danger' style={{ "margin-bottom": "5 rem" }} onClick={() => handleChange("Brasil")}>Brasil</MDBBtn> <br />

        <CovidCardInfo data={data} /> <br />

        {isLoading ? "" : <GraphComponents titulo={localEscolhido} dados={data} />}

        <Footer data={data} />
    </div>

  );
}

export default App;
