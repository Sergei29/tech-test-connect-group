import React from "react";
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

export default HeroImage;
