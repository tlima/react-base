/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducer from 'store/reducers';
import rootSaga from 'store/sagas';

const composeEnhancers = _IS_DEVELOPMENT_
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;


const sagaMiddleware = createSagaMiddleware();

const loggerMiddleware = createLogger({
  collapsed: true,
});

const reduxMiddlewares = [];

reduxMiddlewares.push(sagaMiddleware);
if (_IS_DEVELOPMENT_) reduxMiddlewares.push(loggerMiddleware);

const appStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...reduxMiddlewares)),
);

sagaMiddleware.run(rootSaga);

export default appStore;
