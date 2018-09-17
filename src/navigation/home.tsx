import { createBottomTabNavigator } from 'react-navigation';
import { search as Search } from './search';
import { dictionary as Dictionary } from './dictionary';
import { community as Community } from './community';
import { user as User } from './user';

export const home = createBottomTabNavigator(
  {
    Search: {
      screen: Search,
      // navigationOptions: {
      //   tabBarIcon: todoIcon,
      //   tabBarLabel: '待办'
      // },
    },
    Dictionary: {
      screen: Dictionary,
      // navigationOptions: {
      //   tabBarIcon: todoIcon,
      //   tabBarLabel: '待办'
      // },
    },
    Community: {
      screen: Community,
      // navigationOptions: {
      //   tabBarIcon: todoIcon,
      //   tabBarLabel: '待办'
      // },
    },
    User: {
      screen: User
    }
  },
  // {
  //   tabBarOptions: {
  //     activeTintColor: '#3569f4',
  //     inactiveTintColor: '#aaa'
  //   }
  // }
);
