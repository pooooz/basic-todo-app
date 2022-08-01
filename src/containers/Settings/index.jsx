import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectRemainingCount } from 'store/selectors/todoSelectors';
import { StatusFilter } from 'containers/StatusFilter';
import { ColorFilters } from 'containers/ColorFilters';
import { RemainingTodos } from 'containers/RemainingTodos';
import { StyledHeading } from 'components/generalStyled';
import { ActionButton, ButtonContainer, SettingsContainer } from './styled';

export const Settings = () => {
  const remainingCount = useSelector(selectRemainingCount);
  const dispatch = useDispatch();

  const handleColorFilter = (color) => {
    dispatch({ type: 'filters/colorFilterChanged', payload: color });
  };

  const handleStatusFilter = (status) => {
    dispatch({ type: 'filters/statusFilterChanged', payload: status });
  };

  return (
    <SettingsContainer>
      <ButtonContainer>
        <StyledHeading>Actions</StyledHeading>
        <ActionButton onClick={() => dispatch({ type: 'todos/allCompleted' })}>
          Mark All Completed
        </ActionButton>
        <ActionButton
          onClick={() => dispatch({ type: 'todos/completedCleared' })}
        >
          Clear Completed
        </ActionButton>
      </ButtonContainer>
      <RemainingTodos count={remainingCount} />
      <StatusFilter onChange={handleStatusFilter} />
      <ColorFilters onChange={handleColorFilter} />
    </SettingsContainer>
  );
};
