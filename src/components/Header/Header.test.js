import React from "react";
import Header from "./Header";
import { render, fireEvent, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";


describe('Header', () => {
  it('renders correctly', () => {
    const { container } = render(<Header/>)
    expect(container.innerHTML).toMatch('Карта')
    expect(container.innerHTML).toMatch('Профиль')
    expect(container.innerHTML).toMatch('Выйти')
  })

  it('navigates correctly', () => {
    const navigateTo = jest.fn()
    act(() => {
      render( <Header navigateTo={navigateTo}/> )
    })
    fireEvent.click(screen.getByText('Профиль'));
    expect(navigateTo).toHaveBeenCalledTimes(1);
  })

})