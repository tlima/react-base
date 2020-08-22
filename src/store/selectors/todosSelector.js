export const getTodo = (id) => (state) => state.todos
  && state.todos[id];

export const getLoadedCount = (state) => state.todos
  && state.todos.count;
