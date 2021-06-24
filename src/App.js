import Home from "./pages/Home";
import Vaccines from "./pages/Vaccines";
import Footer from "./components/footer";

import { BrowserRouter, Switch, Route } from "react-router-dom";


import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
  background-color: #282c34;
  display: grid;
  grid-template-rows: repeat(auto-fill);
  font-size: 15px;
  color: white;
`;

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Switch>
          <Route to="/" exact>
            <Home />
          </Route>
          <Route exact to="/vaccines">
            <Vaccines />
          </Route>
        </Switch>
      </BrowserRouter>

      <Footer />
    </AppContainer>
  );
}

export default App;
