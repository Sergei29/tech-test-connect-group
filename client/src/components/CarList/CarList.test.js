import { mountRendererReduxConnected } from "../../utils/testingUtils";
import CarList from "./CarList.component";

describe("CarList", () => {
  let mountWrapper;

  beforeEach(() => {
    mountWrapper = mountRendererReduxConnected(CarList);
  });

  it("should match the snapshot", () => {
    expect(mountWrapper).toMatchSnapshot();
  });

  it("should contain CarListItem component(s)", () => {
    expect(mountWrapper.find("CarListItem").length > 0).toBe(true);
  });
});
