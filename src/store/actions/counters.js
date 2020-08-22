import { createAction, INCREASE_COUNTER, ERASE_COUNTER } from 'store/actions/types';

export const increaseCountAction = (target) => createAction(INCREASE_COUNTER, target);

export const eraseCountAction = (target) => createAction(ERASE_COUNTER, target);
