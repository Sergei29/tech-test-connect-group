import React from "react";
import PropTypes from "prop-types";
//style:
import { CarParticularsContainer } from "./CarParticulars.style";

const CarParticulars = ({ bodystyles, drivetrain, emissions, passengers }) => {
  const renderBodyStyles = () =>
    bodystyles.length ? (
      <div className="particularsItem">
        <span>Bodystyle: </span>
        <span>
          {bodystyles.length > 1 ? bodystyles.join(", ") : bodystyles[0]}
        </span>
      </div>
    ) : null;

  const renderDrivetrain = () =>
    drivetrain.length ? (
      <div className="particularsItem">
        <span>Drivetrain: </span>
        <span>
          {drivetrain.length > 1 ? drivetrain.join(", ") : drivetrain[0]}
        </span>
      </div>
    ) : null;

  const renderEmissions = () =>
    Object.keys(emissions).length ? (
      <div className="particularsItem">
        <span>{emissions.template} :</span>
        <span>{emissions.value}</span>
      </div>
    ) : null;

  const renderPassengers = () =>
    passengers ? (
      <div className="particularsItem">
        <span>Passengers: </span>
        <span>{passengers}</span>
      </div>
    ) : null;

  return (
    <CarParticularsContainer>
      {renderBodyStyles()}
      {renderDrivetrain()}
      {renderEmissions()}
      {renderPassengers()}
    </CarParticularsContainer>
  );
};

CarParticulars.defaultProps = {
  bodystyles: [],
  drivetrain: [],
  emissions: {},
  passengers: 0,
};

CarParticulars.propTypes = {
  bodystyles: PropTypes.array,
  drivetrain: PropTypes.array,
  emissions: PropTypes.object,
  passengers: PropTypes.number,
};

export default CarParticulars;
