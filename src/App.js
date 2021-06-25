import Home from "./pages/Home";
import Vaccines from "./pages/Vaccines";
import Error from "./pages/Error"
import Footer from "./components/footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/vaccines">
            <Vaccines />
          </Route>
          <Route exact path="/:id" >
            <Home/>
          </Route>
          <Route exact path="/vaccines/:id">
            <Vaccines />
          </Route>
          <Route to="*">
            <Error />
          </Route>
        </Switch>
      </Router>
      <Footer date={Date()} />
    </AppContainer>
  );
}

export default App;
