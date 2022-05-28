import React from "react";
import { render } from "@testing-library/react";

import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { BrowserRouter}  from "react-router-dom";

import Header from "./Header"; 

describe('Header', () => {
  it('renders correctly', () => {
    const { container } = render(<Provider store={store}><Header /></Provider>, {wrapper: BrowserRouter})
    expect(container.innerHTML).toMatch('Карта')
    expect(container.innerHTML).toMatch('Профиль')
    expect(container.innerHTML).toMatch('Выйти')
  })
})