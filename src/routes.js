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
import CalendarView from "./pages/Tabs/CalendarView";
import React from "react";
import { Image } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import Badges from "./pages/Tabs/Badges";

IconFontAwesome.loadFont();

const BottomTabs = createBottomTabNavigator({
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
  Calendar: {
    screen: CalendarView,
    navigationOptions: {
      title: 'CalendarView',
      tabBarLabel: 'CALENDAR',
      tabBarIcon: () => (
        <IconFontAwesome name="calendar" size={21} color="#7A7A7A" />
      ),
    }
  },
  Badges: {
    screen: Badges,
    navigationOptions: {
      title: "Conquistas",
      tabBarLabel: "BADGES",
      tabBarIcon: () => (
        <IconFontAwesome name="certificate" size={21} color="#7A7A7A" />
      )
    },
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
