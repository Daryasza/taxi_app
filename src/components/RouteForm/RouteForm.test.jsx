import React from "react";
import { ConnectedRouteForm } from './RouteForm'
import { BrowserRouter }  from "react-router-dom";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';

import { createStore } from 'redux'
import { combineReducers } from "redux";

import addressReducer from "../../app/reducers/addressReducer";

let store

describe("LoginPage", () => {

  beforeEach(() => {
    store = createStore(
      combineReducers({
        addressReducer,
      })
    );
  });

  it("renders correctly", () => {
    const { container } = render(<Provider store={store}><ConnectedRouteForm /></Provider>, {wrapper: BrowserRouter});
    expect(container.innerHTML).toMatch('Откуда') 
    expect(container.innerHTML).toMatch('Куда') 
  });
});
