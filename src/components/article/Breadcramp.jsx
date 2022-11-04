import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { FiThumbsUp } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";

const Breadcramp = () => {
    return (
        <div className="flex items-center justify-between flex-wrap  sm:flex-nowrap mb-4">
            <div className="flex items-center gap-1 mb-4 sm:mb-0">
                <a href="/" className="text-gray-700 hover:text-blue-500 text-[13px] transition-all">
                    Home
                </a>
                <BiChevronRight className="text-gray-700" size={18} />
                <a href="/" className="text-gray-700 hover:text-blue-500 text-[13px] transition-all">
                    Products
                </a>
                <BiChevronRight className="text-gray-700" size={18} />
                <a href="/" className="text-gray-700 hover:text-blue-500 text-[13px] transition-all">
                    YouTube
                </a>
                <BiChevronRight className="text-gray-700" size={18} />
                <a href="/" className="text-gray-700 hover:text-blue-500 text-[13px] transition-all">
                    Data API
                </a>
                <BiChevronRight className="text-gray-700" size={18} />
                <a href="/" className="text-gray-700 hover:text-blue-500 text-[13px] transition-all">
                    Reference
                </a>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
                <p className="text-[13px] text-black">Was this helpful?</p>
                <div className="flex gap-1">
                    <div className="relative hover:bg-gray-100 rounded-full p-1 cursor-pointer group">
                        <FiThumbsUp />

                        <div className={`tooltip tooltip-bottom translate-x-[-25%] group-hover:block`}>
                            Helpful
                        </div>
                    </div>
                    <div className="relative hover:bg-gray-100 rounded-full p-1 cursor-pointer group">
                        <FiThumbsDown />
                        <div className={`tooltip tooltip-bottom translate-x-[-25%] group-hover:block`}>
                            Not helpful
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breadcramp;
