import { createStackNavigator } from 'react-navigation';
import { tab as Tab } from './tab';
import { Detail } from '../pages/Detail';
import { About } from '../pages/About';
import { Feedback } from '../pages/Feedback';
import { Discuss } from '../pages/Discuss';
import { Ci } from '../pages/Ci';
import { Idiom } from '../pages/Idiom';
import { XieHouYu } from '../pages/XieHouYu';

export const stack = createStackNavigator(
  {
    Tab: {
      screen: Tab,
      navigationOptions: {
        header: null
      }
    },
    Detail,
    Feedback,
    About,
    Discuss,
    Ci,
    Idiom,
    XieHouYu
  }
);
