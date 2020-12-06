import moxios from "moxios";
import { makeMockStore, CAR_LIST } from "../../utils/testingUtils";
import {
  fetchCarList,
  fetchCarListStart,
  fetchCarListSuccess,
} from "./actions";
import { INITIAL_STATE } from "../reducers/rootReducer";
const store = makeMockStore(INITIAL_STATE);

describe("fetchCarList action", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
    store.clearActions();
  });

  it("should call fetchCarByIdSuccess on successful api call", () => {
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

      expect(actionsCalled).toEqual(expectedActions);
    });
  });
});
