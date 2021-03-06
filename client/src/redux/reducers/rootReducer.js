import actionsTypes from "../actions/actions.types";

export const INITIAL_STATE = {
  carList: [],
  carCurrent: {},
  error: null,
  loading: false,
};

/**
 * @description state reducer, that updates the state
 * @param {Object} state state value
 * @param {Object} action action fired
 * @returns {Object} new state.
 */
const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_CARLIST_START:
    case actionsTypes.FETCH_CAR_BY_ID_START:
      return {
        ...state,
        loading: true,
      };
    case actionsTypes.FETCH_CARLIST_ERROR:
    case actionsTypes.FETCH_CAR_BY_ID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionsTypes.FETCH_CARLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        carList: action.payload,
      };
    case actionsTypes.FETCH_CAR_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        carCurrent: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
