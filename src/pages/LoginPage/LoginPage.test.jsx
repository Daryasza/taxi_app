import React from "react";
import { WithAuthLoginPage } from './LoginPage.jsx'
import { BrowserRouter}  from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import { store } from '../../app/store';

describe("LoginPage", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<Provider store={store}><WithAuthLoginPage /></Provider>, {wrapper: BrowserRouter});
    expect(screen.getByLabelText('Email:')).toHaveAttribute('name', 'email')
    expect(screen.getByLabelText('Пароль:')).toHaveAttribute('name', 'password')
  });
});
