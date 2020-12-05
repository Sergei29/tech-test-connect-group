import React from "react";
import { Switch, Route } from "react-router-dom";
//components:
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import Navigation from "../../components/Navigation";
import Homepage from "../../pages/Homepage";
import CurrentCar from "../../components/CurrentCar";
import NotFound from "../../components/NotFound";
//style:
import { AppContainer } from "./App.style";
import { GlobalStyle } from "./GlobalStyle.style";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header>
          <Navigation />
        </Header>
        <Main>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/vehicle/:id" exact component={CurrentCar} />
            <Route component={NotFound} />
          </Switch>
        </Main>
        <Footer />
      </AppContainer>
    </>
  );
};

export default App;
