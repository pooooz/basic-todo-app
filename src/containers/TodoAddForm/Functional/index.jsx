import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { TodoAddButton, TodoForm, TodoInput } from '../styled';

export const TodoAddForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    dispatch({ type: 'todos/todoAdded', payload: inputValue });
    setInputValue('');
    event.preventDefault();
  };

  return (
    <TodoForm onSubmit={handleSubmit}>
      <TodoInput value={inputValue} onChange={handleChange} />
      <TodoAddButton type="submit">Add new todo</TodoAddButton>
    </TodoForm>
  );
};
