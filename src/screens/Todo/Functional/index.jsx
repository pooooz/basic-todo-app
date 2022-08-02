import React from 'react';

import { TodoList } from 'containers/TodoList/Functional';
import { Settings } from 'containers/Settings/Functional';
import { TodoAddForm } from 'containers/TodoAddForm/Functional';
import { TodoWrap, TodoHeading } from '../styled';

export const Todo = () => (
  <TodoWrap>
    <TodoHeading>Todo app</TodoHeading>
    <TodoAddForm />
    <TodoList />
    <Settings />
  </TodoWrap>
);
