import React from "react";
import { shallow, mount } from "enzyme";
import Component from "./components/app";

describe("App", () => {
  it("should match its empty snapshot", () => {
    const shallowed = shallow(<Component />);
    expect(shallowed).toMatchSnapshot();
  });

  it("should increment counter", () => {
    const mounted = mount(<Component />);
    const incBtn = mounted.find('[data-test="incButton"]');
    const output = mounted.find('[data-test="counter"]');
    expect(output.text()).toEqual("0");
    incBtn.at(0).simulate("click");
    expect(output.text()).toEqual("1");
  });

  it("should reset counter", () => {
    const mounted = shallow(<Component />);
    mounted.setState({
      count: 10
    });

    const resetBtn = mounted.find('[data-test="resetButton"]');
    const output = mounted.find('[data-test="counter"]');
    expect(mounted.instance().state.count).toEqual(10);
    resetBtn.simulate("click");
    expect(mounted.instance().state.count).toEqual(0);
  });
});
