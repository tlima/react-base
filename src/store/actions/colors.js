import { createAction, FETCH_RANDOM_COLOR, FETCH_COLOR_SUCCESS, FETCH_COLOR_ERROR } from 'store/actions/types';

export const fetchRandomColorAction = (availableColors, delay) => createAction(
  FETCH_RANDOM_COLOR,
  Array.isArray(availableColors) && availableColors[~~(Math.random() * availableColors.length)],
  { delay },
);

export const fetchColorSuccessAction = color => createAction(FETCH_COLOR_SUCCESS, color);

export const fetchColorErrorAction = (id, error) => createAction(FETCH_COLOR_ERROR, { id, error });
