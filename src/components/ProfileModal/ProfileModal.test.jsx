import React from "react"
import { render } from "@testing-library/react"
import { ProfileModal } from './ProfileModal'
import { BrowserRouter }  from "react-router-dom"


describe("ProfileModal", () => {

  it("renders correctly", () => {
    const { container } = render(<ProfileModal />, {wrapper: BrowserRouter})
    expect(container.innerHTML).toMatch('Платёжные данные обновлены') 
  });
});
