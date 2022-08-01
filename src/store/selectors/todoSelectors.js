export const selectTodoIds = (state) => state.todos.map((todo) => todo.id);

export const selectTodoById = (state, id) =>
  state.todos.find((todo) => todo.id === id);

export const selectRemainingCount = (state) => {
  const remaining = state.todos.filter((todo) => !todo.completed);
  return remaining.length;
};
