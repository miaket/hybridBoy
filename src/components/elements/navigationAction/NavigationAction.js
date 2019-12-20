/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../utils/navigationService/NavigationService';

// export default NavigationAction;
const NavigationAction = React.forwardRef((ref) => {
  React.useImperativeHandle(ref, () => ({
    navigationFunction(navigateTo) {
      if (navigateTo){
        history.push(navigateTo)
      }
    }
  }));

  return <React.Fragment></React.Fragment>;
});

export default NavigationAction;
