import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import NavLinks from './NavLinks';

import ellipseImg from '../../../assets/images/Ellipse 2.svg';

const DesktopNavbar = () => {
  return (
    <Nav>
      <Link to="/" className="logo">
        <img src={ellipseImg} alt="eclipse" />
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
  position: fixed;
  top: 27px;
  left: 0;
  width: 100%;
  height: 55px;
  padding: 0 11.8%;
  @media screen and (max-width:1224px) {
    padding: 0 24px;
  }
  .logo {
    text-decoration: none;
    display: flex;
    align-items: flex-end;

    .logoText {
      position: relative;
      margin-left: 15px;
      width: 102px;
      height: 47px;
      text-align: center;

      span {
        font-size: 40px;
        font-family: var(--fontSecondary);
        color: var(--colorPrimary);
        font-weight: bold;
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
    @media screen and (max-width:1224px) {
      display: none;
    }
  }
`;
