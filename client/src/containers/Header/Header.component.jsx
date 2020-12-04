import React from "react";
import { HeaderContainer } from "./Header.style";

const Header = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

export default Header;
