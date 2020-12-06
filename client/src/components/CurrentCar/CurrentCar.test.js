import { mountRendererReduxConnected } from "../../utils/testingUtils";
import CurrentCar from "./CurrentCar.component";

describe("CurrentCar", () => {
  let mountWrapper, props;

  beforeEach(() => {
    props = {
      match: { params: { id: "xe" } },
    };
    mountWrapper = mountRendererReduxConnected(CurrentCar, props);
  });

  it("should match the snapshot", () => {
    expect(mountWrapper).toMatchSnapshot();
  });

  it("should contain HeroImage component)", () => {
    expect(mountWrapper.find("HeroImage").length > 0).toBe(true);
  });

  it("should contain CarParticulars component)", () => {
    expect(mountWrapper.find("CarParticulars").length > 0).toBe(true);
  });
});
