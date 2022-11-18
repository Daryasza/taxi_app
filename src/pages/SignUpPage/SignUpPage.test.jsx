import React from "react"
import { render } from "@testing-library/react"
import { ConnectedSignUpPage } from './SignUpPage'
import { Provider } from 'react-redux'
import { HashRouter}  from "react-router-dom"

import { createStore } from 'redux'
import { combineReducers } from "redux"
import authReducer from "../../app/reducers/authReducer"

let store

jest.mock("../../components/SignUpForm/SignUpForm.jsx", () => ({
  ConnentedSignUpForm: () => <div>SignUpForm</div> 
}));

describe("SignUpPage", () => {

  beforeEach(() => {
    store = createStore(
      combineReducers({
        authReducer
      })
    )
  })

  it("renders correctly", () => {
    const { container } = render(<Provider store={store}><ConnectedSignUpPage /></Provider>, {wrapper: HashRouter});
    expect(container.innerHTML).toMatch('SignUpForm')
  });
});
