import React from "react"
import { render } from "@testing-library/react"
import { ProfileModal } from './ProfileModal'
import { HashRouter }  from "react-router-dom"


describe("ProfileModal", () => {

  it("renders correctly", () => {
    const { container } = render(<ProfileModal />, {wrapper: HashRouter})
    expect(container.innerHTML).toMatch('Платёжные данные обновлены') 
  });
});
