import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, IconButton, Grid, List, ListItem } from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"
import PinterestIcon from "@material-ui/icons/Pinterest"
import Link from "components/atoms/link"
import Copyright from "components/molecules/copyright"
import Logo from "components/brand/logo"
import NavMenu from "components/molecules/nav-menu"

export interface FooterProps {
  className?: string
  pages: Array<{ href: string; title: string }>
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4, 0),
    },
    background: theme.palette.background.footer,
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 4),
    },
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  groupTitle: {
    textTransform: "uppercase",
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: "rgba(255,255,255,.6)",
    "&:hover": {
      background: "transparent",
    },
    "&:last-child": {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
  menuListContainer: {
    padding: "0 !important",
  },
}))

const Footer = ({ pages, className, ...rest }: FooterProps): JSX.Element => {
  const classes = useStyles()

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Link href="/">
          <Logo background="dark" />
        </Link>
        <List disablePadding>
          <ListItem disableGutters>
            <IconButton className={classes.socialIcon}>
              <FacebookIcon className={classes.icon} />
            </IconButton>
            <IconButton className={classes.socialIcon}>
              <InstagramIcon className={classes.icon} />
            </IconButton>
            <IconButton className={classes.socialIcon}>
              <TwitterIcon className={classes.icon} />
            </IconButton>
            <IconButton className={classes.socialIcon}>
              <PinterestIcon className={classes.icon} />
            </IconButton>
          </ListItem>
        </List>
      </div>
      <Copyright url="/" />
    </div>
  )
}

export default Footer
