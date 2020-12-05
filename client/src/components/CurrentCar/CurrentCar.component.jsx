import React, { useEffect } from "react";
import { useCarById } from "../../hooks/useCarById";
//components:
import HeroImage from "./components/HeroImage";

const CurrentCar = ({ match }) => {
  const selectedId = match.params.id;
  const { loading, carCurrent, error } = useCarById(selectedId);

  useEffect(() => {
    console.log("carCurrent :>> ", carCurrent);
  }, [carCurrent]);

  const displayCurrentCar = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return carCurrent ? (
      <div>
        <h2>{`${carCurrent.carName} ${carCurrent.id}`}</h2>
        <p>{carCurrent.carSummary}</p>
        <p>{carCurrent.description}</p>
        <p>{carCurrent.carPrice}</p>
      </div>
    ) : null;
  };
  return (
    <div>
      <HeroImage
        imgUrl={carCurrent.imgUrl}
        headingText={`${carCurrent.carName} ${carCurrent.id}`}
        subText={carCurrent.description}
        buttonText="see vehicle particulars"
        onButtonClick={() => console.log("dropdown")}
      />
      {/* {displayCurrentCar()} */}
    </div>
  );
};

export default CurrentCar;
