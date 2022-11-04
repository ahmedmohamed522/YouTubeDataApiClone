import { useState } from "react";
import { IoFilter } from "react-icons/io5";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import SidebarItem from "./SidebarItem";

const data = {
    Overview: [],
    Activities: ["Overview", "list"],
    Captions: ["Overview", "list", "insert", "update", "download", "delete"],
    ChannelBanners: ["Overview", "list"],
    Channels: ["Overview", "list", "update"],
    ChannelSections: ["Overview", "list", "insert", "update", "download", "delete"],
    Comments: ["Overview", "list", "insert", "update", "download", "delete"],
    CommentThreads: ["Overview", "list", "insert", "update", "download", "delete"],
    C18nLanguages: ["Overview", "list", "insert", "update", "download", "delete"],
    C18nRegions: ["Overview", "list", "insert", "update", "download", "delete"],
    Cembers: ["Overview", "list", "insert", "update", "download", "delete"],
    CembershipLevels: ["Overview", "list", "insert", "update", "download", "delete"],
    playlistItems: ["Overview", "list", "insert", "update", "download", "delete"],
    channelSections: ["Overview", "list", "insert", "update", "download", "delete"],
    playlists: ["Overview", "list", "insert", "update", "download", "delete"],
    search: ["Overview", "list", "insert", "update", "download", "delete"],
    subscriptions: ["Overview", "list", "insert", "update", "download", "delete"],
    VideoAbuseReportReasons: ["Overview", "list", "insert", "update", "download", "delete"],
    VideoCategories: ["Overview", "list", "insert", "update", "download", "delete"],
    Videos: ["Overview", "list", "insert", "update", "download", "delete"],
    Watermarks: ["Overview", "list", "insert", "update", "download", "delete"],
    YouTubeDataAPIErrors: ["Overview", "list", "insert", "update", "download", "delete"],
};

const Sidebar = ({ sidebarHandler, navVisible }) => {
    const [filteredData, setFilteredData] = useState(Object.entries(data));
    const [showNav, setShowNav] = useState(true);
    const filterData = (val) => {
        setFilteredData(
            Object.entries(data).filter((item) => {
                return item[0].toLowerCase().startsWith(val);
            })
        );
        console.log(filteredData);
    };

    return (
        <aside
            className={`hidden fixed ${
                navVisible ? "top-[52px] h-[91.5vh] " : "top-[100px] h-[84vh]"
            } left-0  md:block text-sm    bg-white ${
                showNav ? "w-[270px]" : "w-[0] overflow-hidden"
            } transition-all duration-300`}
        >
            <div
                className={`flex absolute top-[0px] left-0 z-20 mb-3 md:p-6 bg-white border-b-[1px] border-b-[rgb(218,220,224)]  transition-all duration-300  ${
                    showNav ? "w-[259px]" : "w-0 overflow-hidden"
                }`}
            >
                <IoFilter className="absolute top-[33px] left-[34px] text-[#585b5f]" />
                <input
                    onChange={(e) => {
                        filterData(e.target.value);
                    }}
                    className="border-0 focus:outline-0  bg-gray-100 hover:bg-gray-200 focus:bg-white focus:shadow-lg hover:focus:bg-white px-8 py-[7px] w-full rounded text-gray-600 text-xs"
                    placeholder="Filter"
                    type="text"
                />
            </div>
            <div className=" absolute w-full h-full  top-0 pt-[90px]  pb-11  pr-2 overflow-y-auto  scrollbar-thin  scrollbar-thumb-[#dee0e1] scrollbar-track-gray-100 scrollbar-w-[10px]">
                {filteredData.map((item) => {
                    return <SidebarItem key={item[0]} text={item[0]} list={item[1]}></SidebarItem>;
                })}
            </div>
            <div className="absolute bottom-0 left-0 w-[96%] h-10 bg-white "></div>
            <div className="absolute bottom-10 left-0 w-[96%] h-3 bg-white/50 "></div>

            {/* Hide Button */}
            <div
                onClick={(e) => {
                    e.preventDefault();
                    sidebarHandler(!showNav);
                    setShowNav(!showNav);
                }}
                className={`fixed   bottom-4  group flex items-center justify-center w-10 h-10  shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)]    text-gray-600 cursor-pointer transition-all duration-300  ${
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
        </aside>
    );
};

export default Sidebar;
