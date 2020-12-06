import React from "react";
import PropTypes from "prop-types";
import { useCarById } from "../../hooks/useCarById";
//components:
import HeroImage from "./components/HeroImage";
import CarParticulars from "./components/CarParticulars";
import NotFound from "../NotFound";

/**
 * @description functional component for selected car fetched by ID
 * @param {Object} {match} Route prop that passes car ID
 * @returns {JSX} component markup
 */
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

CurrentCar.propTypes = {
  match: PropTypes.object.isRequired,
};

export default CurrentCar;
