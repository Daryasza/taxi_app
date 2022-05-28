import React from "react";
import SignUpPage from "./SignUpPage";
import { render } from "@testing-library/react";

describe("LoginPage", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<SignUpPage />);
    expect(getByLabelText('Email*')).toHaveAttribute('name', 'email')
    expect(getByLabelText('Как вас зовут?*')).toHaveAttribute('name', 'name')
    expect(getByLabelText('Придумайте пароль')).toHaveAttribute('name', 'password')
  });
});
