import React from 'react';

import { StatusFilter } from 'containers/StatusFilter';
import { ColorFilters } from 'containers/ColorFilters';
import { RemainingTodos } from 'containers/RemainingTodos';
import { StyledHeading } from 'components/generalStyled';
import { ActionButton, ButtonContainer, SettingsContainer } from './styled';

export const Settings = () => (
  <SettingsContainer>
    <ButtonContainer>
      <StyledHeading>Actions</StyledHeading>
      <ActionButton>Mark All Completed</ActionButton>
      <ActionButton>Clear Completed</ActionButton>
    </ButtonContainer>
    <RemainingTodos count={14} />
    <StatusFilter onChange={() => console.log('status filter changed')} />
    <ColorFilters onChange={() => console.log('color filter changed')} />
  </SettingsContainer>
);
