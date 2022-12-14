import { StatusFilters } from '../reducers/filtersSlice';

export const selectTodoIds = (state) => state.todos.map((todo) => todo.id);

export const selectTodoById = (state, id) =>
  state.todos.find((todo) => todo.id === id);

export const selectRemainingCount = (state) => {
  const remaining = state.todos.filter((todo) => !todo.completed);
  return remaining.length;
};

export const selectFilteredTodoIds = (state) => {
  const selectedColors = state.filters.colors
    .filter((elem) => elem.isChecked)
    .map((elem) => elem.color);
  return state.todos
    .filter((elem) => {
      switch (state.filters.status) {
        case StatusFilters.all: {
          return selectedColors.length
            ? selectedColors.indexOf(elem.color) >= 0
            : true;
        }
        case StatusFilters.active: {
          return selectedColors.length
            ? selectedColors.indexOf(elem.color) >= 0 && !elem.completed
            : !elem.completed;
        }
        case StatusFilters.completed: {
          return selectedColors.length
            ? selectedColors.indexOf(elem.color) >= 0 && elem.completed
            : elem.completed;
        }
      }
    })
    .map((elem) => elem.id);
};
