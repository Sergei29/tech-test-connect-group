import actionsTypes from "./actions.types";
import { axiosVehicleApi } from "./axios.instances";
import { getErrorMessage } from "./utils";

/**
 * @description action creator function
 * @returns {Object} action  FETCH_CARLIST_START
 */
export const fetchCarListStart = () => ({
  type: actionsTypes.FETCH_CARLIST_START,
});

/**
 * @description action creator function
 * @returns {Object} action  FETCH_CARLIST_SUCCESS
 */
export const fetchCarListSuccess = (carList) => ({
  type: actionsTypes.FETCH_CARLIST_SUCCESS,
  payload: carList,
});

/**
 * @description action creator function
 * @returns {Object} action FETCH_CARLIST_ERROR
 */
export const fetchCarListError = (errorMessage) => ({
  type: actionsTypes.FETCH_CARLIST_ERROR,
  payload: errorMessage,
});

/**
 * @description api call for car list data
 * @returns {Function} function that dispatches actions at different stages
 */
export const fetchCarList = () => async (dispatch) => {
  dispatch(fetchCarListStart());
  try {
    const { data } = await axiosVehicleApi.get("/vehicles");
    return dispatch(fetchCarListSuccess(data));
  } catch (error) {
    return dispatch(fetchCarListError(getErrorMessage(error, "carList")));
  }
};

/**
 * @description action creator function
 * @returns {Object} action FETCH_CAR_BY_ID_START
 */
export const fetchCarByIdStart = () => ({
  type: actionsTypes.FETCH_CAR_BY_ID_START,
});

/**
 * @description action creator function
 * @returns {Object} action FETCH_CAR_BY_ID_SUCCESS
 */
export const fetchCarByIdSuccess = (carById) => ({
  type: actionsTypes.FETCH_CAR_BY_ID_SUCCESS,
  payload: carById,
});

/**
 * @description action creator function
 * @returns {Object} action FETCH_CAR_BY_ID_ERROR
 */
export const fetchCarByIdError = (errorMessage) => ({
  type: actionsTypes.FETCH_CAR_BY_ID_ERROR,
  payload: errorMessage,
});

/**
 * @description api call for car by ID data
 * @returns {Function} function that dispatches actions at different stages
 */
export const fetchCarById = (carId) => async (dispatch) => {
  dispatch(fetchCarByIdStart());
  try {
    const { data } = await axiosVehicleApi.get(`/vehicle/${carId}`);
    return dispatch(fetchCarByIdSuccess(data));
  } catch (error) {
    return dispatch(fetchCarByIdError(getErrorMessage(error, "currentCar")));
  }
};
