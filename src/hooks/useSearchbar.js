import { useRef, useState } from "react";

export const useSearchbar = () => {
    const [expandSearch, setExpandSearch] = useState(false);
    const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
    const searchbarRef = useRef(null);
    const searchFieldRef = useRef(null);
    const closeSearchbar = () => {
        setIsSearchbarOpen(false);
    };
    const openSearchbar = () => {
        setIsSearchbarOpen(true);
    };
    const expandSearchbarHandler = () => {
        setExpandSearch(!expandSearch);
    };
    return {
        isSearchbarOpen,
        searchbarRef,
        searchFieldRef,
        openSearchbar,
        closeSearchbar,
        expandSearchbarHandler,
    };
};
