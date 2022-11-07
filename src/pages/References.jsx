import React, { useState } from "react";
import ReferenceArticle from "../components/article/articles/ReferenceArticle";
import License from "../components/License";
import Sidebar from "../components/sidebar/Sidebar";

const References = ({ navVisible }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const sidebarHandler = (isVisible) => {
        setIsSidebarVisible(isVisible);
    };
    return (
        <main className="flex flex-col relative  md:pt-[121px] pt-[52px] pr-0 md:pr-6 xl:pr-0 bg-[#e8eaed]">
            <Sidebar sidebarHandler={sidebarHandler} navVisible={navVisible} />
            <div className="">
                <ReferenceArticle isSidebarVisible={isSidebarVisible} navVisible={navVisible} />
            </div>
            <License />
        </main>
    );
};

export default References;
