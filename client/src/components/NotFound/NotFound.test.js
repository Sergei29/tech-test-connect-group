import { shallowRenderer } from "../../utils/testingUtils";
import NotFound from "./NotFound.component";

describe("NotFound", () => {
  let wrapper, props;

  it("should match the snapshot", () => {
    props = { error: "Resource not found." };
    wrapper = shallowRenderer(NotFound, props);
    expect(wrapper).toMatchSnapshot();
  });

  it("should have heading only if no error message", () => {
    wrapper = shallowRenderer(NotFound);
    expect(wrapper.contains(<h2>Page not found.</h2>)).toBe(true);
    expect(wrapper.contains(<p>Resource not found.</p>)).toBe(false);
  });

  it("should have heading and error displayed if there is error message", () => {
    props = { error: "Resource not found." };
    wrapper = shallowRenderer(NotFound, props);
    expect(wrapper.contains(<h2>Page not found.</h2>)).toBe(true);
    expect(wrapper.contains(<p>Resource not found.</p>)).toBe(true);
  });
});
