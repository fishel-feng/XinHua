import { createStackNavigator } from 'react-navigation';
import { tab as Tab } from './tab';
import { Detail } from '../pages/Detail';

export const home = createStackNavigator({
  Tab: {
    screen: Tab,
    navigationOptions: {
      header: null
    }
  },
  Detail
});
