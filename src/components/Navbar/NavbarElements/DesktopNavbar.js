import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import Icon from '../../Icon/Icon';

const DesktopNavbar = () => {
  return (
    <Nav>
      <Link to="/" className="logo">
        <Icon glyph="ellipse" />
        <div className="logoText">
          <span>Medli</span>
          <div></div>
        </div>
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
  .logo {
    text-decoration: none;
    display: flex;
    align-items: flex-end;

    img {
      width: 56px;
    }
    .logoText {
      position: relative;
      margin-left: 15px;
      width: 102px;
      height: 47px;
      text-align: center;

      span {
        font-size: 40px;
        font-family: var(--fontSecondary);
      }
      div {
        position: absolute;
        right: 3px;
        top: 8px;
        background-color: var(--colorSecondary);
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }
    }
  }
  .nav-links {
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
`;
