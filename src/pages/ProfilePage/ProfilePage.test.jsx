import React from "react";
import { render } from "@testing-library/react";
import { WithAuthProfilePage } from './ProfilePage'

import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { BrowserRouter}  from "react-router-dom";

describe("ProfilePage", () => {
  it("renders correctly", () => {
    const { container } = render(<Provider store={store}><WithAuthProfilePage /></Provider>, {wrapper: BrowserRouter})
    expect(container.innerHTML).toMatch('Профиль')
  });
});
