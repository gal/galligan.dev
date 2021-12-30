import React from "react";

import { Typography, AppBar, Toolbar, Button, IconButton, Container, Link, Drawer } from "@mui/material";
import { GitHub, LinkedIn, Menu } from "@mui/icons-material";

import styles from './Nav.module.css';

export default function Nav() {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };


  return (
    <AppBar
      color="secondary"
      position="static"
    >
      <Container>
        <Toolbar disableGutters style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body1">
            <Link href="/" underline="none" color="inherit" style={{ padding: '1rem' }}>
              Thomas Galligan
            </Link>
          </Typography>

          <div className={styles.nav}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '30vw',
                alignItems: 'center',
                marginRight: '1rem'
              }}
            >
              <Button variant="contained" href="/blog">Blog</Button>
              <Button variant="contained" href="/projects">Projects</Button>
              <Button variant="contained" href="/contact">Contact</Button>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <IconButton
                href="https://github.com/gal"
                aria-label="GitHub"
              >
                <GitHub color="success" />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/gal1/"
                aria-label="LinkedIn"
              >
                <LinkedIn color="success" />
              </IconButton>
            </div>
          </div>

          <IconButton aria-label="menu" className={styles.hamburger} onClick={() => { toggleDrawer() }}>
            <Menu className={styles.hamburger} color="success" />
          </IconButton>
          <Drawer
            open={open}
            anchor="top"
            onClose={() => { toggleDrawer() }}
          >
            <ul
              className={styles.mobileNav}
              style={{
                listStyle: 'none',
                padding: '2em 0',
                paddingLeft: '2em',
              }}
            >
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
            </ul>
          </Drawer>


        </Toolbar>
      </Container>
    </AppBar>
  )
}
