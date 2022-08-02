import React from 'react';
import { connect } from 'react-redux';

import { TodoAddButton, TodoForm, TodoInput } from '../styled';

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (inputValue, setInputValue) => (event) => {
    event.preventDefault();
    dispatch({ type: 'todos/todoAdded', payload: inputValue });
    setInputValue({ inputValue: '' });
  },
});

class TodoAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  render() {
    const handleChange = (event) => {
      this.setState({ inputValue: event.target.value });
    };

    const { inputValue } = this.state;
    const { handleSubmit } = this.props;
    return (
      <TodoForm onSubmit={handleSubmit(inputValue, this.setState.bind(this))}>
        <TodoInput value={inputValue} onChange={handleChange} />
        <TodoAddButton type="submit">Add new todo</TodoAddButton>
      </TodoForm>
    );
  }
}

export const ClassTodoAddForm = connect(null, mapDispatchToProps)(TodoAddForm);
