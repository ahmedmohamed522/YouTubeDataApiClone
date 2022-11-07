import React, { useCallback } from "react";
import { useRef } from "react";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { useCloseOnClickOutside } from "../hooks/useCloseOnClickOutside";

const Footer = () => {
    const [dropdown, setDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const closeDropdown = useCallback(() => {
        setDropdown(false);
    }, []);

    useCloseOnClickOutside(dropdownRef, closeDropdown);

    return (
        <div className="relative z-20 md:ml-[269px] px-6 bg-white">
            <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-start lg:items-center gap-2 md:gap-6 py-[18px] border-b border-gray-200 w-full">
                {/* Item */}
                <div className="md:my-5 md:basis-[46%] md:px-5 lg:basis-auto">
                    <a
                        href="Youtube"
                        className="flex md:flex-col gap-2 md:gap-0 items-center hover:text-blue-500  mb-2"
                    >
                        <div className="w-[32px] md:w-[48px] h-[32px] md:h-[48px] flex items-center">
                            <img src="/logo-youtube.svg" alt="Youtube" className="w-full h-auto" />
                        </div>
                        <p>Blog</p>
                    </a>{" "}
                    <p className="hidden md:block text-center text-sm font-[roboto] text-gray-900">
                        The latest news on the YouTube blog
                    </p>
                </div>
                {/* Item */}
                <div className="md:my-5 md:basis-[46%] md:px-5 lg:basis-auto">
                    <a
                        href="Youtube"
                        className="flex md:flex-col gap-2 md:gap-0 items-center hover:text-blue-500  mb-2"
                    >
                        <div className="w-[32px] md:w-[48px] h-[32px] md:h-[48px] flex items-center">
                            <img src="/logo-github.svg" alt="github" className="w-full h-auto" />
                        </div>
                        <p>GitHub</p>
                    </a>{" "}
                    <p className="hidden md:block text-center text-sm font-[roboto] text-gray-900">
                        Find API code samples and other YouTube open-source projects.
                    </p>
                </div>
                {/* Item */}
                <div className="md:my-5 md:basis-[46%] md:px-5 lg:basis-auto">
                    <a
                        href="Youtube"
                        className="flex md:flex-col gap-2 md:gap-0 items-center hover:text-blue-500  mb-2"
                    >
                        <div className="w-[32px] md:w-[48px] h-[32px] md:h-[48px] flex items-center">
                            <img src="/developers_64dp.png" alt="Issue tracker" className="w-full h-auto" />
                        </div>
                        <p>Issue Tracker</p>
                    </a>{" "}
                    <p className="hidden md:block text-center text-sm font-[roboto] text-gray-900">
                        Something wrong? Send us a bug report!
                    </p>
                </div>
                {/* Item */}
                <div className="md:my-5 md:basis-[46%] md:px-5 lg:basis-auto">
                    <a
                        href="Youtube"
                        className="flex md:flex-col gap-2 md:gap-0 items-center hover:text-blue-500 mb-2"
                    >
                        <div className="w-[32px] md:w-[48px] h-[32px] md:h-[48px] flex items-center ">
                            <img
                                src="/logo-stack-overflow.svg"
                                alt="Stack Overflow"
                                className="w-full h-auto"
                            />
                        </div>
                        <p>Stack Overflow</p>
                    </a>{" "}
                    <p className="hidden md:block text-center text-sm font-[roboto] text-gray-900">
                        Ask a question under the youtube-api tag
                    </p>
                </div>
                {/* Item */}
                <div className="md:my-5 md:basis-[46%] md:px-5 lg:basis-auto">
                    <a
                        href="Youtube"
                        className="flex md:flex-col gap-2 md:gap-0 items-center hover:text-blue-500  mb-2"
                    >
                        <div className="flex items-center w-[32px] md:w-[48px] h-[32px] md:h-[48px]">
                            <img src="/logo-youtube.svg" alt="Youtube" className="w-full h-auto" />
                        </div>
                        <p>Videos</p>
                    </a>{" "}
                    <p className="hidden md:block text-center text-sm font-[roboto] text-gray-900">
                        Check out the YouTube Developer Relations team's YouTube channel
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 py-6 border-b border-gray-300">
                <div className="flex flex-col items-start grow text-gray-900">
                    <p className="mb-1">Tools</p>
                    <a href="link" className="py-[6px] md:py-2 text-sm hover:text-blue-500">
                        Google APIs Explorer
                    </a>
                    <a href="link" className="py-[6px] md:py-2 text-sm hover:text-blue-500">
                        YouTube Player Demo
                    </a>
                    <a href="link" className="py-[6px] md:py-2 text-sm hover:text-blue-500">
                        Configure a Subscribe Button
                    </a>
                </div>

                <div className="flex flex-col items-start grow text-gray-900  ">
                    <p className="mb-1">Issue Tracker</p>
                    <a href="link" className="py-[6px] md:py-2 text-sm hover:text-blue-500">
                        File a bug
                    </a>
                    <a href="link" className="py-[6px] md:py-2 text-sm hover:text-blue-500">
                        Request a feature
                    </a>
                    <a href="link" className="py-[6px] md:py-2 text-sm hover:text-blue-500">
                        See open issues
                    </a>
                </div>

                <div className="flex flex-col items-start grow text-gray-900">
                    <p className="mb-1">Product Info</p>
                    <a href="link" className="py-[6px] md:py-2 text-sm hover:text-blue-500">
                        Terms of Service
                    </a>
                    <a href="link" className="py-[6px] md:py-2 text-sm hover:text-blue-500">
                        Branding Guidelines
                    </a>
                    <a href="link" className="py-[6px] md:py-2 text-sm hover:text-blue-500">
                        Monetization Guidelines
                    </a>
                    <a href="link" className="py-[6px] md:py-2 text-sm hover:text-blue-500">
                        APIs subject to Deprecation Policy
                    </a>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 py-6 border-b border-gray-300">
                <a href="link" className="block w-[185px] h-[32px]">
                    <img
                        src="/lockup-developers.svg"
                        alt="google developers"
                        className="w-full h-full object-cover"
                    />
                </a>

                <div className="flex flex-col lg:flex-row lg:gap-10 text-gray-900">
                    <a href="link" className="text-sm py-2 hover:text-blue-500">
                        Android
                    </a>
                    <a href="link" className="text-sm py-2 hover:text-blue-500">
                        Chrome
                    </a>
                    <a href="link" className="text-sm py-2 hover:text-blue-500">
                        Firebase
                    </a>
                    <a href="link" className="text-sm py-2 hover:text-blue-500">
                        Google Cloud Platform
                    </a>
                    <a href="link" className="text-sm py-2 hover:text-blue-500">
                        All products
                    </a>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 py-6 text-[14px]">
                <div className="grow">
                    <div className="flex flex-col lg:flex-row gap-2 grow">
                        <div className="flex gap-2">
                            <a href="link" className=" py-2 hover:text-blue-500">
                                Terms
                            </a>
                            <div className="">
                                <span className="mr-[6px]">|</span>
                                <a href="link" className=" py-2 hover:text-blue-500">
                                    Privacy
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center lg:justify-end  gap-3 grow font-roboto tracking-tight">
                            <p className="">Sign up for the Google Developers newsletter</p>
                            <a
                                href="button"
                                className="px-[24px] bg-blue-600 hover:bg-blue-700 text-white leading-[2.5] rounded text-[14px] transition-all font-medium tracking-normal"
                            >
                                Subscribe
                            </a>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div
                        onClick={() => {
                            setDropdown(!dropdown);
                        }}
                        ref={dropdownRef}
                        className="w-[122px] lg:w-full h-full flex relative text-gray-800  border border-gray-200 rounded text-sm px-3 font-semibold cursor-pointer  items-center hover:bg-gray-100 transition"
                    >
                        <div className="flex items-center gap-2">
                            <BsGlobe size={20} />
                            <div className="leading-9">English</div>
                            <AiFillCaretDown size={14} />
                        </div>
                        <div
                            ref={dropdownRef}
                            id="dropdown"
                            className={`${
                                dropdown ? "block" : "hidden"
                            }  absolute bottom-[36px] left-0 lg:right-0  h-[224px] py-2 bg-white rounded shadow-xl overflow-y-auto overflow-x-hidden`}
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
                </div>
            </div>
        </div>
    );
};

export default Footer;
