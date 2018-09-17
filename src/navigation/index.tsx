import { connect } from 'react-redux';
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { home as Home } from './home';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  (state: any) => state.nav
);

const appWithNavigationState: any = reduxifyNavigator(Home, 'root');

const mapStateToProps = (state: any) => ({
  state: state.nav,
});

const root = connect(mapStateToProps)(appWithNavigationState);

export { Home, root, middleware };
