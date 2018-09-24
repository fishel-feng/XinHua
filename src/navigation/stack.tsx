import { createStackNavigator } from 'react-navigation';
import { tab as Tab } from './tab';
import { Detail } from '../pages/Detail';
import { About } from '../pages/About';
import { Feedback } from '../pages/Feedback';
import { Discuss } from '../pages/Discuss';

export const stack = createStackNavigator({
  Tab: {
    screen: Tab,
    navigationOptions: {
      header: null
    }
  },
  Detail,
  Feedback,
  About,
  Discuss
});
