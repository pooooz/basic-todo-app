import React from 'react';
import { connect } from 'react-redux';

import { selectRemainingCount } from 'store/selectors/todoSelectors';
import { StatusFilter } from 'containers/StatusFilter/Functional';
import { ColorFilters } from 'containers/ColorFilters/Functional';
import { RemainingTodos } from 'components/RemainingTodos/Functional';
import { StyledHeading } from 'containers/generalStyled';
import { ActionButton, ButtonContainer, SettingsContainer } from '../styled';

const mapStateToProps = (state) => ({
  remainingCount: selectRemainingCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleColorFilter: (color) => {
    dispatch({ type: 'filters/colorFilterChanged', payload: color });
  },
  handleStatusFilter: (status) => {
    dispatch({ type: 'filters/statusFilterChanged', payload: status });
  },
  handleAllCompleted: () => {
    dispatch({ type: 'todos/allCompleted' });
  },
  handleCompletedClear: () => {
    dispatch({ type: 'todos/completedCleared' });
  },
});

class Settings extends React.Component {
  render() {
    const {
      remainingCount,
      handleColorFilter,
      handleStatusFilter,
      handleAllCompleted,
      handleCompletedClear,
    } = this.props;
    return (
      <SettingsContainer>
        <ButtonContainer>
          <StyledHeading>Actions</StyledHeading>
          <ActionButton onClick={handleAllCompleted}>
            Mark All Completed
          </ActionButton>
          <ActionButton onClick={handleCompletedClear}>
            Clear Completed
          </ActionButton>
        </ButtonContainer>
        <RemainingTodos count={remainingCount} />
        <StatusFilter onChange={handleStatusFilter} />
        <ColorFilters onChange={handleColorFilter} />
      </SettingsContainer>
    );
  }
}

export const ClassSettings = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
