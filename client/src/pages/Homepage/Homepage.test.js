import { shallowRenderer } from "../../utils/testingUtils";
import Homepage from "./Homepage.component";

describe("Homepage", () => {
  it("should match the snapshot", () => {
    const wrapper = shallowRenderer(Homepage);
    expect(wrapper).toMatchSnapshot();
  });
});
