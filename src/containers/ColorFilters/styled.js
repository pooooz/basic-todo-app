import styled from 'styled-components';

export const ColorFilterLabel = styled.label`
  cursor: pointer;
  margin: 3px 0 0 20px;
  position: relative;
  &:before {
    cursor: pointer;
    position: absolute;
    content: '';
    width: 12px;
    height: 12px;
    border: 3px solid ${({ isActive, color }) => (isActive ? color : '#a4a4a4')};
    border-radius: 50%;
    left: -20px;
  }
`;

export const ColorFilterInput = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  display: none;
`;

export const ColorForm = styled.form`
  display: flex;
  justify-content: center;
`;

export const ColorFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  outline: none;
  border: none;
`;
