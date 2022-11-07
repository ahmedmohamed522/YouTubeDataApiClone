import React from "react";
import { BiChevronRight, BiMenu } from "react-icons/bi";
import { BsGlobe, BsThreeDotsVertical } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { FiCamera } from "react-icons/fi";
import { useCloseOnClickOutside } from "../../hooks/useCloseOnClickOutside";
import { useContext } from "react";
import SidebarContext from "../../store/sidebar-context";
import { useDropdown } from "../../hooks/useDropdown";
import Searchbar from "./Searchbar";

const TopNav = () => {
    const { openMenu } = useContext(SidebarContext);
    const { dropdown, dropdownRef, closeDropdown, toggleDropdown } = useDropdown();
    const {
        dropdown: devTools,
        dropdownRef: devToolsRef,
        closeDropdown: closeDevTools,
        toggleDropdown: toggleDevTools,
    } = useDropdown();
    const {
        dropdown: profileMenu,
        dropdownRef: profileMenuRef,
        closeDropdown: closeProfileMenu,
        toggleDropdown: toggleProfileMenu,
    } = useDropdown();

    useCloseOnClickOutside(dropdownRef, closeDropdown);
    useCloseOnClickOutside(devToolsRef, closeDevTools);
    useCloseOnClickOutside(profileMenuRef, closeProfileMenu);

    return (
        <nav className="px-2 md:px-6 py-1.5  flex items-center fixed top-0 left-0 w-full shadow-xl z-[50] md:z-[125] bg-white">
            <div
                onClick={openMenu}
                className="md:hidden p-2 rounded-full hover:bg-gray-100 cursor-pointer transition-all mr-3 md:mr-2"
            >
                <BiMenu className="text-gray-600  hover:text-gray-900 transition-colors" size={24} />
            </div>
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
            <div className="hidden md:flex items-center  mr-8">
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
            <div className="flex justify-end basis-full  gap-4 ">
                {/* Searchbar start */}
                <Searchbar />
                {/* Searchbar end */}

                {/* Languages Dropdown start */}
                <div
                    onClick={toggleDropdown}
                    ref={dropdownRef}
                    className="hidden  sm:flex md:gap-1 relative text-gray-800 border border-gray-200 rounded text-sm px-3 font-semibold cursor-pointer  items-center hover:bg-gray-100 transition"
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

                {/* Languages Dropdown end */}

                <div className="flex items-center gap-4">
                    {/* Google Developer Profile */}
                    <div
                        ref={devToolsRef}
                        onClick={toggleDevTools}
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
                    <div ref={profileMenuRef} className="relative">
                        <div
                            onClick={toggleProfileMenu}
                            className="relative rounded-full  w-8 h-8 flex items-center justify-center cursor-pointer bg-[#c2185b] transition-all text-white hover:outline outline-gray-200 outline-[3px]"
                        >
                            <span>a</span>
                        </div>

                        {/* Dropdown */}
                        <div
                            className={`${
                                profileMenu ? "block" : "hidden "
                            } absolute top-[60px] right-0 max-w-[340px] w-[360px] rounded-lg shadow bg-white flex flex-col cursor-auto`}
                        >
                            <div className="self-center p-6">
                                <div className="relative rounded-full bg-[#c2185b] text-white p-10 flex justify-center items-center w-8 h-8 text-4xl">
                                    <span>a</span>
                                    <div className="absolute bg-white p-1 rounded-full  right-0 bottom-0 shadow cursor-pointer">
                                        <FiCamera size={18} className="text-gray-900 hover:text-blue-500" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center pb-6 border-b border-gray-200">
                                <p className="text-gray-900 font-medium ">ahmed mohamed</p>
                                <p className="text-gray-600 text-sm mb-4">frontenddeveloper12020@gmail.com</p>
                                <button className="border border-gray-300 py-2 px-3 rounded-full text-gray-900 text-[13px] font-medium hover:bg-gray-50">
                                    Manage your Google Account
                                </button>
                            </div>
                            <div className="flex justify-center gap-1 py-4 text-gray-800 text-[13px]">
                                <a href="something" className="hover:bg-gray-100 p-1 rounded transition-all">
                                    Privacy Policy
                                </a>
                                <p className="flex items-center font-bold leading-none px-1 pb-2 hover:bg-gray-100">
                                    .
                                </p>
                                <a href="something" className="hover:bg-gray-100 p-1 rounded transition-all">
                                    Terms of Service
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
