import { combineReducers } from 'redux';

import counterReducer from 'store/reducers/counterReducer';
import todosReducer from 'store/reducers/todosReducer';

const rootReducer = combineReducers({
  counters: counterReducer,
  todos: todosReducer,
});

export default rootReducer;
