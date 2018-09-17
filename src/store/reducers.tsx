import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { Home } from '../navigation';

const home = Home.router.getActionForPathAndParams('Home');

function nav(state = home, action: any) {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = Home.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Detail':
      nextState = Home.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Detail' }),
        state
      );
      break;
    case 'Logout':
      nextState = Home.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = Home.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}

export const appReducer = combineReducers({
  nav
});
