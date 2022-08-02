import React from 'react';
import { connect } from 'react-redux';

import { selectFilteredTodoIds } from 'store/selectors/todoSelectors';
import { ClassTodoItem } from 'containers/TodoItem/Class';
import { StyledUl } from '../styled';

const mapStateToProps = (state) => ({
  todoIds: selectFilteredTodoIds(state),
});

class TodoList extends React.Component {
  render() {
    const { todoIds } = this.props;
    return (
      <StyledUl>
        {todoIds.map((id) => (
          <ClassTodoItem key={id} id={id} />
        ))}
      </StyledUl>
    );
  }
}

export const ClassTodoList = connect(mapStateToProps)(TodoList);
