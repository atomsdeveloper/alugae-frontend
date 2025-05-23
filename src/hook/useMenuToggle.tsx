import { useContext } from "react";

import { MenuToggleContext } from "../context/MenuToggleContext";

export const useMenuToggle = () => {
  const context = useContext(MenuToggleContext);
  if (!context) {
    throw new Error("useMenuToggle must be used within a MenuToggleProvider");
  }
  return context;
};
