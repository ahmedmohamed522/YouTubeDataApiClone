import React from "react";
import { useState } from "react";
import { BiChevronDown, BiDotsHorizontalRounded } from "react-icons/bi";
import { BsChevronUp } from "react-icons/bs";
import ScrollSpy from "react-ui-scrollspy";

import { referencePageSections as sections } from "../data/data";

const RightSide = ({ navVisible }) => {
    const clickHandler = (e) => {
        document.querySelectorAll("a").forEach((e) => e.classList.remove("active-scroll-spy"));
        e.target.classList.add("active-scroll-spy");
    };
    const [openPageNav, setOpenPageNav] = useState(false);

    return (
        <div
            id="parent"
            className={` basis-[168px] w-[168px] mt-6 xl:fixed right-0 ${
                navVisible ? "top-[52px]" : "top-[100px]"
            }  mb-6 xl:mb-0  z-10`}
        >
            <div className={`flex flex-col gap-1 text-[13px] border-l-4 border-[#ff0000] pl-2 mr-6  `}>
                <div className="flex items-center gap-2 mb-0.5">
                    <strong className="pointer-events-none text-gray-800 leading-none mb-1 ">
                        On this page
                    </strong>
                    <BiChevronDown
                        onClick={() => {
                            setOpenPageNav(!openPageNav);
                        }}
                        size={20}
                        className="block xl:hidden cursor-pointer"
                    />
                </div>
                <div
                    className={`${
                        openPageNav ? "h-auto" : "h-[160px]"
                    }  xl:h-[200px] overflow-hidden xl:overflow-auto  xl:scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100`}
                >
                    <ScrollSpy>
                        <a
                            href="#call-api"
                            onClick={clickHandler}
                            data-to-scrollspy-id="call-api"
                            className="mb-1 hover:text-blue-600 "
                        >
                            Calling The API
                        </a>
                        <a
                            href="#resources-types"
                            onClick={clickHandler}
                            data-to-scrollspy-id="resources-types"
                            className="mb-1 hover:text-blue-600"
                        >
                            Resources type
                        </a>
                        <a
                            href="#activities"
                            onClick={clickHandler}
                            data-to-scrollspy-id="activities"
                            className="mb-1 ml-4  hover:text-blue-600"
                        >
                            Activities
                        </a>
                        <a
                            href="#captions"
                            onClick={clickHandler}
                            data-to-scrollspy-id="captions"
                            className="mb-1 ml-4  hover:text-blue-600"
                        >
                            captions
                        </a>
                        <a
                            href="#channel-banners"
                            onClick={clickHandler}
                            data-to-scrollspy-id="channel-banners"
                            className="mb-1 ml-4 hover:text-blue-600 "
                        >
                            ChannelBanners
                        </a>
                        <a
                            href="#channel-sections"
                            onClick={clickHandler}
                            data-to-scrollspy-id="channel-sections"
                            className="mb-1 ml-4  hover:text-blue-600"
                        >
                            ChannelSections
                        </a>
                        <a
                            href="#channels"
                            onClick={clickHandler}
                            data-to-scrollspy-id="channels"
                            className="mb-1 ml-4 hover:text-blue-600 "
                        >
                            Channels
                        </a>
                        <a
                            href="#comment-threads"
                            onClick={clickHandler}
                            data-to-scrollspy-id="comment-threads"
                            className="mb-1 ml-4 hover:text-blue-600 "
                        >
                            CommentThreads
                        </a>
                        <a
                            href="#comments"
                            onClick={clickHandler}
                            data-to-scrollspy-id="comments"
                            className="mb-1 ml-4 hover:text-blue-600 "
                        >
                            Comments
                        </a>
                        <a
                            href="#guide-categories"
                            onClick={clickHandler}
                            data-to-scrollspy-id="guide-categories"
                            className="mb-1 ml-4  hover:text-blue-600"
                        >
                            GuideCategories
                        </a>
                    </ScrollSpy>
                </div>

                <div
                    onClick={() => {
                        setOpenPageNav(!openPageNav);
                    }}
                    className="xl:hidden text-gray-700"
                >
                    {openPageNav ? (
                        <BsChevronUp size={16} className="ml-1.5 cursor-pointer" />
                    ) : (
                        <BiDotsHorizontalRounded size={20} className="ml-1 cursor-pointer" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default RightSide;
