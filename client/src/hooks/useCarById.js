import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarById, fetchCarList } from "../redux/actions/actions";

export const useCarById = (carId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarList());
    dispatch(fetchCarById(carId));
  }, [dispatch, carId]);

  const carList = useSelector((state) => state.carList);
  const carListDefaultValue = {
    description: "",
    modelYear: "",
    price: "",
    media: [{ url: "" }],
  };
  const { description, modelYear, price, media } =
    carList.find((carItem) => carItem.id === carId) || carListDefaultValue;

  const carSelectedGeneralInfo = {
    carName: `Jaguar ${modelYear}`,
    imgUrl: `/${media[0].url}`,
    carSummary: description,
    carPrice: price,
  };

  const carSelected = useSelector((state) => state.carCurrent);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const carCurrent = { ...carSelected, ...carSelectedGeneralInfo };

  return { carCurrent, loading, error };
};
