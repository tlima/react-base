import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ReqResColor from 'components/ReqResColor';
import { fetchRandomColorAction } from 'store/actions/colors';
import { getAvailableColors, getColors, getLoadingColorIds, getFailedColors } from 'store/selectors/colorsSelector';

const Async = () => {
  const availableColors = useSelector(getAvailableColors);
  const loadedColors = useSelector(getColors);
  const loadingColorIds = useSelector(getLoadingColorIds);
  const failedColors = useSelector(getFailedColors);

  const dispatch = useDispatch();

  const fetchOneItem = () => dispatch(fetchRandomColorAction(availableColors));
  const fetchOneItemWithDelay = () => dispatch(fetchRandomColorAction(availableColors, 2));

  return (
    <div>
      <div>Request colors from <a href="https://reqres.in" target="_blank" rel="noreferrer">https://reqres.in</a></div>
      <button disabled={availableColors.length === 0} onClick={fetchOneItem}>Get random color</button>
      <button disabled={availableColors.length === 0} onClick={fetchOneItemWithDelay}>Get random color with delay</button>

      <div>Loading colors ({loadingColorIds.length}): {loadingColorIds.join(', ')}</div>
      <div>Failed colors ({failedColors.length}): {failedColors.map(color => `[${color.id}: ${color.error}]`).join(', ')}</div>
      <div>Loaded colors ({loadedColors.length}/12):</div>

      {loadedColors.map(item => <ReqResColor id={item.id} key={item.id} />)}
    </div>
  );
};

export default Async;
