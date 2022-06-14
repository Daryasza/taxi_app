import React from "react";
import { ConnectedLoginForm } from './LoginForm'
import { BrowserRouter}  from "react-router-dom";
import { render, screen, act, fireEvent } from "@testing-library/react";
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
    render(<Provider store={store}><ConnectedLoginForm useDispatchHook={() => mockDispatch} /></Provider>, {wrapper: BrowserRouter})
    
    expect(screen.getByLabelText('Email:')).toHaveAttribute('name', 'email')
    expect(screen.getByLabelText('Пароль:')).toHaveAttribute('name', 'password')
  });

  describe('on submit', () => {
    it("dispatches log in credentials", async () => {
      const mockDispatch = jest.fn();
      const { getByLabelText, getByText } = render(<Provider store={store}><ConnectedLoginForm useDispatchHook={() => mockDispatch} /></Provider>, {wrapper: BrowserRouter});
      const emailInput = getByLabelText("Email:");
      const passwordInput = getByLabelText("Пароль:");
  
      await act(async () => {
        fireEvent.change(emailInput, { target: { value: "testemail" } });
        fireEvent.change(passwordInput, { target: { value: "testpassword" } });
        fireEvent.click(getByText("Войти"));
      });
  
      expect(mockDispatch).toBeCalledWith({
        payload: { email: "testemail", password: "testpassword" },
        type: "AUTHENTICATE",
      });
    });
  })
});