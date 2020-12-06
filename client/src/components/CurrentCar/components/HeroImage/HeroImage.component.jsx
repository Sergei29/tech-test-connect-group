import React from "react";
import PropTypes from "prop-types";
//style:
import { HeroImageContainer } from "./HeroImage.style";

const HeroImage = ({ imgUrl, headingText, subText }) => {
  return (
    <HeroImageContainer imgUrl={imgUrl}>
      <div className="heroText">
        <h1>{headingText}</h1>
        <p className="subText">{subText}</p>
      </div>
    </HeroImageContainer>
  );
};

HeroImage.defaultProps = {
  headingText: "",
  subText: "",
};

HeroImage.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  headingText: PropTypes.string,
  subText: PropTypes.string,
};

export default HeroImage;
