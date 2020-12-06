import { shallowRenderer } from "../../../../utils/testingUtils";
import CarParticulars from "./CarParticulars.component";

describe("CarParticulars", () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      bodystyles: ["saloon"],
      drivetrain: ["AWD", "RWD"],
      emissions: { template: "CO2 Emissions $value g/km", value: 99 },
      passengers: 5,
    };
    wrapper = shallowRenderer(CarParticulars, props);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
