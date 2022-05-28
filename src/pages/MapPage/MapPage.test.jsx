import React from "react";
import { render } from "@testing-library/react";
import { WithAuthMapPage } from './MapPage'
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { BrowserRouter}  from "react-router-dom";

jest.mock("../../components/Map/Map", () => ({
  Map: () => <div>Map</div> 
}));


describe("Map Page", () => {

  it("renders correctly", () => {
    const { container } = render(<Provider store={store}><WithAuthMapPage /></Provider>, {wrapper: BrowserRouter})
    expect(container.innerHTML).toMatch('Map')
  });

  it('contains expected className', () => {
    const { container } = render(<Provider store={store}><WithAuthMapPage /></Provider>, {wrapper: BrowserRouter})
    expect(container.getElementsByClassName('mapPage').length).toBe(1);
  })
});