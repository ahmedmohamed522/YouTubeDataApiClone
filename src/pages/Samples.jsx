import React, { useState } from "react";
import SampleArticle from "../components/article/articles/SampleArticle";
import License from "../components/License";
import Sidebar from "../components/sidebar/Sidebar";

const Samples = ({ navVisible }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const sidebarHandler = (isVisible) => {
        setIsSidebarVisible(isVisible);
    };

    return (
        <main className="flex flex-col relative  md:pt-[121px] pt-[52px] pr-0 md:pr-6 xl:pr-0 bg-[#e8eaed]">
            <Sidebar sidebarHandler={sidebarHandler} navVisible={navVisible} />
            <SampleArticle isSidebarVisible={isSidebarVisible} navVisible={navVisible} />
            <License />
        </main>
    );
};

export default Samples;
