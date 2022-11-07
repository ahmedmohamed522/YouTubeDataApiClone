import { useCallback, useRef, useState } from "react";

export const useDropdown = () => {
    const [dropdown, setDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const closeDropdown = useCallback(() => {
        setDropdown(false);
    }, []);
    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };
    return { dropdown, dropdownRef, closeDropdown, toggleDropdown };
};
