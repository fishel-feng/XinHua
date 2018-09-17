import { createStore, applyMiddleware } from 'redux';
import { appReducer  } from './reducers';
import { middleware } from '../navigation';

export const store = createStore(appReducer, applyMiddleware(middleware));
