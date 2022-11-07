import React, { useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import { IoSearch } from "react-icons/io5";
import { useCloseOnClickOutside } from "../../hooks/useCloseOnClickOutside";

import { useSearchbar } from "../../hooks/useSearchbar";

const Searchbar = () => {
    const {
        isSearchbarOpen,
        searchbarRef,
        searchFieldRef,
        closeSearchbar,
        openSearchbar,
        expandSearchbarHandler,
    } = useSearchbar();

    useCloseOnClickOutside(searchbarRef, closeSearchbar);

    useEffect(() => {
        if (isSearchbarOpen) searchFieldRef.current.focus();
    }, [isSearchbarOpen, searchFieldRef]);

    return (
        <div className={`flex items-center justify-end w-full`}>
            {/* Icon displayed in mobile */}
            <IoSearch
                onClick={() => {
                    openSearchbar();
                    searchFieldRef.current.focus();
                }}
                className="md:hidden text-gray-600 cursor-pointer"
                size={20}
            />
            {/* Searchbar */}
            <div
                ref={searchbarRef}
                className={`${
                    isSearchbarOpen ? "flex" : "hidden"
                } md:flex absolute right-0 top-0 z-30 bg-white md:bg-transparent md:static  items-center gap-4 w-[87.5vw] sm:w-[90vw] h-full md:w-full`}
            >
                <div className={`flex relative z-20 w-full  justify-end group`}>
                    <div
                        className={`${
                            isSearchbarOpen ? "w-full" : "w-[200px] group-focus-within:w-full"
                        }  h-full transition-all absolute top-0 right-0 pointer-events-none`}
                    >
                        <IoSearch className="absolute top-[11px] left-[10px] text-gray-600 " size={18} />
                    </div>
                    <input
                        ref={searchFieldRef}
                        onFocus={expandSearchbarHandler}
                        onBlur={expandSearchbarHandler}
                        type="text"
                        placeholder="Search"
                        className={`${
                            isSearchbarOpen ? "w-full" : "w-[200px] focus:w-full"
                        }  bg-gray-100 hover:bg-gray-200 focus:bg-white focus:shadow-lg focus:outline-0
                         transition-all placeholder:text-gray-600 p-2 pl-10 rounded `}
                    />
                </div>

                {/* Icon to close searchbar in mobile */}
                <AiFillCloseCircle
                    onClick={() => {
                        closeSearchbar();
                        searchFieldRef.current.blur();
                    }}
                    size={24}
                    className="block md:hidden text-gray-600 cursor-pointer"
                />
            </div>
        </div>
    );
};

export default Searchbar;
