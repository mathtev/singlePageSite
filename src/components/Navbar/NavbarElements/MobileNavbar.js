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
  width: 350px;
  display: flex;
  background-color: red;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
  right: ${({ menuOpen }) => (menuOpen ? '0' : '-350px')};
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
