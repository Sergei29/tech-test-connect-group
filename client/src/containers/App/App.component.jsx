import React from "react";
//components:
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import Homepage from "../../pages/Homepage";

import { AppContainer } from "./App.style";

const App = () => {
  return (
    <AppContainer>
      <Header>header</Header>
      <Main>
        <Homepage />
      </Main>
      <Footer>footer</Footer>
    </AppContainer>
  );
};

export default App;
