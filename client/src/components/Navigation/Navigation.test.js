import { shallowRenderer } from "../../utils/testingUtils";
import Navigation from "./Navigation.component";

describe("Navigation", () => {
  it("should match the snapshot", () => {
    const wrapper = shallowRenderer(Navigation);
    expect(wrapper).toMatchSnapshot();
  });
});
