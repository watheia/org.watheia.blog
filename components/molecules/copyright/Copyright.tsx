import * as React from "react"
import { Link, Typography } from "@material-ui/core"

export interface CopyrightProps {
  /**
   * A url to link to when clicked
   */
  url?: string

  /**
   * The name to display in link
   */
  label?: string
}

export const Copyright = ({
  url = "https://watheialabs.com/",
  label = "Watheia Labs, LLC",
}: CopyrightProps): JSX.Element => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href={url}>
        {label}
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  )
}

export default Copyright
