/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-named-as-default */
import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import { connect } from 'react-redux';
import HomePage from './pages/homePage/HomePage';
import LoginPage from './pages/loginPage/LoginPage';
import SignupPage from './pages/signupPage/SignupPage';
import ErrorPage from './pages/errorPage/ErrorPage';
import NotFoundPage from './NotFoundPage';
import ROUTES from '../constants/ROUTES';
import PropTypes from "prop-types";
import history from "../utils/navigationService/NavigationService";
import RedirectRoute from './RedirectRoute';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const { isLogged } = this.props;
    return (
      <Router history={history}>
        <div>
            <Switch>
              <RedirectRoute
                redirectionRoute={ROUTES.LOGIN}
                exact path={ROUTES.HOME}
                canActivate={isLogged}
                component={HomePage}
              />
              {/* <Route exact path={ROUTES.HOME} component={HomePage} /> */}
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

function mapStateToProps(state) {
  return {
    isLogged: state.appAuth.isLogged
  };
}

export default connect(
  mapStateToProps
)(App);
