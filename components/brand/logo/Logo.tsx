import React from "react"
import Image from "components/atoms/image"
import { makeStyles, PaletteType } from "@material-ui/core"

export const defaultWidth = 371.122

export const defaultHeight = 98.2574

export const primarySource = "https://cdn.watheia.org/assets/logo-modern-light.svg"

export const alternateSource = "https://cdn.watheia.org/assets/logo-modern-dark.svg"

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    width: defaultWidth * 0.4,
    height: defaultHeight * 0.4,
    [theme.breakpoints.up("md")]: {
      width: defaultWidth * 0.6,
      height: defaultHeight * 0.6,
    },
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
}))

export interface LgoProps {
  alt?: string
  background?: PaletteType
  maxWidth?: number | string
  maxHeight?: number | string
  uri?: string
  title?: string
}

// TODO fix typings
export const Logo = ({
  background,
  alt = "Home",
  maxWidth = defaultWidth,
  maxHeight = defaultHeight,
  title = "Home",
  uri = "/",
}: LgoProps): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={classes.logoContainer} style={{ maxWidth, maxHeight }}>
      <a href={uri} title={title}>
        <Image
          className={classes.logoImage}
          src={background === "light" ? primarySource : alternateSource}
          alt={alt}
          lazy={false}
        />
      </a>
    </div>
  )
}

export default Logo
