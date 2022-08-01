import React, { useState } from 'react';

import { TodoList } from 'components/TodoList';
import { Settings } from 'containers/Settings';
import { todos } from './mock';
import {
  TodoWrap,
  TodoHeading,
  TodoInput,
  TodoForm,
  TodoAddButton,
} from './styled';

export const Todo = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log('todo should be added');
    setInputValue('');
    event.preventDefault();
  };

  return (
    <TodoWrap>
      <TodoHeading>Todo app</TodoHeading>
      <TodoForm onSubmit={handleSubmit}>
        <TodoInput value={inputValue} onChange={handleChange} />
        <TodoAddButton type="submit">Add new todo</TodoAddButton>
      </TodoForm>
      <TodoList todos={todos} />
      <Settings />
    </TodoWrap>
  );
};
