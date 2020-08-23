import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTodoAction } from 'store/actions/todos';
import { getItems, getLoadingItems, getFailedItems } from 'store/selectors/todosSelector';

const Async = () => {
  const loadedItems = useSelector(getItems);
  const loadingItems = useSelector(getLoadingItems);
  const failedItems = useSelector(getFailedItems);

  const dispatch = useDispatch();

  const fetchOneItem = () => dispatch(fetchTodoAction());
  const fetchFiveItems = () => [...new Array(5)].forEach(() => dispatch(fetchTodoAction()));

  return (
    <div>
      <button onClick={fetchOneItem}>Get one by random ID</button>
      <button onClick={fetchFiveItems}>Get five by random IDs</button>

      <div>Loading items ({loadingItems.length}): {loadingItems.join(', ')}</div>
      <div>Failed items ({failedItems.length}): {failedItems.join(', ')}</div>
      <div>Loaded items: {loadedItems.length}</div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Completed</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {loadedItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.completed.toString()}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Async;
