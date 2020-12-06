import React from "react";
import PropTypes from "prop-types";

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

Footer.defaultProps = {
  children: null,
};

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default Footer;
