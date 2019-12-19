import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      width: 250,
    },
    '& .MuiButton-root': {
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
    },
  },
}));

// Since this component is simple and static, there's no parent container for it.
const ExamplePage = () => {
  const classes = useStyles();
  return (
    <div className="LoginPageContentWrapper">
      <div className={`login-page-content `}>
        <h1>Login</h1>

        <form className={classes.root}>
          <div className="text-field-block">
            <div>
              <TextField
                type={'text'}
                label={'Username'}
              />
            </div>
            <div>
              <TextField
                type={'password'}
                label={'Password'}
              />
            </div>
          </div>

          <div className={`button-block ${classes.root}`}>
            <Button variant="contained" color="primary">
              Login
            </Button>
            <Button color="primary">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExamplePage;
