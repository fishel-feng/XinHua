import { connect } from 'react-redux';
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { stack as Stack } from './stack';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  (state: any) => state.nav
);

const appWithNavigationState: any = reduxifyNavigator(Stack, 'root');

const mapStateToProps = (state: any) => ({
  state: state.nav,
});

const root = connect(mapStateToProps)(appWithNavigationState);

export { Stack, root, middleware };
