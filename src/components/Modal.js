import React from "react";

const Modal = ({ children, clickHandler }) => {
    return (
        <div className="">
            <div
                onClick={clickHandler}
                className="fixed w-screen h-screen top-0 left-0 z-[250] bg-black/30"
            ></div>
            <div className="absolute top-[50%] left-[50%] translate-[-50%] w-[464px] h-[230px] p-6 rounded-lg bg-white shadow-lg">
                {children}
            </div>
        </div>
    );
};

export default Modal;
