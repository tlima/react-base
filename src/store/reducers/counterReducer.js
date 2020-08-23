import { INCREASE_COUNTER, ERASE_COUNTER } from 'store/actions/types';
import { pageCounterKeys } from 'components/Counter';

const initialState = {
  [pageCounterKeys.HOME_COUNTER]: 0,
  [pageCounterKeys.FILES_COUNTER]: 0,
  [pageCounterKeys.ASYNC_COUNTER]: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        [action.payload]: state[action.payload] + 1,
      };
    case ERASE_COUNTER:
      return {
        ...state,
        [action.payload]: initialState[action.payload],
      };
    default:
      return state;
  }
};

export default counterReducer;
