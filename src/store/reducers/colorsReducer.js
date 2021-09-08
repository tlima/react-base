import { FETCH_RANDOM_COLOR, FETCH_COLOR_SUCCESS, FETCH_COLOR_ERROR } from 'store/actions/types';

const initialState = {
  available: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // known list of ReqRes color resources
};

const colorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_COLOR:
      return (state[action.payload] && state[action.payload].loading)
        ? state
        : {
          ...state,
          available: state.available.filter(color => color !== action.payload.id),
          [action.payload]: {
            id: action.payload,
            loading: true,
          },
        };
    case FETCH_COLOR_SUCCESS:
      return {
        ...state,
        available: state.available.filter(color => color !== action.payload.id),
        [action.payload.id]: {
          loading: false,
          id: action.payload.id,
          name: action.payload.name,
          year: action.payload.year,
          color: action.payload.color,
        },
      };
    case FETCH_COLOR_ERROR:
      return {
        ...state,
        available: initialState.available.includes(action.payload.id) ? [...state.available, action.payload.id] : state.available,
        [action.payload.id]: {
          loading: false,
          error: action.payload.error,
        },
      };
    default:
      return state;
  }
};

export default colorsReducer;
