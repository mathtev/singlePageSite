import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { useMenuContext } from '../../../context/menu';

export const links = ['Home', 'About', 'Courses', 'News', 'Contact'];

const NavLinks = () => {
  const { closeMenu } = useMenuContext();

  return (
    <NavLinksWrapper className="nav-links">
      {links.map((link) => (
        <li key={link}>
          <NavLink
            to={`/${link}`}
            className="link"
            activeClassName="is-active"
            onClick={closeMenu}
          >
            <span>{link}</span>
            <div></div>
          </NavLink>
        </li>
      ))}
      <li>
        <NavLink to={`/login`} className="login link" onClick={closeMenu}>
          <span>Log in</span>
        </NavLink>
      </li>
    </NavLinksWrapper>
  );
};

export default NavLinks;

const NavLinksWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  li {
    padding-left: 40px;
    height: 36px;
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    li {
      padding: 12px;
      margin: 0 !important;
    }
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  text-decoration: none;

  span {
    font-size: 24px;
  }

  &.is-active {
    div {
      position: absolute;
      margin-right: auto;
      margin-left: auto;
      left: 0;
      right: 0;
      bottom: -13px;

      text-align: center;
      background-color: var(--colorSecondary);
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
  }

  &.login {
    padding: 7px 31px;
    border-radius: 8px;
    background-color: var(--colorSecondary);
  }
`;
