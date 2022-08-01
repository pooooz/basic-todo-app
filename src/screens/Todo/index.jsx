import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { selectTodoIds } from 'store/selectors/todoSelectors';
import { TodoList } from 'components/TodoList';
import { Settings } from 'containers/Settings';
import { TodoAddForm } from 'containers/TodoAddForm';
import { TodoWrap, TodoHeading } from './styled';

export const Todo = () => {
  const todoIds = useSelector(selectTodoIds, shallowEqual);

  return (
    <TodoWrap>
      <TodoHeading>Todo app</TodoHeading>
      <TodoAddForm />
      <TodoList todoIds={todoIds} />
      <Settings />
    </TodoWrap>
  );
};
