import React from "react";
import { useCarList } from "../../hooks/useCarList";
//components:
import CarListItem from "./components/CarListItem.component";
//style:
import { CarListContainer } from "./CarList.style";

const CarList = () => {
  const { loading, carList, error } = useCarList();

  const displayCarList = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (carList.length) {
      return carList.map(
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
  };

  return <CarListContainer>{displayCarList()}</CarListContainer>;
};

export default CarList;
