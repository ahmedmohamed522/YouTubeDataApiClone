import React from "react";
import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { useLike } from "../../hooks/useLike";
import Modal from "../Modal";
import TakeOpinion from "../TakeOpinion";
import CopiedAlert from "./CopiedAlert";

const Breadcramp = ({ opinions }) => {
    const { liked, disliked } = useLike();
    const [modal, setModal] = useState(false);

    const openModal = () => {
        if (liked || disliked) setModal(true);
    };
    const closeModal = () => {
        setModal(false);
    };

    return (
        <div className="flex items-center justify-between flex-wrap  sm:flex-nowrap gap-2 mb-4">
            <div className="flex items-center flex-wrap gap-1 mb-4 sm:mb-0">
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

            <TakeOpinion opinions={opinions} />

            <CopiedAlert showAlert={liked} text={"Page rated helpful."} />
            <CopiedAlert showAlert={disliked} text={"Page rated not helpful."} />
            {modal && <Modal clickHandler={closeModal}>SomeText</Modal>}
        </div>
    );
};

export default Breadcramp;
