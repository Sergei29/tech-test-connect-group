import { shallowRenderer } from "../../../../utils/testingUtils";
import HeroImage from "./HeroImage.component";

describe("HeroImage", () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      headingText: "Jaguar k17 xe",
      imgUrl: "/assets/images/xe_k17.jpg",
      subText:
        "The most advanced, efficient and refined sports saloon that Jaguar has ever produced",
    };
    wrapper = shallowRenderer(HeroImage, props);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
