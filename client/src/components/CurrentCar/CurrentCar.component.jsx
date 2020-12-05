import React from "react";
import { useCarById } from "../../hooks/useCarById";
//components:
import HeroImage from "./components/HeroImage";
import CarParticulars from "./components/CarParticulars";
import NotFound from "../NotFound";

const CurrentCar = ({ match }) => {
  const selectedId = match.params.id;
  const { loading, carCurrent, error } = useCarById(selectedId);
  const { imgUrl, carName, carSummary, id, meta } = carCurrent;
  const { bodystyles, drivetrain, emissions, passengers } = meta || {
    bodystyles: [],
    drivetrain: [],
    emissions: {},
    passengers: 0,
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <NotFound error={error} />;
  return (
    <div>
      <HeroImage
        imgUrl={imgUrl}
        headingText={`${carName} ${id}`}
        subText={carSummary}
      />
      <CarParticulars
        bodystyles={bodystyles}
        drivetrain={drivetrain}
        emissions={emissions}
        passengers={passengers}
      />
    </div>
  );
};

export default CurrentCar;
