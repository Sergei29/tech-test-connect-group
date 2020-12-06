import { renderHook } from "@testing-library/react-hooks";
import moxios from "moxios";
import { Provider } from "react-redux";
import { store, storeWithError } from "../utils/testingUtils";
import { useCarList } from "./useCarList";

describe("useCarList hook", () => {
  it("should return car list", () => {
    const wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );
    const {
      result: {
        current: { carList, error, loading },
      },
    } = renderHook(() => useCarList(), { wrapper });

    expect(carList.length).toBeGreaterThan(0);
    expect(error).toBeNull();
    expect(loading).toBe(false);
  });

  it("should return an error if there is one", () => {
    const wrapper = ({ children }) => (
      <Provider store={storeWithError}>{children}</Provider>
    );
    const {
      result: {
        current: { carList, error, loading },
      },
    } = renderHook(() => useCarList(), { wrapper });

    expect(error).toEqual("Resource not found.");
    expect(carList.length).toEqual(0);
    expect(loading).toBe(false);
  });
});
