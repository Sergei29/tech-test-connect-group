import React from "react";
//style:
import { FooterContainer } from "./Footer.style";

const Footer = ({ children }) => {
  return (
    <FooterContainer>
      {children}
      <small>
        This page is created as a technical test for training purposes only.
      </small>
    </FooterContainer>
  );
};

export default Footer;
