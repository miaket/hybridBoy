/* eslint-disable react/display-name */
import React from 'react';
import history from '../../../utils/navigationService/NavigationService';

const NavigationAction = React.forwardRef((props, ref) => {
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
