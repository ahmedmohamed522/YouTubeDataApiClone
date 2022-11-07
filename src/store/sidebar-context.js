import { useState } from "react";
import { createContext } from "react";

const SidebarContext = createContext({
    openMobileMenu: false,
    closeMenu: () => {},
    openMenu: () => {},
});
export default SidebarContext;

export const SidebarContextProvider = ({ children }) => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const closeMenu = () => {
        setOpenMobileMenu(false);
    };
    const openMenu = () => {
        setOpenMobileMenu(true);
    };
    return (
        <SidebarContext.Provider value={{ openMobileMenu, closeMenu, openMenu }}>
            {children}
        </SidebarContext.Provider>
    );
};
