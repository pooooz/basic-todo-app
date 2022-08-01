import styled from 'styled-components';

export const TodoWrap = styled.section`
  width: 60vw;
  display: flex;
  flex-direction: column;
  background: #dbdbff;
  border-radius: 10px;
`;

export const TodoHeading = styled.h1`
  width: 100%;
  background-color: #6565fa;
  color: white;
  font-size: 32px;
  font-weight: 600;
  line-height: 60px;
  text-align: center;
  margin: 0 0 10px 0;
  border-radius: 10px 10px 0 0;
`;

export const TodoForm = styled.form`
  height: 30px;
  display: flex;
  justify-content: center;
  margin: 0 0 10px 0;
  padding: 0 5px;
`;

export const TodoAddButton = styled.button`
  cursor: pointer;
  padding: 5px;
  border: none;
  outline: none;
  border-radius: 0 10px 10px 0;
  color: #ffffff;
  font-weight: 600;
  background: #777dc5;
  transition: background 300ms;
  &:focus {
    outline: 2px solid #3b47c9;
  }
  &:hover {
    background: #424975;
  }
`;

export const TodoInput = styled.input.attrs(() => ({
  placeholder: 'What needs to be done?',
}))`
  width: 30vw;
  border-radius: 10px 0 0 10px;
  border: none;
  outline: none;
  padding: 0 5px;
  font-size: 18px;
  &:focus,
  &:focus + ${TodoAddButton} {
    outline: 2px solid #3b47c9;
  }
`;
