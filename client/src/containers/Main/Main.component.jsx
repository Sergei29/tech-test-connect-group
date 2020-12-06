import React from "react";
import PropTypes from "prop-types";
//style:
import { MainContainer } from "./Main.style";

/**
 * @description functional component, page main content container
 * @returns {JSX} component markup
 */
const Main = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

Main.defaultProps = {
  children: null,
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default Main;
