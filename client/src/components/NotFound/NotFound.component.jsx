import React from "react";

const NotFound = ({ error }) => {
  return (
    <div>
      <h2>Page not found.</h2>
      <br />
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default NotFound;
