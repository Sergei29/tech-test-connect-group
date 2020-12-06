import { renderHook } from "@testing-library/react-hooks";
import { Provider } from "react-redux";
import { store, storeWithError } from "../utils/testingUtils";
import { useCarById } from "./useCarById";

describe("useCarById hook", () => {
  it("should return requested car object, no error, no loading", () => {
    const wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );
    const { result } = renderHook(() => useCarById("xe"), { wrapper });

    const requiredProperties = [
      "id",
      "meta",
      "carName",
      "imgUrl",
      "carSummary",
      "carPrice",
    ];

    requiredProperties.forEach((property) => {
      expect(result.current.carCurrent).toHaveProperty(property);
    });
    expect(result.current.error).toEqual(null);
    expect(result.current.loading).toEqual(false);
  });

  it("should return an error message if wrong car id supplied", () => {
    const wrapper = ({ children }) => (
      <Provider store={storeWithError}>{children}</Provider>
    );
    const {
      result: {
        current: { error },
      },
    } = renderHook(() => useCarById("xesfsfsdfsdf"), {
      wrapper,
    });

    expect(error).toEqual("Resource not found.");
  });
});
