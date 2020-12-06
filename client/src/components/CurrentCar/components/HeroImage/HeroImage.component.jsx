import React from "react";
import PropTypes from "prop-types";
//style:
import { HeroImageContainer } from "./HeroImage.style";

/**
 * @description functiona lcomponent for Hero Image display
 * @param {String} {imgUrl path ot image
 * @param {String} headingText car make, model
 * @param {String} subText} car short description
 * @returns {JSX} component markup
 */
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
