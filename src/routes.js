import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Login from './pages/Login';
import Home from "./pages/Home";
import HomeList from "./pages/Tabs/HomeList";
import Machines from "./pages/Tabs/Machines";
import Calendar from "./pages/Tabs/Calendar";

const BottomTabs = createBottomTabNavigator({
  HomeList: {
    screen: HomeList,
    navigationOptions: {
      title: 'Home',
      tabBarLabel: 'HOME',
    }
  },
  Machines: {
    screen: Machines,
    navigationOptions: {
      title: 'Machines',
      tabBarLabel: 'MACHINES',
    }
  },
  Calendar: {
    screen: Calendar,
    navigationOptions: {
      title: 'Calendar',
      tabBarLabel: 'CALENDAR',
    }
  }
});

const Routes = createAppContainer(
  createSwitchNavigator({
    BottomTabs,
    Login,
    Home
  })
);

export default Routes;
