import React from "react";
import { useCarById } from "../../hooks/useCarById";

const CurrentCar = ({ match }) => {
  const { loading, currentCar, error } = useCarById(match.params.id);
  const displayCurrentCar = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return (
      <div>
        <p>{currentCar.id}</p>
        <p>{currentCar.description}</p>
        <p>{currentCar.price}</p>
      </div>
    );
  };
  return <div>{displayCurrentCar()}</div>;
};

export default CurrentCar;
