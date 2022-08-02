import React from 'react';
import { Outlet } from 'react-router-dom';

import { NavItem } from 'components/NavItem';
import { Navbar, StyledHeader } from './styled';

export const Header = () => (
  <>
    <StyledHeader>
      <Navbar>
        <NavItem to="/functional">Functional</NavItem>
        <NavItem to="/class">Class</NavItem>
      </Navbar>
    </StyledHeader>
    <main>
      <Outlet />
    </main>
  </>
);
