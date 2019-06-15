import { INCREASE_COUNTER, ERASE_COUNTER } from 'store/actions/types';

export const increaseCountAction = target => ({
  type: INCREASE_COUNTER,
  target,
});

export const eraseCountAction = target => ({
  type: ERASE_COUNTER,
  target,
});
