import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    height:40,
    width:40
  },
  input: {
    display: 'none',
  },
  div: {
    height: 30,
  }
});

function IconButtons(props) {
  const { classes } = props;
  return (
    <div className={classes.div}>
      <IconButton className={classes.button} aria-label="Delete">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" className={classes.button} aria-label="Add an alarm">
        <Icon>favorite</Icon>
      </IconButton>

    </div>
  );
}

IconButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconButtons);
