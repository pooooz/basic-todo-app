import styled from 'styled-components';

export const ButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const StatusButtonWrap = styled.li`
  margin: 8px 0 0 0;
`;

export const StatusButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  cursor: pointer;
  width: 100%;
  padding: 2px 0;
  background-color: #777dc5;
  border: 2px solid #5765f5;
  border-radius: 15px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;

  &:disabled {
    background-color: #a2a7e7;
    border: 2px solid #21267c;
  }
`;

export const StatusButtonList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;
