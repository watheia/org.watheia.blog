import * as React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import Typography from "@material-ui/core/Typography"
import Link from "components/atoms/link"
import Logo from "components/brand/logo"

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  spreader: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}))

interface HeaderProps {
  sections: Array<{
    title: string
    url: string
  }>
  title: string
}

export default function Header(props: HeaderProps) {
  const classes = useStyles()
  const { sections, title } = props

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Logo background="light" />
        <div className={classes.spreader} />
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Link href="/contact">
          <Button variant="outlined" size="small">
            Let's Talk
          </Button>
        </Link>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  )
}
