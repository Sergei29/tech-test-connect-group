import axios from "axios";

const API_VEHICLE = process.env.REACT_APP_API_URL;

export const axiosVehicleApi = axios.create({
  baseURL: API_VEHICLE,
});
