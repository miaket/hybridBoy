import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Since this component is simple and static, there's no parent container for it.
const ExamplePage = () => {
  return (
    <div className="loginPageWrapper">
      <h1 className="alt-header">Login</h1>
      <p>
        Login
      </p>
    </div>
  );
};

export default ExamplePage;
