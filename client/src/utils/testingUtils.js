import React from "react";
import { shallow, mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

const store = mockStore({
  carList: [
    {
      id: "xe",
      modelYear: "k17",
      url: "/vehicle/xe",
      description:
        "The most advanced, efficient and refined sports saloon that Jaguar has ever produced",
      price: "£30,000",
      media: [{ media: "vehicle", url: "assets/images/xe_k17.jpg" }],
    },
    {
      id: "xf",
      modelYear: "k17",
      url: "/vehicle/xf",
      description:
        "Luxury business saloon with distinctive design, dynamic drive and state-of-the-art technologies.",
      price: "£36,000",
      media: [{ media: "vehicle", url: "assets/images/xf_k17.jpg" }],
    },
  ],
  carCurrent: {
    id: "xe",
    meta: {
      passengers: 5,
      drivetrain: ["AWD", "RWD"],
      bodystyles: ["saloon"],
      emissions: { template: "CO2 Emissions $value g/km", value: 99 },
    },
  },
  error: null,
  loading: false,
});

export const shallowRendererReduxConnected = (ComponentName, props = {}) =>
  shallow(
    <Provider store={store}>
      <BrowserRouter>
        <ComponentName {...props} />
      </BrowserRouter>
    </Provider>
  );

export const mountRendererReduxConnected = (ComponentName, props = {}) =>
  mount(
    <Provider store={store}>
      <BrowserRouter>
        <ComponentName {...props} />
      </BrowserRouter>
    </Provider>
  );

export const shallowRenderer = (ComponentName, props = {}) =>
  shallow(<ComponentName {...props} />);

export const mountRenderer = (ComponentName, props = {}) =>
  mount(
    <BrowserRouter>
      <ComponentName {...props} />
    </BrowserRouter>
  );
