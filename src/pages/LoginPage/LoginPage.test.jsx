import React from "react";
import { ConnectedLoginPage } from './LoginPage.jsx'
import { BrowserRouter}  from "react-router-dom";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';

import { createStore } from 'redux'
import { combineReducers } from "redux";
import authReducer from "../../app/reducers/authReducer";


let store

jest.mock("../../components/LoginForm/LoginForm", () => ({
  ConnectedLoginForm: () => <div>LoginForm</div> 
}));

describe("LoginPage", () => {
  beforeEach(() => {
    store = createStore(
      combineReducers({
        authReducer,
      })
    );
  });

  it("renders correctly", () => {
    const { container } = render(<Provider store={store}><ConnectedLoginPage /></Provider>, {wrapper: BrowserRouter})
    expect(container.innerHTML).toMatch('LoginForm')
  });
});
