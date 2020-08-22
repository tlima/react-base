import { FETCH_TODO, FETCH_TODO_SUCCESS, FETCH_TODO_ERROR } from 'store/actions/types';

const initialState = {
  count: 0,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO:
      return {
        ...state,
        [action.payload]: {
          error: false,
          hasLoaded: false,
        },
      };
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        count: state.count + 1,
        [action.payload.id]: {
          ...action.payload,
          error: false,
          hasLoaded: true,
        },
      };
    case FETCH_TODO_ERROR:
      return {
        ...state,
        [action.payload]: {
          error: true,
          hasLoaded: true,
        },
      };
    default:
      return state;
  }
};

export default todosReducer;
