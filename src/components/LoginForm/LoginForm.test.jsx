import React from "react";
import { ConnectedLoginForm } from './LoginForm'
import { HashRouter}  from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';

import { createStore } from 'redux'
import { combineReducers } from "redux";
import authReducer from "../../app/reducers/authReducer";

let store

describe("LoginForm", () => {
  beforeEach(() => {
    store = createStore(
      combineReducers({
        authReducer,
      })
    );
  });

  it("renders correctly", () => {
    const mockDispatch = jest.fn()
    render(<Provider store={store}><ConnectedLoginForm useDispatchHook={() => mockDispatch} /></Provider>, {wrapper: HashRouter})
    
    expect(screen.getByLabelText('Email:')).toHaveAttribute('name', 'email')
    expect(screen.getByLabelText('Пароль:')).toHaveAttribute('name', 'password')
  });
});