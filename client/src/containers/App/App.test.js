import { shallow } from "enzyme";
import App from "./App";

test("renders without crash", () => {
  shallow(<App />);
});
