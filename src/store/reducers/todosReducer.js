import { FETCH_TODO, FETCH_TODO_SUCCESS, FETCH_TODO_ERROR } from 'store/actions/types';

const initialState = {
  items: {},
  loading: [],
  failed: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO:
      return {
        ...state,
        loading: Array.from(new Set([...state.loading]).add(action.payload)),
      };
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: action.payload,
        },
        loading: Array.from(new Set([...state.loading]).delete(action.payload.id)),
        failed: Array.from(new Set([...state.failed]).delete(action.payload.id)),
      };
    case FETCH_TODO_ERROR:
      return {
        ...state,
        loading: Array.from(new Set([...state.loading]).delete(action.payload)),
        failed: Array.from(new Set([...state.failed]).add(action.payload)),
      };
    default:
      return state;
  }
};

export default todosReducer;
