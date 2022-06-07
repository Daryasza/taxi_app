import React from "react";
import { WithAuthLoginPage } from './LoginPage.jsx'
import { BrowserRouter}  from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';

import { createStore } from 'redux'
import { combineReducers } from "redux";
import authReducer from "../../app/reducers/authReducer";

let store

describe("LoginPage", () => {
  beforeEach(() => {
    store = createStore(
      combineReducers({
        authReducer,
      })
    );
  });

  it("renders correctly", () => {
    render(<Provider store={store}><WithAuthLoginPage /></Provider>, {wrapper: BrowserRouter})
    expect(screen.getByLabelText('Email:')).toHaveAttribute('name', 'email')
    expect(screen.getByLabelText('Пароль:')).toHaveAttribute('name', 'password')
  });
});
