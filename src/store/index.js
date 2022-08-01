import { createStore, combineReducers, applyMiddleware } from 'redux';

import { todosReducer } from './reducers/todosSlice';
import { filtersReducer } from './reducers/filtersSlice';
import { loggerMiddleware } from './middlewares/loggerMiddleware';

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});

const composedEnhancer = applyMiddleware(loggerMiddleware);

export const store = createStore(rootReducer, composedEnhancer);
