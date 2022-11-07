import React from "react";
import { useState } from "react";
import { MdArrowRight } from "react-icons/md";

const SidebarItem = ({ text, list }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-[100%] md:w-[94%]">
            <div className={` relative  cursor-pointer`}>
                <MdArrowRight
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    size={18}
                    className={`${text === "Overview" ? "hidden" : "absolute left-1 top-1 text-[#202124]"}`}
                />
                <a
                    className={`${
                        text === "Overview"
                            ? "inline-block text-[12px] font-bold font-[roboto] pl-6 pr-2 py-1 bg-[#e8f0fe] text-[#185abc] hover:text-[#1a73e8] rounded-r-full w-[99%] md:w-[94%] mr-2"
                            : "sidebar-item pl-6"
                    }`}
                    href="https://developers.google.com/youtube/v3/docs#resource-types"
                >
                    {text}
                </a>
            </div>
            <div className={`${isOpen ? "block" : "hidden"}`}>
                {list.map((item) => (
                    <div key={item} className="">
                        <a
                            className="sidebar-item pl-8"
                            href="https://developers.google.com/youtube/v3/docs#resource-types"
                        >
                            {item}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SidebarItem;
