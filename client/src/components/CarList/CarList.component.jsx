import React from "react";
import { useCarList } from "../../hooks/useCarList";
//components:
import CarListItem from "./components/CarListItem";
//style:
import { CarListContainer } from "./CarList.style";

/**
 * @description functional component for car list
 * @returns {JSX} component markup
 */
const CarList = () => {
  const { loading, carList, error } = useCarList();

  let displayCarList = null;
  if (loading) displayCarList = <p>Loading...</p>;
  if (error) displayCarList = <p>{error}</p>;
  if (carList.length) {
    displayCarList = carList.map(
      ({ id, media, url, modelYear, description, price }) => (
        <CarListItem
          key={id}
          carName={`Jaguar ${modelYear}`}
          imgUrl={`/${media[0].url}`}
          carDetailsUrl={url}
          carSummary={description}
          carPrice={price}
        />
      )
    );
  }

  return <CarListContainer>{displayCarList}</CarListContainer>;
};

export default CarList;
