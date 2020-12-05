import React from "react";
//style:
import { FooterContainer } from "./Footer.style";

const Footer = ({ children }) => {
  return (
    <FooterContainer>
      {children}
      <small>
        This page is created for training purposes only as a technical test.
      </small>
    </FooterContainer>
  );
};

export default Footer;
