import React from 'react';

import { StyledHeading } from 'containers/generalStyled';

export const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? '' : 's';

  return (
    <section>
      <StyledHeading>Remaining Todos</StyledHeading>
      <strong>{count}</strong> item{suffix} left
    </section>
  );
};
