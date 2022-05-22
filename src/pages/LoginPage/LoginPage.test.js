import React from "react";
import { WithAuthLoginPage } from './LoginPage.jsx'
import { render } from "@testing-library/react";

describe("LoginPage", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<WithAuthLoginPage />);
    expect(getByLabelText('Email:')).toHaveAttribute('name', 'email')
    expect(getByLabelText('Пароль:')).toHaveAttribute('name', 'password')
  });
});
