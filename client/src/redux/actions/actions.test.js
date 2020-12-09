import moxios from "moxios";
import {
  makeMockStore,
  CAR_LIST,
  ERROR_MESSAGE,
} from "../../utils/testingUtils";
import {
  fetchCarList,
  fetchCarListError,
  fetchCarListStart,
  fetchCarListSuccess,
} from "./actions";
import { INITIAL_STATE } from "../reducers/rootReducer";

describe("fetchCarList action", () => {
  const store = makeMockStore(INITIAL_STATE);
  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("should call fetchCarListSuccess on success api call", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: CAR_LIST });
    });

    store.dispatch(fetchCarList()).then(() => {
      const actionsCalled = store.getActions();
      const expectedActions = [
        fetchCarListStart(),
        fetchCarListSuccess(CAR_LIST),
      ];

      expect(actionsCalled[0].type).toEqual(expectedActions[0].type);
      expect(actionsCalled[1].type).toEqual(expectedActions[1].type);
    });
  });

  it("should call fetchCarListError on failed api call", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({ status: 500, response: new Error(ERROR_MESSAGE) });
    });

    store.dispatch(fetchCarList()).then(() => {
      const expectedActions = [
        fetchCarListStart(),
        fetchCarListError(ERROR_MESSAGE),
      ];
      const actionsCalled = store.getActions();

      expect(actionsCalled[0].type).toEqual(expectedActions[0].type);
      expect(actionsCalled[1].type).toEqual(expectedActions[1].type);
    });
  });
});
