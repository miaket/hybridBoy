// eslint-disable-next-line import/named
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import transitionConfig from  '../utils/transitionConfig';
import HomePageContainer from './pages/homePage/HomePageContainer';
import SignupPage from './pages/signupPage/SignupPage';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomePageContainer},
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
