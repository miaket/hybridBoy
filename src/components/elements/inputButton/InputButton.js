import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './styles/InputButton.scss';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiButton-root': {
      marginRight: theme.spacing(1),
    },
  },
}));

const InputButton = ({
  children
}) => {
  const classes = useStyles();
  return (
  <div className={`input-button ${classes.root}`}>
    <Button
      className={`${classes.root}`}
      variant="contained"
      color="primary">
      { children }
    </Button>
  </div>
)};

export default InputButton;