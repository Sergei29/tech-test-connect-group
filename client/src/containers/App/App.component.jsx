import React from "react";
import { Switch, Route } from "react-router-dom";
//components:
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import Navigation from "../../components/Navigation";
import Homepage from "../../pages/Homepage";
import NotFound from "../../components/NotFound";
//style:
import { AppContainer } from "./App.style";

const App = () => {
  return (
    <AppContainer>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route component={NotFound} />
        </Switch>
      </Main>
      <Footer>footer</Footer>
    </AppContainer>
  );
};

export default App;
