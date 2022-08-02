import React from 'react';

import { ClassTodoList } from 'containers/TodoList/Class';
import { ClassSettings } from 'containers/Settings/Class';
import { ClassTodoAddForm } from 'containers/TodoAddForm/Class';
import { TodoWrap, TodoHeading } from '../styled';

export class ClassTodo extends React.Component {
  render() {
    return (
      <TodoWrap>
        <TodoHeading>Todo app</TodoHeading>
        <ClassTodoAddForm />
        <ClassTodoList />
        <ClassSettings />
      </TodoWrap>
    );
  }
}
