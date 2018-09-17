/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

// import {Platform} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { root as Root } from './src/navigation';

export class App extends Component {
  public render () {
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    );
  }
}
