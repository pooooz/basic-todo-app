import React from 'react';

import { StyledHeading } from 'containers/generalStyled';
import { RemainingContainer } from '../styled';

export const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? '' : 's';

  return (
    <RemainingContainer>
      <StyledHeading>Remaining Todos</StyledHeading>
      <strong>{count}</strong> item{suffix} left
    </RemainingContainer>
  );
};
