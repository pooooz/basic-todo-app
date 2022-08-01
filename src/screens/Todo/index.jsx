import React from 'react';

import { TodoList } from 'components/TodoList';
import { Settings } from 'containers/Settings';
import { TodoAddForm } from 'containers/TodoAddForm';
import { TodoWrap, TodoHeading } from './styled';

export const Todo = () => (
  <TodoWrap>
    <TodoHeading>Todo app</TodoHeading>
    <TodoAddForm />
    <TodoList />
    <Settings />
  </TodoWrap>
);
