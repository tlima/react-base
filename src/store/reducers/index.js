import { combineReducers } from 'redux';

import counterReducer from 'store/reducers/counterReducer';

const rootReducer = combineReducers({
  counters: counterReducer,
});

export default rootReducer;
