import React from 'react';
import { Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

const RedirectRoute = ({
  canActivate,
  redirectionRoute,
  redirectionParams,
  component: Component,
  ...props 
}) => {
  return(
  <Route
    {...props}
    render={props =>
      canActivate ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: redirectionRoute,
              search: redirectionParams,
            }}
          />
        )
    }
  />
)};

RedirectRoute.propTypes = {
  canActivate: PropTypes.bool.isRequired,
  redirectionRoute: PropTypes.string.isRequired,
  redirectionParams: PropTypes.string,
  props: PropTypes.object
};

RedirectRoute.defaultProps = {
  redirectionParams: '',
  props: {}
};

export default RedirectRoute;