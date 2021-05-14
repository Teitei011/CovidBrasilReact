import React, { useState, useEffect} from 'react'
import './App.css';


// Design extra
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBBtn} from 'mdb-react-ui-kit';


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

  const handleChange = async(escolha) => {
    document.title = escolha;
    setLocalEscolhido(escolha);

    setIsLoading(true);
    let buffer = await fetchData(escolha);
    setData(buffer);
    setIsLoading(false);
  }

  const searchOptions = (value) => {
    let filterOption = cidades.filter(cidade => value === cidade);
    setSelecaoBuffer(filterOption);
  }

  useEffect(() => {
    document.title = "CoronaBrasil";
  }, [])

  return (
    <div className="App">
      <main className="App-header">

        <Header localEscolhido={localEscolhido}/>

        <h5>Escolha ou digite a cidade</h5>

        <SelectComponent options={cidades} searchOptions={searchOptions} handleChange={handleChange} /> <br />
        
        <h5>Ou você pode <br /> Escolher um estado </h5>
        
        <SelectComponent options={estados} searchOptions={searchOptions} handleChange={handleChange} /><br />

        <MDBBtn rounded color='danger' style={{"margin-bottom": "5 rem"}}onClick={() => handleChange("Brasil")}>Brasil</MDBBtn> <br />

        <CovidCardInfo data={data}/>

      {isLoading ? "" : <GraphComponents titulo={localEscolhido}  dados={data} />}
      </main>
    </div>
  )
}

export default App;
