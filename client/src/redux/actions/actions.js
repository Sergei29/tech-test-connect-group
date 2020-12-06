import actionsTypes from "./actions.types";
import { axiosVehicleApi } from "./axios.instances";
import { getErrorMessage } from "./utils";

export const fetchCarListStart = () => ({
  type: actionsTypes.FETCH_CARLIST_START,
});

export const fetchCarListSuccess = (carList) => ({
  type: actionsTypes.FETCH_CARLIST_SUCCESS,
  payload: carList,
});

export const fetchCarListError = (errorMessage) => ({
  type: actionsTypes.FETCH_CARLIST_ERROR,
  payload: errorMessage,
});

export const fetchCarList = () => async (dispatch) => {
  dispatch(fetchCarListStart());
  try {
    const { data } = await axiosVehicleApi.get("/vehicles");
    return dispatch(fetchCarListSuccess(data));
  } catch (error) {
    return dispatch(fetchCarListError(getErrorMessage(error, "carList")));
  }
};

export const fetchCarByIdStart = () => ({
  type: actionsTypes.FETCH_CAR_BY_ID_START,
});

export const fetchCarByIdSuccess = (carById) => ({
  type: actionsTypes.FETCH_CAR_BY_ID_SUCCESS,
  payload: carById,
});

export const fetchCarByIdError = (errorMessage) => ({
  type: actionsTypes.FETCH_CAR_BY_ID_ERROR,
  payload: errorMessage,
});

export const fetchCarById = (carId) => async (dispatch) => {
  dispatch(fetchCarByIdStart());
  try {
    const { data } = await axiosVehicleApi.get(`/vehicle/${carId}`);
    return dispatch(fetchCarByIdSuccess(data));
  } catch (error) {
    return dispatch(fetchCarByIdError(getErrorMessage(error, "currentCar")));
  }
};
