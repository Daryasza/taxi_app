import React from "react";
import { render } from "@testing-library/react";
import { WithAuthSignUpPage } from './SignUpPage'
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { BrowserRouter}  from "react-router-dom";

describe("LoginPage", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<Provider store={store}><WithAuthSignUpPage /></Provider>, {wrapper: BrowserRouter});
    expect(getByLabelText('Email*')).toHaveAttribute('name', 'email')
    expect(getByLabelText('Придумайте пароль')).toHaveAttribute('name', 'password')
  });
});
