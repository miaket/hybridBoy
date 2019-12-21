import React from 'react';
// eslint-disable-next-line import/named
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import transitionConfig from  '../utils/transitionConfig';
import NavigationService from '../utils/navigationService/NavigationService.native';
import HomePage from './pages/homePage/HomePage';
import SignupPage from './pages/signupPage/SignupPage';
import LoginPage from './pages/loginPage/LoginPage';
import ROUTES from '../constants/ROUTES';

const MainNavigator = createStackNavigator(
  {
    [ROUTES.HOME]: {screen: HomePage},
    [ROUTES.SIGNUP]: {screen: SignupPage},
    [ROUTES.LOGIN]: {screen: LoginPage},
  },
  {
    initialRouteName: ROUTES.LOGIN,
    headerMode: 'none',
    transitionConfig
  }
);

const AppContainer  = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
