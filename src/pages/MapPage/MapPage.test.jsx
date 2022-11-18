import React from "react"
import { render } from "@testing-library/react"
import { ConnectedMapPage } from './MapPage'
import { Provider } from 'react-redux'
import { HashRouter}  from "react-router-dom"
import { createStore } from 'redux'
import { combineReducers } from "redux"
import cardReducer from "../../app/reducers/cardReducer"
import authReducer from "../../app/reducers/authReducer"

let store

jest.mock("../../components/Map/Map", () => ({
  ConnectedMap: () => <div>Map</div> 
}));

jest.mock("../../components/Header/Header.jsx", () => ({
  ConnectedHeader: () => <div>Header</div> 
}));

jest.mock("../../components/RouteForm/RouteForm.jsx", () => ({
  ConnectedRouteForm: () => <div>RouteForm</div> 
}));

jest.mock("../../components/MapModal/MapModal.jsx", () => ({
  MapModal: () => <div>MapModal</div> 
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
    const { container } = render(<Provider store={store}><ConnectedMapPage /></Provider>, {wrapper: HashRouter})
    expect(container.innerHTML).toMatch('Map')
  });

  it('contains expected className', () => {
    const { container } = render(<Provider store={store}><ConnectedMapPage /></Provider>, {wrapper: HashRouter})
    expect(container.getElementsByClassName('mapPage').length).toBe(1);
  })
});