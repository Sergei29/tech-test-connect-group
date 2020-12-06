import React from "react";
import { NavLink } from "react-router-dom";
//style:
import { NavContainer } from "./Navigation.style";

/**
 * @description functional component for navigation menu
 * @returns {JSX} component markup
 */
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
