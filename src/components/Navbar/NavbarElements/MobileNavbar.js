import styled from 'styled-components';
import { useMenuContext } from '../../../context/menu';
import NavLinks from './NavLinks';

const MobileNavbar = () => {
  const { menuOpen } = useMenuContext();
  return (
    <MobileNav menuOpen={menuOpen}>
      <NavLinks />
    </MobileNav>
  );
};

export default MobileNavbar;

const MobileNav = styled.nav`
  z-index: 99;
  position: fixed;
  top: 0;
  height: 100%;
  width: 300px;
  display: flex;
  background-color: #fff7d0;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
  right: ${({ menuOpen }) => (menuOpen ? '0' : '-350px')};

  .nav-links {
    height: 100%;
    width: 100%;

    li {
      height: 100%;
      width: 100%;
      a {
        display: flex;
        justify-content: center;
        padding: 1rem;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 70%;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
