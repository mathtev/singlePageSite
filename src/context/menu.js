import React, { createContext, useContext, useState } from 'react';

const MenuContext = createContext({
  menuOpen: false,
  toggleMenu: () => undefined,
});

export const MenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <MenuContext.Provider
      value={{
        menuOpen,
        toggleMenu,
        closeMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  return useContext(MenuContext);
};
