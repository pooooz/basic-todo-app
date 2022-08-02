import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Todo } from 'screens/Todo/Functional';
import { ClassTodo } from 'screens/Todo/Class';
import { Header } from './containers/Header';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/functional" element={<Todo />} />
        <Route path="/class" element={<ClassTodo />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
