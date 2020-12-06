import React from "react";
import PropTypes from "prop-types";
//style:
import { CarParticularsContainer } from "./CarParticulars.style";

/**
 * @description functional component for car particulars display
 * @param {Array} {bodystyles list of body styles
 * @param {Array} drivetrain list of drivetrain
 * @param {Object} emissions co emission details
 * @param {Number} passengers} number of passengers
 * @returns {JSX} component markup
 */
const CarParticulars = ({ bodystyles, drivetrain, emissions, passengers }) => {
  /**
   * @description generates bodystyles details
   * @returns {JSX}
   */
  const renderBodyStyles = () =>
    bodystyles.length ? (
      <div className="particularsItem">
        <span>Bodystyle: </span>
        <span>
          {bodystyles.length > 1 ? bodystyles.join(", ") : bodystyles[0]}
        </span>
      </div>
    ) : null;

  /**
   * @description generates drivetrain details
   * @returns {JSX}
   */
  const renderDrivetrain = () =>
    drivetrain.length ? (
      <div className="particularsItem">
        <span>Drivetrain: </span>
        <span>
          {drivetrain.length > 1 ? drivetrain.join(", ") : drivetrain[0]}
        </span>
      </div>
    ) : null;

  /**
   * @description generates emmissions details
   * @returns {JSX}
   */
  const renderEmissions = () =>
    Object.keys(emissions).length ? (
      <div className="particularsItem">
        <span>{emissions.template} :</span>
        <span>{emissions.value}</span>
      </div>
    ) : null;

  /**
   * @description generates passengers details
   * @returns {JSX}
   */
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
