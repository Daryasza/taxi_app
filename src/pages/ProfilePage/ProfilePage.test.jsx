import React from "react"
import { render } from "@testing-library/react"
import { WithAuthProfilePage } from './ProfilePage'

import { Provider } from 'react-redux'
import { BrowserRouter}  from "react-router-dom"

import { createStore } from 'redux'
import { combineReducers } from "redux"
import cardReducer from "../../app/reducers/cardReducer"
import authReducer from "../../app/reducers/authReducer"

let store

describe("ProfilePage", () => {

  beforeEach(() => {
    store = createStore(
      combineReducers({
        cardReducer,
        authReducer
      })
    )
  })

  it("renders correctly", () => {
    const { container } = render(<Provider store={store}><WithAuthProfilePage /></Provider>, {wrapper: BrowserRouter})
    expect(container.innerHTML).toMatch('Профиль')
  })
})
