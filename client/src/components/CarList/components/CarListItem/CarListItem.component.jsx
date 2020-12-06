import React from "react";
import PropTypes from "prop-types";
import { truncateString } from "../../../../utils/truncateString";
//styles:
import { CarListItemContainer } from "./CarListItem.style";

/**
 * @description functional component for car list item
 * @param {String} {carName car mark model
 * @param {String} imgUrl path to image
 * @param {String} carDetailsUrl path to car detals page
 * @param {String} carSummary brief description
 * @param {String} carPrice} price
 * @returns {JSX} component markup
 */
const CarListItem = ({
  carName,
  imgUrl,
  carDetailsUrl,
  carSummary,
  carPrice,
}) => {
  return (
    <CarListItemContainer to={carDetailsUrl}>
      <div className="listItem__image_box">
        <img src={imgUrl} alt={`vehicle ${carName}`} />
      </div>
      <h3 className="listItem__car_name">
        <span>{carName}</span>
      </h3>
      <p className="listItem__car_price">{carPrice}</p>
      <p className="listItem__car_summary">{truncateString(carSummary, 50)}</p>
    </CarListItemContainer>
  );
};

CarListItem.propTypes = {
  carName: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  carDetailsUrl: PropTypes.string.isRequired,
  carSummary: PropTypes.string.isRequired,
  carPrice: PropTypes.string.isRequired,
};

export default CarListItem;
