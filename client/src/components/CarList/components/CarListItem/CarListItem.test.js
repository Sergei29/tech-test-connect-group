import { shallowRenderer } from "../../../../utils/testingUtils";
import CarListItem from "./CarListItem.component";

describe("CarListItem", () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      carName: "Jaguar k17 xe",
      imgUrl: "assets/images/xe_k17.jpg",
      carDetailsUrl: "/vehicle/xe",
      carSummary:
        "The most advanced, efficient and refined sports saloon that Jaguar has ever produced",
      carPrice: "£30,000",
    };
    wrapper = shallowRenderer(CarListItem, props);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
