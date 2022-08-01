import React from 'react';

import { StatusFilters } from 'store/reducers/filtersSlice';
import { StyledHeading } from 'components/generalStyled';
import {
  ButtonContainer,
  StatusButton,
  StatusButtonList,
  StatusButtonWrap,
} from './styled';

export const StatusFilter = ({ onChange }) => {
  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key];
    const handleClick = () => onChange(value);

    return (
      <StatusButtonWrap key={value}>
        <StatusButton onClick={handleClick}>
          {key[0].toUpperCase() + key.slice(1)}
        </StatusButton>
      </StatusButtonWrap>
    );
  });

  return (
    <ButtonContainer>
      <StyledHeading>Filter by Status</StyledHeading>
      <StatusButtonList>{renderedFilters}</StatusButtonList>
    </ButtonContainer>
  );
};
