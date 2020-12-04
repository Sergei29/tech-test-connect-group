import React from "react";
import { NavLink } from "react-router-dom";
//style:
import { NavContainer } from "./Navigation.style";

const Navigation = () => {
  return (
    <NavContainer>
      <NavLink exact to="/">
        Homepage
      </NavLink>
    </NavContainer>
  );
};

export default Navigation;
