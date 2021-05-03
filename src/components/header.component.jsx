import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Slide, makeStyles, useScrollTrigger } from '@material-ui/core';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from './nav.component';
import '../assets/styles/header.scss';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired
};

const appBarStyles = makeStyles({
  root: {
    backgroundColor: "rgba(10, 25, 47, 0.85)",
    backdropFilter: "blur(5px)",
    //boxShadow: "none"
  }
});

const linkBtnStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    
  }
});

const Header = (props) => {
  const appBarClass = appBarStyles();
  const linkBtnClass = linkBtnStyles();

  return (
    <div className="header">
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar className={appBarClass.root}>
            <Toolbar className={linkBtnClass.root}>
              {/* <Link to="/">About</Link>
              <Link to="/portfolio">Projects</Link>
              <Link to="/contact">Contact</Link> */}
              <Nav></Nav>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </React.Fragment>
    </div>
  );
}

export default Header;
