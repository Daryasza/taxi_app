import React from "react";
import LoginPage from './LoginPage.jsx'
import { render } from "@testing-library/react";

describe("LoginPage", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<LoginPage />);
    expect(getByLabelText('Email:')).toHaveAttribute('name', 'email')
    expect(getByLabelText('Пароль:')).toHaveAttribute('name', 'password')
  });
});
