import * as createPalette from "@material-ui/core/styles/createPalette"
import { createMuiTheme, responsiveFontSizes, PaletteType } from "@material-ui/core"
import { light, dark } from "./palette"
import { Theme, ThemeOptions } from "@material-ui/core/styles/createMuiTheme"

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    layout: {
      contentWidth: number | string
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    layout?: {
      contentWidth: number | string
    }
  }
}

declare module "@material-ui/core/styles/createPalette" {
  interface TypeBackground {
    paper: string
    default: string
    level2: string
    level1: string
    footer: string
  }

  interface PaletteOptions {
    cardShadow?: string
    alternate: {
      main: string
      dark: string
    }
  }

  interface Palette {
    cardShadow?: string
    alternate: {
      main: string
      dark: string
    }
  }
}

const getTheme = (mode: PaletteType) =>
  responsiveFontSizes(
    createMuiTheme({
      palette: mode === "light" ? light : dark,
      layout: {
        contentWidth: 1236,
      },
      typography: {
        fontFamily: "Roboto Slab",
      },
      zIndex: {
        appBar: 1200,
        drawer: 1100,
      },
    }),
  )

export default getTheme
