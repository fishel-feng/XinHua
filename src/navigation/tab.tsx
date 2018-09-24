import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Search } from '../pages/Search';
import { Dictionary } from '../pages/Dictionary';
import { Community } from '../pages/Community';
import { User } from '../pages/User';

export const tab = createBottomTabNavigator(
  {
    Search: createStackNavigator({Search}),
    Dictionary: createStackNavigator({Dictionary}),
    Community: createStackNavigator({Community}),
    User: createStackNavigator({User})
  },
  {
    tabBarOptions: {
      activeTintColor: '#3569f4',
      inactiveTintColor: '#aaa'
    }
  }
);
