import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer.component";

describe("Footer", () => {
  let wrapper;

  it("should match the snapshot", () => {
    wrapper = shallow(<Footer></Footer>);
    expect(wrapper).toMatchSnapshot();
  });

  it("should have content displayed if there is any", () => {
    wrapper = shallow(
      <Footer>
        <p>Footer content.</p>
      </Footer>
    );
    expect(wrapper.contains(<p>Footer content.</p>)).toBe(true);
  });
});
