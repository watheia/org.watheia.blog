import React from "react"
import { render } from "@testing-library/react"
import Logo from "."

describe("brand/Logo", () => {
  it("SHOULD render without crashing", () => {
    render(<Logo />)
  })
})
