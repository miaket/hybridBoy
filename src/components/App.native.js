import React from 'react';
// eslint-disable-next-line import/named
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import transitionConfig from  '../utils/transitionConfig';
import NavigationService from '../utils/navigationService/NavigationService.native';
import HomePage from './pages/homePage/HomePage';
import SignupPage from './pages/signupPage/SignupPage';
import LoginPage from './pages/loginPage/LoginPage';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomePage},
    Signup: {screen: SignupPage},
    Login: {screen: LoginPage},
  },
  {
    initialRouteName: 'Signup',
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
