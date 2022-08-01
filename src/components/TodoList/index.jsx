import React from 'react';

import { TodoItem } from 'components/TodoItem';
import { StyledUl } from './styled';

export const TodoList = ({ todoIds }) => (
  <StyledUl>
    {todoIds.map((id) => (
      <TodoItem key={id} id={id} />
    ))}
  </StyledUl>
);
