import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import logoImg from '../../../assets/images/Logo.svg';

const DesktopNavbar = () => {
  return (
    <Nav>
      <Link to="/" className="logo">
        <img src={logoImg} alt="logo" />
      </Link>
      <NavLinks />
    </Nav>
  );
};

export default DesktopNavbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 27px;
  left: 0;
  width: 100%;
  height: 55px;
  padding: 0 11.8%;
  @media screen and (max-width: 1200px) {
    padding: 0 24px;
  }
  .nav-links {
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
`;
