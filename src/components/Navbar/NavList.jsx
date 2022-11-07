import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavList = ({ openPage }) => {
    return (
        <ul className="list-none">
            <li className="flex md:inline-block  ">
                <Link onClick={(e) => {}} to="/Home" className="nav-link text-gray-700">
                    <span className="">Home</span>
                </Link>
            </li>
            <li className="md:inline-block">
                <Link onClick={(e) => {}} to="/guides" className="nav-link  text-gray-700">
                    <span className="">Guides</span>
                    <BiRightArrowAlt className="md:hidden" size={22} />
                </Link>
            </li>
            <li className="md:inline-block">
                <Link
                    onClick={(e) => {
                        if (openPage) openPage();
                    }}
                    to="/references"
                    className="nav-link text-blue-600 md:before:bg-white md:before:hover:bg-white  md:hover:text-white"
                >
                    <span className="">Reference</span>
                    <BiRightArrowAlt className="md:hidden" size={22} />
                </Link>
            </li>
            <li className="md:inline-block">
                <Link onClick={(e) => {}} to="/samples" className="nav-link text-gray-700">
                    <span className="">Samples</span>
                    <BiRightArrowAlt className="md:hidden" size={22} />
                </Link>
            </li>
            <li className="md:inline-block">
                <Link onClick={(e) => {}} to="/support" className="nav-link text-gray-700">
                    <span className="">Support</span>
                    <BiRightArrowAlt className="md:hidden" size={22} />
                </Link>
            </li>
        </ul>
    );
};

export default NavList;
