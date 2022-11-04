import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { BsGlobe, BsThreeDotsVertical } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";
import { useRef } from "react";
import { useCloseOnClickOutside } from "../hooks/useCloseOnClickOutside";
import { useCallback } from "react";

const TopNav = () => {
    const [expandSearch, setExpandSearch] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [devTools, setDevTools] = useState(false);

    const dropdownRef = useRef(null);
    const devToolsRef = useRef(null);
    const closeDropdown = useCallback(() => {
        setDropdown(false);
    }, []);
    const closeDevTools = useCallback(() => {
        setDevTools(false);
    });
    useCloseOnClickOutside(dropdownRef, closeDropdown);
    useCloseOnClickOutside(devToolsRef, closeDevTools);

    return (
        <nav className="px-6 py-1.5  flex items-center fixed top-0 left-0 w-full shadow-xl z-10 bg-white">
            <div className="w-8 h-8 basis-8 mr-2 cursor-pointer">
                <img src="./logo-youtube.svg" alt="logo" className="w-8 h-8" />
                <span className="opacity-0 select-none pointer-events-none">ssssss</span>
            </div>
            <div className="">
                <a
                    href="https://developers.google.com/youtube/v3/getting-started#intro"
                    className="text-[22px] text-[rgba(0,0,0,0.65)] hover:text-[rgba(0,0,0,0.87)]"
                >
                    YouTube
                </a>
            </div>
            <div className="flex items-center  mr-8">
                <BiChevronRight
                    size={24}
                    color={""}
                    className="mx-1 text-[rgba(0,0,0,0.65)] hover:text-[rgba(0,0,0,0.87)]"
                />
                <a
                    href="https://developers.google.com/youtube/v3/getting-started#intro"
                    className="text-[22px] text-[rgba(0,0,0,0.65)] hover:text-[rgba(0,0,0,0.87)] whitespace-nowrap"
                >
                    Data API
                </a>
            </div>
            <div className="flex justify-end basis-full  gap-4">
                <div
                    className={`relative z-20 ${
                        expandSearch ? "md:w-full" : "md-w-[200px]"
                    } flex justify-end`}
                >
                    <IoSearch
                        className="absolute top-[11px] left-[10px] text-gray-600 transition-all"
                        size={18}
                    />
                    <input
                        onFocus={() => {
                            setExpandSearch(!expandSearch);
                        }}
                        onBlur={() => {
                            setExpandSearch(!expandSearch);
                        }}
                        type="text"
                        placeholder="Search"
                        className="md:w-[200px] focus:md:w-full  bg-gray-100 hover:bg-gray-200 focus:bg-white focus:shadow-lg focus:outline-0
                         transition-all placeholder:text-gray-600 p-2 pl-10 rounded "
                    />
                </div>
                <div
                    onClick={() => {
                        setDropdown(!dropdown);
                    }}
                    ref={dropdownRef}
                    className="hidden  sm:flex relative text-gray-800 border border-gray-200 rounded text-sm px-3 font-semibold cursor-pointer  items-center hover:bg-gray-100 transition"
                >
                    <div className="flex items-center gap-2">
                        <BsGlobe size={20} />
                        <div>English</div>
                        <AiFillCaretDown size={14} />
                    </div>
                    <div
                        id="dropdown"
                        className={`${
                            dropdown ? "block" : "hidden"
                        } absolute top-[40px] left-0  h-[224px] py-2 bg-white rounded shadow-xl         overflow-y-auto overflow-x-hidden`}
                    >
                        <div className="p-4 font-normal whitespace-nowrap bg-gray-200">English</div>
                        <div className="p-4 font-normal whitespace-nowrap hover:bg-gray-100">
                            Bahasa Indonisia
                        </div>
                        <div className="p-4 font-normal whitespace-nowrap hover:bg-gray-100">Deutsch</div>
                        <div className="p-4 font-normal whitespace-nowrap hover:bg-gray-100">Español</div>
                        <div className="p-4 font-normal whitespace-nowrap hover:bg-gray-100">日本語</div>
                        <div className="p-4 font-normal whitespace-nowrap hover:bg-gray-100">한국어</div>
                        <div className="p-4 font-normal whitespace-nowrap hover:bg-gray-100">
                            Português – Brasil
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    {/* Google Developer Profile */}
                    <div
                        ref={devToolsRef}
                        onClick={() => {
                            setDevTools(!devTools);
                        }}
                        className="relative rounded-full border border-gray-300 w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
                    >
                        <BsThreeDotsVertical size={20} className="text-gray-600" />
                        <div
                            className={`${
                                devTools ? "opacity-100" : "opacity-0 invisible"
                            } transition-all py-2 w-[228px] bg-white rounded-lg absolute top-[40px] right-0 text-gray-800  shadow-[0_0_10px_rgba(0,0,0,.3)]  before:border-[10px] before:border-transparent  before:border-b-white  before:block before:absolute before:top-[-18px] before:right-[6px] `}
                        >
                            <div className="py-3.5 px-4 text-xs font-medium uppercase">
                                Google Developer Profile
                            </div>
                            <a href="link" className="block py-3.5 px-4 hover:bg-gray-100">
                                Dashboard
                            </a>
                            <a href="link" className="block py-3.5 px-4 hover:bg-gray-100">
                                Saved pages
                            </a>
                            <a href="link" className="block py-3.5 px-4 hover:bg-gray-100">
                                Profile
                            </a>
                        </div>
                    </div>

                    {/* Last Button */}
                    <div className="rounded-full  w-8 h-8 flex items-center justify-center cursor-pointer bg-[#c2185b] transition-all text-white hover:outline outline-gray-200 outline-[3px]">
                        a
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
