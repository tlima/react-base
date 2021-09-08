import React from 'react';
import { useDispatch } from 'react-redux';

import { increaseCountAction } from 'store/actions/counters';
import { pageCounterKeys } from 'components/Counter';

import * as styles from './style';

const { StyledLink } = styles;

const TopBar = () => {
  const dispatch = useDispatch();
  const upCount = target => dispatch(increaseCountAction(target));

  return (
    <div css={styles.bar}>
      <StyledLink to="/" onClick={() => upCount(pageCounterKeys.HOME_COUNTER)}>Home</StyledLink>
      <StyledLink to="/files" onClick={() => upCount(pageCounterKeys.FILES_COUNTER)}>Files</StyledLink>
      <StyledLink to="/async" onClick={() => upCount(pageCounterKeys.ASYNC_COUNTER)}>Async</StyledLink>
    </div>
  );
};

export default TopBar;
