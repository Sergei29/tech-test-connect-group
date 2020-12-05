import React from "react";
import { truncateString } from "../../../utils/truncateString";
//styles:
import { CarListItemContainer } from "./CarListItem.style";

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

export default CarListItem;
