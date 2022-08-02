import React from 'react';
import { StyledHeading } from 'containers/generalStyled';

import { RemainingContainer } from '../styled';

export class ClassRemainingTodos extends React.Component {
  render() {
    const { count } = this.props;
    const suffix = count === 1 ? '' : 's';
    return (
      <RemainingContainer>
        <StyledHeading>Remaining Todos</StyledHeading>
        <strong>{count}</strong> item{suffix} left
      </RemainingContainer>
    );
  }
}
