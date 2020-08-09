/* eslint-disable no-underscore-dangle */
import { createStore, compose } from 'redux';

import rootReducer from 'store/reducers';

const composeEnhancers = _IS_DEVELOPMENT_
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : null || compose;

const appStore = createStore(
  rootReducer,
  composeEnhancers(),
);

export default appStore;
