import { useState } from "react";
import { IoFilter } from "react-icons/io5";
import { BiChevronRight, BiChevronLeft, BiArrowBack } from "react-icons/bi";
import SidebarItem from "./SidebarItem";
import { referencePageData } from "../../data/data";
import { createPortal } from "react-dom";
import { useContext } from "react";
import SidebarContext from "../../store/sidebar-context";
import { AiOutlineClose } from "react-icons/ai";
import NavList from "../Navbar/NavList";
import { useCallback } from "react";

const Sidebar = ({ sidebarHandler, navVisible }) => {
    const [filteredData, setFilteredData] = useState(Object.entries(referencePageData));
    const [showNav, setShowNav] = useState(true);
    const [backToMenu, setBackToMenu] = useState(false);

    const { openMobileMenu, closeMenu } = useContext(SidebarContext);

    const filterData = (val) => {
        setFilteredData(
            Object.entries(referencePageData).filter((item) => {
                return item[0].toLowerCase().startsWith(val);
            })
        );
    };
    const openPageFromSideMenu = useCallback(() => {
        setBackToMenu(false);
    }, []);

    return (
        <div className="">
            <aside
                className={`${
                    openMobileMenu ? "translate-x-0" : "translate-x-[-100%]"
                } md:block md:translate-x-0  text-sm fixed bg-white  transition-all duration-300 z-[120] h-screen  top-0 left-0 
              ${showNav ? "w-[270px]" : "w-[0]"} 
              ${navVisible ? " md:top-[52px] md:h-[91.5vh] " : "md:top-[100px] md:h-[84vh]"} overflow-hidden`}
            >
                <div className="flex md:hidden items-center w-[95%] relative z-30 py-[6px] px-[14px] bg-white border-b border-gray-200 ">
                    <div
                        onClick={() => {
                            setBackToMenu(true);
                            if (backToMenu) {
                                setBackToMenu(false);
                                closeMenu();
                            }
                        }}
                        className="text-gray-700 p-2 rounded-full hover:bg-gray-100 cursor-pointer transition-all"
                    >
                        {backToMenu ? <AiOutlineClose size={22} /> : <BiArrowBack size={22} />}
                    </div>
                    <div className="w-8 h-8 basis-8 mx-2 cursor-pointer">
                        <img src="./logo-youtube.svg" alt="logo" className="w-8 h-8" />
                        <span className="opacity-0 select-none pointer-events-none">ssssss</span>
                    </div>
                    <div className="flex items-center">
                        <a
                            href="https://developers.google.com/youtube/v3/getting-started#intro"
                            className="text-[22px] text-[rgba(0,0,0,0.6)] hover:text-[rgba(0,0,0,0.87)] cursor-pointer transition-all"
                        >
                            YouTube
                        </a>
                    </div>
                </div>
                <div
                    className={`hidden md:flex absolute top-[0px] left-0 z-20 mb-3 md:p-6 bg-white border-b border-b-[rgb(218,220,224)]  transition-all duration-300  ${
                        showNav ? "w-[259px]" : "w-0 overflow-hidden"
                    }`}
                >
                    <IoFilter className="absolute top-[33px] left-[34px] text-[#585b5f]" />
                    <input
                        onChange={(e) => {
                            filterData(e.target.value);
                        }}
                        className="border-0 focus:outline-0  bg-gray-100 [&:not(:focus)]:hover:bg-gray-200 focus:bg-white focus:shadow-lg  px-8 py-[7px] w-full rounded text-gray-600 text-xs"
                        placeholder="Filter"
                        type="text"
                    />
                </div>
                <div
                    className={`sidebar-menu transition-all ${
                        backToMenu ? "translate-x-[100%]" : ""
                    } mt-[-2px] md:mt-0`}
                >
                    {filteredData.map((item) => {
                        return <SidebarItem key={item[0]} text={item[0]} list={item[1]}></SidebarItem>;
                    })}
                </div>
                <div
                    className={`sidebar-menu transition-all ${
                        backToMenu ? "" : "translate-x-[-100%]"
                    } mt-[-2] md:mt-0`}
                >
                    <NavList openPage={openPageFromSideMenu} />
                </div>
                <div className="hidden md:block absolute bottom-0 left-0 w-[96%] h-10 bg-white "></div>
                <div className="hidden md:block absolute bottom-10 left-0 w-[96%] h-3 bg-white/50 "></div>

                {/* Overlay */}
                {createPortal(
                    <div
                        onClick={() => {
                            setBackToMenu(false);
                            closeMenu();
                        }}
                        className={`${
                            openMobileMenu ? "block" : "hidden"
                        } fixed w-screen h-screen top-0 left-0 z-[100] overflow-hidden bg-black/40`}
                    ></div>,
                    document.querySelector("#modal")
                )}
            </aside>

            {/* Hide Button */}
            <div
                onClick={(e) => {
                    e.preventDefault();
                    sidebarHandler(!showNav);
                    setShowNav(!showNav);
                }}
                className={`fixed   bottom-4  group hidden md:flex items-center justify-center w-10 h-10  shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)]    text-gray-600 cursor-pointer transition-all duration-300 z-[150] ${
                    showNav
                        ? "left-[216px] bg-gray-200  rounded-full "
                        : "left-[-8px] active:left-[0] bg-white rounded-r-full"
                }`}
            >
                {showNav ? <BiChevronLeft size={20} /> : <BiChevronRight size={20} />}
                <div
                    className={`tooltip tooltip-top  group-hover:block ${
                        showNav ? "translate-x-[-25%]" : "translate-x-[15%]"
                    }`}
                >
                    {showNav ? "hide" : "show"} sidebar navigation
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
