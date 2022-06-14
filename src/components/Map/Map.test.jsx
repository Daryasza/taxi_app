import React from "react";
import { render } from "@testing-library/react";
import { Map } from './Map'

jest.mock("mapbox-gl", () => ({
  GeolocateControl: jest.fn(),
  Map: function () {
    this.on = jest.fn();
    this.remove = jest.fn();
  },
  NavigationControl: jest.fn(),
}));

describe("Map ", () => {
  it("renders correctly", () => {
    const { container } = render(<Map />)

    expect(container.getElementsByClassName('map').length).toBe(1);
  });
});