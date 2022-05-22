import React from "react";
import { render } from "@testing-library/react";
import { WithAuthProfilePage } from './ProfilePage'

describe("ProfilePage", () => {
  it("renders correctly", () => {
    const { container } = render(<WithAuthProfilePage />);
    expect(container.innerHTML).toMatch("Hello, it's a <strong>profile</strong> page");
  });
});
