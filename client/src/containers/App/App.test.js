import { mountRendererReduxConnected } from "../../utils/testingUtils";
import App from "./App.component";

describe("App", () => {
  let mountWrapper;

  beforeEach(() => {
    mountWrapper = mountRendererReduxConnected(App);
  });

  it("should match the snapshot", () => {
    expect(mountWrapper).toMatchSnapshot();
  });

  it("should contain Header component", () => {
    expect(mountWrapper.find("Header").length > 0).toBe(true);
  });
  it("should contain Main component", () => {
    expect(mountWrapper.find("Main").length > 0).toBe(true);
  });
  it("should contain Footer component", () => {
    expect(mountWrapper.find("Footer").length > 0).toBe(true);
  });
});
