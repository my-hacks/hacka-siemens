import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Login from "./pages/Login";
import Home from './pages/Home';

const BottomTabs = createBottomTabNavigator({
  Home,
}) ;

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Home,
  })
);

export default Routes;
