import React from "react"
import { render } from "@testing-library/react"
import { WithAuthMapPage } from './MapPage'
import { Provider } from 'react-redux'
import { BrowserRouter}  from "react-router-dom"
import { createStore } from 'redux'
import { combineReducers } from "redux"
import cardReducer from "../../app/reducers/cardReducer"
import authReducer from "../../app/reducers/authReducer"

let store

jest.mock("../../components/Map/Map", () => ({
  ConnectedMap: () => <div>Map</div> 
}));

describe("Map Page", () => {

  beforeEach(() => {
    store = createStore(
      combineReducers({
        cardReducer,
        authReducer
      })
    );
  });

  it("renders correctly", () => {
    const { container } = render(<Provider store={store}><WithAuthMapPage /></Provider>, {wrapper: BrowserRouter})
    expect(container.innerHTML).toMatch('Map')
  });

  it('contains expected className', () => {
    const { container } = render(<Provider store={store}><WithAuthMapPage /></Provider>, {wrapper: BrowserRouter})
    expect(container.getElementsByClassName('mapPage').length).toBe(1);
  })
});