import React from 'react';
import { Button } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Search } from '../pages/Search';
import { Dictionary } from '../pages/Dictionary';
import { Community } from '../pages/Community';
import { User } from '../pages/User';

export const tab = createBottomTabNavigator(
  {
    Search: {
      screen: createStackNavigator({Search})
    },
    Dictionary: {
      screen: createStackNavigator({Dictionary})
    },
    Community: {
      screen: createStackNavigator({Community})
    },
    User: {
      screen: createStackNavigator({User})
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#3569f4',
      inactiveTintColor: '#aaa'
    }
  }
);
