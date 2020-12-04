import React from "react";
//style:
import { HeaderContainer } from "./Header.style";

const Header = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

export default Header;
