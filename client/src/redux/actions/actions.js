import actionsTypes from "./actions.types";
import { axiosVehicleApi } from "./axios.instances";
import { getErrorMessage } from "./utils";

const fetchCarListStart = () => ({
  type: actionsTypes.FETCH_CARLIST_START,
});

const fetchCarListSuccess = (carList) => ({
  type: actionsTypes.FETCH_CARLIST_SUCCESS,
  payload: carList,
});

const fetchCarListError = (errorMessage) => ({
  type: actionsTypes.FETCH_CARLIST_ERROR,
  payload: errorMessage,
});

export const fetchCarList = () => async (dispatch) => {
  dispatch(fetchCarListStart());
  try {
    const { data } = await axiosVehicleApi.get("/vehicles");
    dispatch(fetchCarListSuccess(data));
  } catch (error) {
    dispatch(fetchCarListError(getErrorMessage(error, "carList")));
  }
};

const fetchCarByIdStart = () => ({
  type: actionsTypes.FETCH_CAR_BY_ID_START,
});

const fetchCarByIdSuccess = (carById) => ({
  type: actionsTypes.FETCH_CAR_BY_ID_SUCCESS,
  payload: carById,
});

const fetchCarByIdError = (errorMessage) => ({
  type: actionsTypes.FETCH_CAR_BY_ID_ERROR,
  payload: errorMessage,
});

export const fetchCarById = (carId) => async (dispatch) => {
  dispatch(fetchCarByIdStart());
  try {
    const { data } = await axiosVehicleApi.get(`/vehicle/${carId}`);
    dispatch(fetchCarByIdSuccess(data));
  } catch (error) {
    dispatch(fetchCarByIdError(getErrorMessage(error, "currentCar")));
  }
};
