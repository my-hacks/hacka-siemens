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
import React from "react";
import { Image } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

IconFontAwesome.loadFont();

const BottomTabs = createBottomTabNavigator({
  Machines: {
    screen: Machines,
    navigationOptions: {
      title: 'Machines',
      tabBarLabel: 'MACHINES',
      tabBarIcon: () => (
        <IconFontAwesome name="gears" size={21} color="#7A7A7A" />
      ),
    }
  },
  HomeList: {
    screen: HomeList,
    navigationOptions: {
      title: 'Home',
      tabBarIcon: () => (
        <IconFontAwesome name="home" size={21} color="#7A7A7A" />
      ),
      tabBarLabel: 'HOME',
    }
  },

  Calendar: {
    screen: Calendar,
    navigationOptions: {
      title: 'Calendar',
      tabBarLabel: 'CALENDAR',
      tabBarIcon: () => (
        <IconFontAwesome name="calendar" size={21} color="#7A7A7A" />
      ),
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
