import React from "react"
import { render } from "@testing-library/react"
import { CardForm } from './CardForm'
import { Provider } from 'react-redux';

import { createStore } from 'redux'
import { combineReducers } from "redux";
import authReducer from "../../app/reducers/authReducer";

let store

describe("CardForm", () => {
  beforeEach(() => {
    store = createStore(
      combineReducers({
        authReducer,
      })
    );
  });

  it("renders correctly", () => {
    const { container } = render(<Provider store={store}><CardForm /></Provider>)
    expect(container.innerHTML).toMatch('Ввeдите платежные данные')
  })

})
