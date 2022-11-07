import React, { useEffect, useRef, useState } from "react";
import { BsFillBookmarkFill, BsPlusLg } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useCloseOnClickOutside } from "../../hooks/useCloseOnClickOutside";
import { useSavePagesAndCreateCategories } from "../../hooks/useSavePagesAndCreateCategories";

const Bookmark = () => {
    const {
        submit,
        inputError,
        dropdown,
        userFocus,
        categories,
        addCategory,
        toggleDropdown,
        removeInputError,
        putInputError,
        submitValue,
        userFocusFn,
        closeDropdown,
    } = useSavePagesAndCreateCategories();
    const [categoryNameValue, setCategoryNameValue] = useState("");
    const [savePage, setSavePage] = useState(false);

    const dropdownRef = useRef(null);
    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current?.focus();
    };

    useEffect(() => {
        focusInput();
    }, [userFocus]);

    useCloseOnClickOutside(dropdownRef, closeDropdown);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="relative flex gap-1 p-2 px-1.5 border border-gray-300  text-gray-700 rounded hover:text-gray-900 hover:bg-gray-100 transition-all"
            >
                {savePage ? (
                    <BsFillBookmarkFill size={18} className={"text-blue-800"} />
                ) : (
                    <FaRegBookmark size={18} />
                )}
                <IoMdArrowDropdown size={18} />
            </button>

            <div
                className={`${
                    dropdown ? "block" : "hidden"
                } absolute top-[35px] left-0 py-2 bg-white rounded shadow-lg border border-gray-200 text-base`}
            >
                <div className=" border-b border-gray-300">
                    {categories.map((item) => (
                        <div key={item} className="py-3 px-4 flex  hover:bg-gray-100">
                            <input
                                onChange={(e) => {
                                    setSavePage(e.target.checked);
                                }}
                                id="saved-pages"
                                type="checkbox"
                                className="w-4 cursor-pointer"
                            />
                            <label htmlFor="saved-pages" className="whitespace-nowrap pl-4  cursor-pointer">
                                {item}
                            </label>
                        </div>
                    ))}
                </div>

                <div className="">
                    {userFocus ? (
                        <div className="flex flex-col gap-3 p-4">
                            <div className="relative group">
                                <label
                                    htmlFor="name"
                                    className={`absolute left-4 top-[15px] px-1 group-focus-within:top-[-10px] group-focus-within:text-[13px] group-focus-within:text-blue-600 bg-white inline-block transition-all font-medium pointer-events-none ${
                                        inputError && "text-red-500 group-focus-within:text-red-500"
                                    }`}
                                >
                                    Name*
                                </label>
                                <input
                                    onChange={(e) => {
                                        setCategoryNameValue(e.target.value);
                                        e.target.value.trim().length > 0
                                            ? removeInputError()
                                            : submit && putInputError();
                                    }}
                                    ref={inputRef}
                                    type="text"
                                    id="name"
                                    className={`px-4  border border-gray-200  [&:hover:not(:focus)]:border-gray-700  focus:outline-blue-600 focus:outline-2 rounded max-w-[168px] leading-[50px] ${
                                        inputError &&
                                        "border-red-500  border-2 focus:outline-red-500 [&:hover:not(:focus)]:border-red-500"
                                    }`}
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    onClick={() => {
                                        addCategory(categoryNameValue);
                                        submitValue();
                                    }}
                                    className="text-sm font-medium text-blue-500 leading-[30px] px-2 hover:bg-blue-50 rounded"
                                >
                                    Done
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div
                            onClick={userFocusFn()}
                            className="py-3 px-4 flex items-center  border-b border-gray-300 hover:bg-gray-100 cursor-pointer"
                        >
                            <BsPlusLg size="16" />
                            <div className="whitespace-nowrap pl-4">New Collection</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Bookmark;
