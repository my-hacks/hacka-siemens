import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Login from "./pages/Login";
import Home from './pages/Home';
import HomeList from './pages/Tabs/HomeList';
import Machines from './pages/Tabs/Machines';
import Calendar from './pages/Tabs/Calendar';
import checklist from "./assets/icons/checklist_icon.png";
import React from 'react';
import { Image } from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

IconFontAwesome.loadFont();

const BottomTabs = createBottomTabNavigator({
  HomeList: {
    screen: HomeList,
    navigationOptions: {
      title: "Home",
      tabBarIcon: () => (
        <IconFontAwesome name="home" size={21} color="#7A7A7A" />
      ),
      // tabBarIcon: () => (
      //   <Image
      //     source={checklist}
      //     resizeMode="cover"
      //     style={{ height: 20, width: 20 }}
      //   />
      // ),
      tabBarLabel: "HOME",
      showIcon: true
    },
  },
  Machines: {
    screen: Machines,
    navigationOptions: {
      title: "Machines",
      tabBarLabel: "MACHINES"
    },
  },
  Calendar: {
    screen: Calendar,
    navigationOptions: {
      title: "Calendar",
      tabBarLabel: "CALENDAR"
    },
  },
});

const Routes = createAppContainer(
  createSwitchNavigator({
    BottomTabs,
    Login,
    Home,
  })
);

export default Routes;
