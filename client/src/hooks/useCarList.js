import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarList } from "../redux/actions/actions";

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
