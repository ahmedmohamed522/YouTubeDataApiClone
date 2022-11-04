import React, { useState } from "react";

const CookiesAlert = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div
            className={`${
                isOpen ? "block" : "hidden"
            } fixed bottom-6 left-6 p-6 bg-gray-900  text-sm rounded max-w-[540px]`}
        >
            <p className="mb-6 text-gray-300">
                This site uses cookies from Google to deliver its services and to analyze traffic.
            </p>
            <div className="flex justify-end items-center gap-8">
                <a href="/" className="font-medium text-blue-500 hover:text-blue-400">
                    More details
                </a>
                <a
                    onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                    }}
                    href="/"
                    className="font-medium text-blue-500"
                >
                    OK
                </a>
            </div>
        </div>
    );
};

export default CookiesAlert;
