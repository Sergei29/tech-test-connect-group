import React, { useEffect, useState } from "react";
import { useCarById } from "../../hooks/useCarById";
//components:
import HeroImage from "./components/HeroImage";

const CurrentCar = ({ match }) => {
  const [showDetails, setShowDetails] = useState(false);
  const selectedId = match.params.id;
  const { loading, carCurrent, error } = useCarById(selectedId);
  console.log("carCurrent :>> ", carCurrent);
  const buttonClickHandler = () => setShowDetails(true);

  return (
    <div>
      <HeroImage
        imgUrl={carCurrent.imgUrl}
        headingText={`${carCurrent.carName} ${carCurrent.id}`}
        subText={carCurrent.carSummary}
        buttonText="see vehicle particulars"
        onButtonClick={buttonClickHandler}
      />
      {/* Dropdown */}
    </div>
  );
};

export default CurrentCar;
