import React from "react";
import ScrollSpy from "react-ui-scrollspy";

const RightSide = ({ navVisible }) => {
    const clickHandler = (e) => {
        document.querySelectorAll("a").forEach((e) => e.classList.remove("active-scroll-spy"));
        e.target.classList.add("active-scroll-spy");
    };
    return (
        <div
            id="parent"
            className={`hidden xl:block basis-[168px] w-[168px] mt-6 fixed right-0 ${
                navVisible ? "top-[52px]" : "top-[100px]"
            }`}
        >
            <div className="flex flex-col gap-1 text-[13px] border-l-4 border-[#ff0000] pl-2 mr-6  h-[240px] overflow-auto  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <strong className="pointer-events-none text-gray-800 mb-1 ">On this page</strong>
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
        </div>
    );
};

export default RightSide;
