import styled from 'styled-components';

export const SettingsContainer = styled.section`
  min-height: 150px;
  padding: 10px 15px;
  text-align: center;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e6e6e6;
  background: #000000;
`;

export const ButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ActionButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  cursor: pointer;
  margin: 7px 0 0 0;
  padding: 5px;
  background-color: #a87fd9;
  border: 2px solid #794ab4;
  border-radius: 15px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
`;
