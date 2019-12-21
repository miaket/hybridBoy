import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './styles/inputButton.scss';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiButton-root': {
      marginRight: theme.spacing(1),
    },
  },
}));

const InputButton = ({
  children,
  onClick
}) => {
  const classes = useStyles();
  return (
  <div className={`input-button ${classes.root}`}>
    <Button
      className={`${classes.root}`}
      variant="contained"
      color="primary"
      onClick={e => onClick()}
    >
      { children }
    </Button>
  </div>
)};

export default InputButton;