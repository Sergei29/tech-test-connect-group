import { shallowRenderer } from "../../utils/testingUtils";
import Header from "./Header.component";

describe("Header", () => {
  it("should match the snapshot", () => {
    const wrapper = shallowRenderer(Header);
    expect(wrapper).toMatchSnapshot();
  });
});
