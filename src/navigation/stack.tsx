import { createStackNavigator } from 'react-navigation';
import { tab as Tab } from './tab';
import { Detail } from '../pages/Detail';
import { About } from '../pages/About';
import { Feedback } from '../pages/Feedback';

export const stack = createStackNavigator({
  Tab: {
    screen: Tab,
    navigationOptions: {
      header: null
    }
  },
  Detail,
  About,
  Feedback
});
