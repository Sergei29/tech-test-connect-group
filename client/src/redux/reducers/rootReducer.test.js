import rootReducer, { INITIAL_STATE } from "./rootReducer";
import actionsTypes from "../actions/actions.types";
import { ERROR_MESSAGE, CAR_LIST, CAR_CURRENT } from "../../utils/testingUtils";

describe("root reducer", () => {
  it("should return default state", () => {
    const expectedState = INITIAL_STATE;
    const receivedState = rootReducer(undefined, {});

    expect(receivedState).toEqual(expectedState);
  });

  it(`should handle ${actionsTypes.FETCH_CARLIST_START} event`, () => {
    const prevState = INITIAL_STATE;
    const expectedState = { ...prevState, loading: true };

    const receivedState = rootReducer(INITIAL_STATE, {
      type: actionsTypes.FETCH_CARLIST_START,
    });

    expect(receivedState).toEqual(expectedState);
  });

  it(`should handle ${actionsTypes.FETCH_CARLIST_ERROR} event`, () => {
    const prevState = INITIAL_STATE;
    const expectedState = { ...prevState, error: ERROR_MESSAGE };

    const receivedState = rootReducer(INITIAL_STATE, {
      type: actionsTypes.FETCH_CARLIST_ERROR,
      payload: ERROR_MESSAGE,
    });

    expect(receivedState).toEqual(expectedState);
  });

  it(`should handle ${actionsTypes.FETCH_CARLIST_SUCCESS} event`, () => {
    const prevState = INITIAL_STATE;
    const expectedState = { ...prevState, carList: CAR_LIST };

    const receivedState = rootReducer(INITIAL_STATE, {
      type: actionsTypes.FETCH_CARLIST_SUCCESS,
      payload: CAR_LIST,
    });

    expect(receivedState).toEqual(expectedState);
  });

  it(`should handle ${actionsTypes.FETCH_CAR_BY_ID_SUCCESS} event`, () => {
    const prevState = INITIAL_STATE;
    const expectedState = { ...prevState, carCurrent: CAR_CURRENT };

    const receivedState = rootReducer(INITIAL_STATE, {
      type: actionsTypes.FETCH_CAR_BY_ID_SUCCESS,
      payload: CAR_CURRENT,
    });

    expect(receivedState).toEqual(expectedState);
  });
});
