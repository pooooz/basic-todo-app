import React from 'react';

import { TodoItem } from 'components/TodoItem';
import { StyledUl } from './styled';

export const TodoList = ({ todos }) => (
  <StyledUl>
    {todos.map((element) => (
      <TodoItem key={element.id} todo={element} />
    ))}
  </StyledUl>
);
