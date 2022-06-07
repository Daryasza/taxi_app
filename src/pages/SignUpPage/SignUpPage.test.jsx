import React from "react"
import { render } from "@testing-library/react"
import { WithAuthSignUpPage } from './SignUpPage'
import { Provider } from 'react-redux'
import { BrowserRouter}  from "react-router-dom"

import { createStore } from 'redux'
import { combineReducers } from "redux"
import authReducer from "../../app/reducers/authReducer"

let store

describe("LoginPage", () => {

  beforeEach(() => {
    store = createStore(
      combineReducers({
        authReducer
      })
    )
  })

  it("renders correctly", () => {
    const { getByLabelText } = render(<Provider store={store}><WithAuthSignUpPage /></Provider>, {wrapper: BrowserRouter});
    expect(getByLabelText('Email*')).toHaveAttribute('name', 'email')
    expect(getByLabelText('Придумайте пароль')).toHaveAttribute('name', 'password')
  });
});
