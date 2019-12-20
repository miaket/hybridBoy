/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import NavigationService from '../../../utils/navigationService/NavigationService';

const NavigationAction = React.forwardRef((ref) => {
  React.useImperativeHandle(ref, () => ({
    navigationFunction(navigateTo) {
      if (navigateTo){
        NavigationService.navigate(navigateTo);
      }
    }
  }));

  return <React.Fragment></React.Fragment>;
});

export default NavigationAction;