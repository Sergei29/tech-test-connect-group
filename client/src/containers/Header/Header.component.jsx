import React from "react";
import PropTypes from "prop-types";
//style:
import { HeaderContainer } from "./Header.style";

/**
 * @description functional component, page header container
 * @returns {JSX} component markup
 */
const Header = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

Header.defaultProps = {
  children: null,
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default Header;
