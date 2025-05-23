import React, { createContext, useState } from "react";

interface MenuToggleContextType {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

export const MenuToggleContext = createContext<
  MenuToggleContextType | undefined
>(undefined);

export const MenuToggleProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <MenuToggleContext.Provider value={{ isOpen, openMenu, closeMenu }}>
      {children}
    </MenuToggleContext.Provider>
  );
};
