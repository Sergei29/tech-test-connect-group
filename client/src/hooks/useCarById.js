import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarById } from "../redux/actions/actions";

export const useCarById = (carId) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchCarById(carId)), [dispatch, carId]);

  const currentCar = useSelector((state) => state.currentCar);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  return { currentCar, loading, error };
};
