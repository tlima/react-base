import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTodoAction } from 'store/actions/todos';
import { increaseCountAction } from 'store/actions/counters';
import { getTodo, getLoadedCount } from 'store/selectors/todosSelector';
import { getCounters } from 'store/selectors/counterSelector';

const Three = () => {
  const dispatch = useDispatch();

  const { three: currentTodoId } = useSelector(getCounters);
  const currentTodo = useSelector(getTodo(currentTodoId));
  const todoCount = useSelector(getLoadedCount);

  useEffect(() => {
    if (!currentTodo || !currentTodo.hasLoaded) dispatch(fetchTodoAction(currentTodoId));
  }, [currentTodoId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div>Todo items loaded: {todoCount}</div>
      <button onClick={() => dispatch(increaseCountAction('three'))}>Get next todo</button>
      {currentTodo && currentTodo.hasLoaded
        ? <div>{currentTodo.error ? 'Error!' : currentTodo.title}</div>
        : <div>Loading...</div>}
    </div>
  );
};

export default Three;
