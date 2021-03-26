import React from "react"
import { Box } from "@material-ui/core"
import Image from "."

export const Example = (): JSX.Element => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    padding={2}
    border="1px solid #ccc"
    borderRadius="4px"
  >
    <Image src="https://cdn.watheia.org/assets/icon.png" />
  </Box>
)
