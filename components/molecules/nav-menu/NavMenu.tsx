import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, List, ListItem } from "@material-ui/core"

export interface NavMenuProps {
  className?: string
  title: string
  pages: Array<{ href: string; title: string }>
}

const useStyles = makeStyles((theme) => ({
  menu: {
    display: "flex",
  },
  menuItem: {
    margin: theme.spacing(2),
    "&:last-child": {
      marginBottom: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  menuGroupTitle: {
    textTransform: "uppercase",
    color: "white",
  },
  divider: {
    width: "100%",
  },
  navLink: {
    color: "rgba(255,255,255,.6)",
  },
}))

export const NavMenu = ({ title, pages }: NavMenuProps): JSX.Element => {
  const cl = useStyles()
  return (
    <div className={cl.menu}>
      <List disablePadding className={cl.menuItem}>
        <ListItem disableGutters className={cl.menuGroupItem}>
          <Typography variant="body2" className={cl.menuGroupTitle}>
            {title}
          </Typography>
        </ListItem>
        {pages.map((page, i) => (
          <ListItem disableGutters key={i} className={cl.menuGroupItem}>
            <Typography
              variant="body2"
              component={"a"}
              href={page.href}
              className={clsx(cl.navLink, "submenu-item")}
            >
              {page.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default NavMenu
