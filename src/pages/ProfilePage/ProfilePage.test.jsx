import React from "react"
import { render } from "@testing-library/react"
import { ConnectedProfilePage } from './ProfilePage'

import { Provider } from 'react-redux'
import { HashRouter}  from "react-router-dom"

import { createStore } from 'redux'
import { combineReducers } from "redux"
import cardReducer from "../../app/reducers/cardReducer"
import authReducer from "../../app/reducers/authReducer"

let store

jest.mock('../../components/CardForm/CardForm', () => ({
  ConnectedCardForm: () => <div>CardForm</div> 
}))

jest.mock("../../components/ProfileModal/ProfileModal", () => ({
  ProfileModal: () => <div>ProfileModal</div> 
}))

jest.mock("../../components/Header/Header",  () => ({
  ConnectedHeader: () => <div>Header</div> 
}))


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
    const { container } = render(<Provider store={store}><ConnectedProfilePage /></Provider>, {wrapper: HashRouter})
    expect(container.innerHTML).toMatch('Header')
  })
})
