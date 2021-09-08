import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { eraseCountAction } from 'store/actions/counters';
import { getCounter } from 'store/selectors/counterSelector';

import * as styles from './style';

export const pageCounterKeys = {
  HOME_COUNTER: 'home',
  FILES_COUNTER: 'files',
  ASYNC_COUNTER: 'async',
};

const Counter = () => {
  const dispatch = useDispatch();
  const zeroCount = target => dispatch(eraseCountAction(target));

  const homePageCounter = useSelector(getCounter(pageCounterKeys.HOME_COUNTER));
  const filePageCounter = useSelector(getCounter(pageCounterKeys.FILES_COUNTER));
  const asyncPageCounter = useSelector(getCounter(pageCounterKeys.ASYNC_COUNTER));

  return (
    <div>
      <div>Menu bar click counters:</div>
      <div>
        <span css={styles.removeButton} onClick={() => zeroCount(pageCounterKeys.HOME_COUNTER)}>❎</span>
        Home: {homePageCounter}
      </div>
      <div>
        <span css={styles.removeButton} onClick={() => zeroCount(pageCounterKeys.FILES_COUNTER)}>❎</span>
        Files: {filePageCounter}
      </div>
      <div>
        <span css={styles.removeButton} onClick={() => zeroCount(pageCounterKeys.ASYNC_COUNTER)}>❎</span>
        Async: {asyncPageCounter}
      </div>
    </div>
  );
};

export default Counter;
