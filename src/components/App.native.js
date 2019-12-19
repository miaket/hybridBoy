import React from 'react';
// eslint-disable-next-line import/named
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import transitionConfig from  '../utils/transitionConfig';
import NavigationService from '../utils/navigationService/NavigationService.native';
import HomePageContainer from './pages/homePage/HomePageContainer';
import SignupPage from './pages/signupPage/SignupPage';
import LoginPage from './pages/loginPage/LoginPage';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomePageContainer},
    Signup: {screen: SignupPage},
    Login: {screen: LoginPage},
  },
  {
    initialRouteName: 'Home',
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
