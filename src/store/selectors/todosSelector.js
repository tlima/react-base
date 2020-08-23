export const getItem = (id) => (state) => state.todos.items
  && state.todos.items[id];

export const getItems = (state) => state.todos.items
  && Object.values(state.todos.items);

export const getLoadingItems = (state) => state.todos.loading
  && state.todos.loading;

export const getFailedItems = (state) => state.todos.failed
  && state.todos.failed;
