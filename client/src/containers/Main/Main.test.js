import { shallowRenderer } from "../../utils/testingUtils";
import Main from "./Main.component";

describe("Main", () => {
  it("should match the snapshot", () => {
    const wrapper = shallowRenderer(Main);
    expect(wrapper).toMatchSnapshot();
  });
});
