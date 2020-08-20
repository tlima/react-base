import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { eraseCountAction } from 'store/actions/counters';
import { getCounters } from 'store/selectors/counterSelector';

import * as styles from './style';

const Counter = () => {
  const dispatch = useDispatch();
  const zeroCount = (target) => dispatch(eraseCountAction(target));

  const counters = useSelector(getCounters);

  return (
    <div>
      <div>
        <span css={styles.removeButton} onClick={() => zeroCount('home')}>❎</span>
        Counter Home: {counters.home}
      </div>
      <div>
        <span css={styles.removeButton} onClick={() => zeroCount('one')}>❎</span>
        Counter One: {counters.one}
      </div>
      <div>
        <span css={styles.removeButton} onClick={() => zeroCount('two')}>❎</span>
        Counter Two: {counters.two}
      </div>
      <div>
        <span css={styles.removeButton} onClick={() => zeroCount('three')}>❎</span>
        Counter Three: {counters.three}
      </div>
    </div>
  );
};

Counter.propTypes = {
  counters: PropTypes.object,
  zeroCount: PropTypes.func,
};

export default Counter;
