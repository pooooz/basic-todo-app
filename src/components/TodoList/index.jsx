import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { TodoItem } from 'components/TodoItem';
import { selectFilteredTodoIds } from 'store/selectors/todoSelectors';
import { StyledUl } from './styled';

export const TodoList = () => {
  const todoIds = useSelector((state) => {
    console.log(state);
    return selectFilteredTodoIds(state);
  }, shallowEqual);
  return (
    <StyledUl>
      {todoIds.map((id) => (
        <TodoItem key={id} id={id} />
      ))}
    </StyledUl>
  );
};
