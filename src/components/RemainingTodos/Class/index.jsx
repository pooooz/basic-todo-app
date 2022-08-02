import React from 'react';
import { StyledHeading } from 'containers/generalStyled';

export class ClassRemainingTodos extends React.Component {
  render() {
    const { count } = this.props;
    const suffix = count === 1 ? '' : 's';
    return (
      <section>
        <StyledHeading>Remaining Todos</StyledHeading>
        <strong>{count}</strong> item{suffix} left
      </section>
    );
  }
}
