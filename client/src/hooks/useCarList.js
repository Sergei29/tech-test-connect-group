import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarList } from "../redux/actions/actions";

/**
 * @description custom hook to fetch cars list
 * @returns {Object} list of cars, also loading and error status
 */
export const useCarList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarList());
  }, [dispatch]);

  const carList = useSelector((state) => state.carList);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  return { carList, loading, error };
};
