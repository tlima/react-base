import { combineReducers } from 'redux';

import counterReducer from 'store/reducers/counterReducer';
import colorsReducer from 'store/reducers/colorsReducer';

const rootReducer = combineReducers({
  counters: counterReducer,
  colors: colorsReducer,
});

export default rootReducer;
