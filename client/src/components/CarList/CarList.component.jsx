import React from "react";
import { Link } from "react-router-dom";
import { useCarList } from "../../hooks/useCarList";
//style:
import { CarListContainer } from "./CarList.style";
const CarList = () => {
  const { loading, carList, error } = useCarList();

  const displayCarList = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (carList.length) {
      return carList.map(({ id, media, url }) => {
        console.log(media[0].url);
        return (
          <div key={id}>
            <Link to={url}>
              <img src={`/${media[0].url}`} alt="vehicle" />
            </Link>
          </div>
        );
      });
    }
  };

  return <CarListContainer>{displayCarList()}</CarListContainer>;
};

export default CarList;
