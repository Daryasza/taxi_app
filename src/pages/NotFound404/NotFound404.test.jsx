import React from "react";
import { render } from "@testing-library/react";
import { NotFound404 } from './NotFound404'

describe('NotFound404', () => {
  it('renders correctly', () => {
    const { container } = render(<NotFound404/>)
    expect(container.innerHTML).toMatch('Страница не найдена')
  })
})