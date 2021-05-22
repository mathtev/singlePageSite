import React from 'react';
import styled from 'styled-components';
import { useMenuContext } from '../../context/menu';
import DesktopNavbar from './NavbarElements/DesktopNavbar';
import MobileNavbar from './NavbarElements/MobileNavbar';
import Burger from './NavbarElements/NavBurger';

const Navbar = () => {
  const { menuOpen, toggleMenu } = useMenuContext();
  return (
    <Nav>
      <DesktopNavbar />
      <MobileNavbar />
      <Burger open={menuOpen} setOpen={toggleMenu}/>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export default Navbar;
