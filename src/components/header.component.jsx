import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Slide, makeStyles, useScrollTrigger, CssBaseline } from '@material-ui/core';
import PropTypes from 'prop-types';
import Nav from './nav.component';

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
    backgroundColor: "rgba(41, 41, 41, 0.25)",
    backdropFilter: "blur(5px)",
  }
});

const Header = (props) => {
  const appBarClass = appBarStyles();

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar className={appBarClass.root}>
            <Toolbar>
              <Nav />
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </React.Fragment>
    </div>
  );
}

export default Header;
