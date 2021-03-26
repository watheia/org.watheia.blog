import * as React from "react"
import { render } from "@testing-library/react"
import Image from "."

describe("ui.atoms.Image", () => {
  it("should be rendered correctly", () => {
    const { asFragment } = render(<Image src="https://cdn.watheia.org/assets/icon.png" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
