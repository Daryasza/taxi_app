import React from "react"
import { render } from "@testing-library/react"
import { MapModal } from './MapModal'
import { BrowserRouter }  from "react-router-dom"


describe("MapModal", () => {

  it("renders correctly", () => {
    const { container } = render(<MapModal />, {wrapper: BrowserRouter})
    expect(container.innerHTML).toMatch('Вы пока не можете вызвать такси') 
  });
});
