import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock("./pages/LoginPage/LoginPage.jsx", () => ({ WithAuthLoginPage: () => <div>Login Page</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch("Login Page");
  });
});
