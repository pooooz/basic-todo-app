import React from 'react';
import { connect } from 'react-redux';

import { selectTodoById } from 'store/selectors/todoSelectors';
import { availableColors } from 'store/reducers/filtersSlice';
import {
  StyledSelect,
  TodoContainer,
  TodoInfoContainer,
  TodoInput,
  TodoLabel,
  TodoText,
} from '../styled';

const mapStateToProps = (state, ownProps) => ({
  todo: selectTodoById(state, ownProps.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleCompletion: () => {
    dispatch({ type: 'todos/todoToggled', payload: ownProps.id });
  },
  handleColorChange: (event) => {
    console.log(ownProps);
    const color = event.target.value;
    dispatch({
      type: 'todos/colorSelected',
      payload: { todoId: ownProps.id, color },
    });
  },
});

class TodoItem extends React.Component {
  render() {
    const { todo, handleCompletion, handleColorChange } = this.props;
    return (
      <TodoContainer>
        <TodoInfoContainer>
          <TodoLabel
            htmlFor={todo.id}
            isActive={todo.completed}
            color="limegreen"
          >
            <TodoInput
              type="checkbox"
              id={todo.id}
              name="isDone"
              checked={todo.completed}
              onChange={handleCompletion}
            />
          </TodoLabel>
          <TodoText>{todo.text}</TodoText>
        </TodoInfoContainer>
        <StyledSelect value={todo.color} onChange={handleColorChange}>
          <option>None</option>
          {availableColors.map((color) => (
            <option key={color} value={color}>
              {color[0].toUpperCase() + color.slice(1)}
            </option>
          ))}
        </StyledSelect>
      </TodoContainer>
    );
  }
}

export const ClassTodoItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);
