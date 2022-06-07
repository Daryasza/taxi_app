import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header"; 

import { Provider } from 'react-redux';
import { BrowserRouter}  from "react-router-dom";

import authReducer from "../../app/reducers/authReducer";
import { createStore } from 'redux'
import { combineReducers } from "redux";

let store

describe('Header', () => {
  beforeEach(() => {
    store = createStore(
      combineReducers({
        authReducer,
      })
    );
  });

  it('renders correctly', () => {
    const { container } = render(<Provider store={store}><Header /></Provider>, {wrapper: BrowserRouter})
    expect(container.innerHTML).toMatch('Карта')
    expect(container.innerHTML).toMatch('Профиль')
    expect(container.innerHTML).toMatch('Выйти')
  })
})