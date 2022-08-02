import React from 'react';
import { connect } from 'react-redux';

import { selectStatus } from 'store/selectors/filterSelectors';
import { StatusFilters } from 'store/reducers/filtersSlice';
import { StyledHeading } from 'containers/generalStyled';
import {
  ButtonContainer,
  StatusButton,
  StatusButtonList,
  StatusButtonWrap,
} from '../styled';

const mapStateToProps = (state) => ({
  currentStatus: selectStatus(state),
});

class StatusFilter extends React.Component {
  render() {
    const { onChange, currentStatus } = this.props;
    const renderedFilters = Object.keys(StatusFilters).map((key) => {
      const value = StatusFilters[key];
      const handleClick = () => onChange(value);

      return (
        <StatusButtonWrap key={value}>
          <StatusButton
            onClick={handleClick}
            disabled={currentStatus === StatusFilters[key]}
          >
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
  }
}

export const ClassStatusFilter = connect(mapStateToProps)(StatusFilter);
