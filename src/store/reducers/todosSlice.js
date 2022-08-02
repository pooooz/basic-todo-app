const initialState = [
  {
    id: 1,
    text: 'Learn something new',
    color: 'blue',
    completed: false,
  },
];

export function todosReducer(state = initialState, action) {
  const nextTodoId = (todos) => {
    const maxId = todos.reduce(
      (maxTodoId, todo) => Math.max(todo.id, maxTodoId),
      -1
    );
    return maxId + 1;
  };

  switch (action.type) {
    case 'todos/todoAdded': {
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          color: 'none',
          completed: false,
        },
      ];
    }
    case 'todos/todoToggled': {
      return state.map((todo) =>
        todo.id !== action.payload
          ? todo
          : { ...todo, completed: !todo.completed }
      );
    }
    case 'todos/colorSelected': {
      const { color, todoId } = action.payload;
      return state.map((todo) =>
        todo.id !== todoId ? todo : { ...todo, color }
      );
    }
    case 'todos/allCompleted': {
      return state.map((todo) => ({ ...todo, completed: true }));
    }
    case 'todos/completedCleared': {
      return state.filter((todo) => !todo.completed);
    }
    default:
      return state;
  }
}
