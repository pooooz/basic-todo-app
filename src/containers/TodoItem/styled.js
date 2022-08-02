import styled from 'styled-components';

export const TodoContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 0 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const TodoText = styled.h3`
  color: #000000;
  font-weight: 400;
  font-size: 20px;
`;

export const TodoInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TodoLabel = styled.label`
  cursor: pointer;
  margin: 0 0 0 30px;
  position: relative;
  color: #ffffff;
  &:before {
    cursor: pointer;
    position: absolute;
    content: '';
    width: 12px;
    height: 12px;
    border: 3px solid ${({ isActive, color }) => (isActive ? color : '#626262')};
    border-radius: 50%;
    left: -20px;
    transform: translate(-50%, -50%);
  }
`;

export const TodoInput = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  display: none;
`;

export const StyledSelect = styled.select`
  color: #ffffff;
  background: #000000;
  border-radius: 10px;
  padding: 2px 2px 2px 5px;
`;
