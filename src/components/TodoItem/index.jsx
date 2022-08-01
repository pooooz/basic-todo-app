import React from 'react';

import { availableColors } from 'store/reducers/filtersSlice';
import { TodoContainer, TodoInfoContainer, TodoText } from './styled';

export const TodoItem = ({ todo }) => (
  <TodoContainer>
    <TodoInfoContainer>
      <label htmlFor={todo.id}>
        <input
          type="checkbox"
          id={todo.id}
          name="isDone"
          checked={todo.status === 'completed'}
          onChange={() => console.log('todo toggled')}
        />
      </label>
      <TodoText>{todo.text}</TodoText>
    </TodoInfoContainer>
    <select
      value={todo.color}
      onChange={() => console.log('todo color changed')}
    >
      <option>None</option>
      {availableColors.map((color) => (
        <option key={color} value={color}>
          {color[0].toUpperCase() + color.slice(1)}
        </option>
      ))}
    </select>
  </TodoContainer>
);
