import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import { Provider } from 'react-redux';
import { store } from './app/store';

jest.mock("./pages/LoginPage/LoginPage.jsx", () => ({ WithAuthLoginPage: () => <div>Login Page</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<Provider store={store}><App /></Provider>);
    expect(container.innerHTML).toMatch("Login Page");
  });
});
