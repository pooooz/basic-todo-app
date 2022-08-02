import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectTodoById } from 'store/selectors/todoSelectors';
import { availableColors } from 'store/reducers/filtersSlice';
import {
  StyledSelect,
  TodoContainer,
  TodoInfoContainer,
  TodoInput,
  TodoLabel,
  TodoText,
} from '../styled';

export const TodoItem = ({ id }) => {
  const todo = useSelector((state) => selectTodoById(state, id));
  const dispatch = useDispatch();

  const handleCompletion = () => {
    dispatch({ type: 'todos/todoToggled', payload: todo.id });
  };

  const handleColorChange = (e) => {
    const color = e.target.value;
    dispatch({
      type: 'todos/colorSelected',
      payload: { todoId: todo.id, color },
    });
  };

  return (
    <TodoContainer>
      <TodoInfoContainer>
        <TodoLabel
          htmlFor={todo.id}
          isActive={todo.completed}
          color="limegreen"
        >
          <TodoInput
            type="checkbox"
            id={todo.id}
            name="isDone"
            checked={todo.completed}
            onChange={handleCompletion}
          />
        </TodoLabel>
        <TodoText>{todo.text}</TodoText>
      </TodoInfoContainer>
      <StyledSelect value={todo.color} onChange={handleColorChange}>
        <option>None</option>
        {availableColors.map((color) => (
          <option key={color} value={color}>
            {color[0].toUpperCase() + color.slice(1)}
          </option>
        ))}
      </StyledSelect>
    </TodoContainer>
  );
};
