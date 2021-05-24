import styled from 'styled-components';

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;

const StyledBurger = styled.button`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 999;
  right: 24px;
  top: 48px;
  height: ${({ open }) => (open ? '30px' : '17px')};

  @media screen and (min-width:1200px) {
    display: none;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 30px;
    height: 3px;
    background: #000;
    border-radius: 10px;
    transition: all 0.2s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
