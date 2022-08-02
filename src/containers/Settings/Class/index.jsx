import React from 'react';
import { connect } from 'react-redux';

import { selectRemainingCount } from 'store/selectors/todoSelectors';
import { ClassStatusFilter } from 'containers/StatusFilter/Class';
import { ClassColorFilters } from 'containers/ColorFilters/Class';
import { ClassRemainingTodos } from 'components/RemainingTodos/Class';
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
        <ClassRemainingTodos count={remainingCount} />
        <ClassStatusFilter onChange={handleStatusFilter} />
        <ClassColorFilters onChange={handleColorFilter} />
      </SettingsContainer>
    );
  }
}

export const ClassSettings = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
