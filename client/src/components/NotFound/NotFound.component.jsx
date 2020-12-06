import React from "react";
import PropTypes from "prop-types";

const NotFound = ({ error }) => {
  return (
    <div>
      <h2>Page not found.</h2>
      <br />
      {error ? <p>{error}</p> : null}
    </div>
  );
};

NotFound.defaultProps = {
  error: null,
};

NotFound.propTypes = {
  error: PropTypes.string,
};

export default NotFound;
