import React from "react";
//style:
import { HeroImageContainer } from "./HeroImage.style";

const HeroImage = ({
  imgUrl,
  headingText,
  subText,
  buttonText,
  onButtonClick = () => {},
}) => {
  return (
    <HeroImageContainer imgUrl={imgUrl}>
      <div class="heroText">
        <h1>{headingText}</h1>
        <p className="subText">{subText}</p>
        <button onClick={onButtonClick}>{buttonText}</button>
      </div>
    </HeroImageContainer>
  );
};

export default HeroImage;
