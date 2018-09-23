import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { Stack } from '../navigation';

const home = Stack.router.getActionForPathAndParams('Home');

function nav(state = home, action: any) {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = Stack.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Detail':
      nextState = Stack.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Detail' }),
        state
      );
      break;
    case 'About':
      nextState = Stack.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'About' }),
        state
      );
      break;
    case 'Feedback':
      nextState = Stack.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Feedback' }),
        state
      );
      break;
    case 'Logout':
      nextState = Stack.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = Stack.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}

export const appReducer = combineReducers({
  nav
});
