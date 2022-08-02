import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: #a87fd9;
  opacity: 0.7;
  text-decoration: none;
  font-weight: 800;

  &.active {
    opacity: 1;
    position: relative;
  }

  &.active::after {
    position: absolute;
    content: '';
    height: 2px;
    bottom: -5px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 100%;
  }
`;
