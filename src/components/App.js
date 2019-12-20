/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch, Router } from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import LoginPage from './pages/loginPage/LoginPage';
import SignupPage from './pages/signupPage/SignupPage';
import ErrorPage from './pages/errorPage/ErrorPage';
import NotFoundPage from './NotFoundPage';
import ROUTES from '../constants/ROUTES';
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import history from "../utils/navigationService/NavigationService";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <Router history={history}>
        <div>
          <div>
            <NavLink exact to={ROUTES.HOME} activeStyle={activeStyle}>Home</NavLink>
            {' | '}
            <NavLink to={ROUTES.LOGIN} activeStyle={activeStyle}>Login</NavLink>
            {' | '}
            <NavLink to={ROUTES.SIGNUP} activeStyle={activeStyle}>Signup</NavLink>
            {' | '}
            <NavLink to={ROUTES.ERROR} activeStyle={activeStyle}>Error</NavLink>
          </div>
            <Switch>
              <Route exact path={ROUTES.HOME} component={HomePage} />
              <Route path={ROUTES.LOGIN} component={LoginPage} />
              <Route path={ROUTES.SIGNUP} component={SignupPage} />
              <Route path={ROUTES.ERROR} component={ErrorPage} />
              <Route component={NotFoundPage} />
            </Switch>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
