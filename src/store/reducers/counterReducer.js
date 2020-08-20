import { INCREASE_COUNTER, ERASE_COUNTER } from 'store/actions/types';

const counters = ['home', 'one', 'two', 'three'];

const initialState = {
  home: 0,
  one: 0,
  two: 0,
  three: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      if (counters.includes(action.target)) {
        const newState = { ...state };
        newState[action.target]++;
        return newState;
      }
      return state;
    case ERASE_COUNTER:
      if (counters.includes(action.target)) {
        const newState = { ...state };
        newState[action.target] = 0;
        return newState;
      }
      return state;
    default:
      return state;
  }
};

export default counterReducer;
