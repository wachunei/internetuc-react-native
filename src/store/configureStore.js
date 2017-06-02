/* global __DEV__, window */
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import {
  autoRehydrate,
} from 'redux-persist';

import reducers from '../reducers';

let composeEnhancers;
if (__DEV__) {
  /* eslint-disable no-underscore-dangle */
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable no-underscore-dangle */
} else {
  composeEnhancers = compose;
}

export default createStore(
  reducers,
  undefined,
  composeEnhancers(
    autoRehydrate(),
    applyMiddleware(thunk),
  ),
);
