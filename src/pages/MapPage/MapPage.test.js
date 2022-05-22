import React from "react";
import { render } from "@testing-library/react";
import { MapPage } from './MapPage'

jest.mock("../../components/Map/Map", () => ({
  Map: () => <div>Map</div> 
}));


describe("Map Page", () => {

  it("renders correctly", () => {
    const { container } = render(<MapPage />)
    expect(container.innerHTML).toMatch('Map')
  });

  it('contains expected className', () => {
    const { container } = render(<MapPage />)
    expect(container.getElementsByClassName('mapPage').length).toBe(1);
  })
});