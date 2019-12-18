import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import transitionConfig from  '../utils/transitionConfig';
import HomePage from './pages/homePage/HomePage';
import SignupPage from './pages/signupPage/SignupPage';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomePage},
    Signup: {screen: SignupPage},
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    transitionConfig
  }
);

const App = createAppContainer(MainNavigator);

export default App;
