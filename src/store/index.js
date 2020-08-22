/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'store/reducers';
import rootSaga from 'store/sagas';

const composeEnhancers = _IS_DEVELOPMENT_
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const sagaMiddleware = createSagaMiddleware();

const appStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default appStore;
