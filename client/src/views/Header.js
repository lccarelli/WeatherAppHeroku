import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: 'transparent !important',
  },
  flex: {
    flex: 1,
    color: '#fff',

  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Header (classes) {

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.flex}>
            weatherApp
          </div>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
