import React from "react";
import { WithAuthLoginPage } from './LoginPage.jsx'
import { render, screen } from "@testing-library/react";

describe("LoginPage", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<WithAuthLoginPage />);
    expect(screen.getByLabelText('Email:')).toHaveAttribute('name', 'email')
    expect(screen.getByLabelText('Пароль:')).toHaveAttribute('name', 'password')
  });
});
