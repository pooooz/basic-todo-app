import styled from 'styled-components';

export const StyledUl = styled.ul`
  height: 300px;
  padding: 0 10px;
  background: #a87fd9;
  overflow-y: auto;
  word-break: break-all;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    height: 10vh;
    background: #000000;
    border-radius: 15px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #4f4f4f;
  }
`;
