import Article from "./components/article/Article";
import BottomNav from "./components/BottomNav";
import TopNav from "./components/TopNav";
import Sidebar from "./components/sidebar/Sidebar";
import { createPortal } from "react-dom";
import CookiesAlert from "./components/CookiesAlert";
import RightSide from "./components/RightSide";
import { useState } from "react";

function App() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [navVisible, setNavVisible] = useState(false);
    const sidebarHandler = (isVisible) => {
        setIsSidebarVisible(isVisible);
    };
    const getScrollDir = (scrollDir) => {
        setNavVisible(scrollDir === "down");
    };
    return (
        <div>
            <TopNav />
            <BottomNav scrollDirHandler={getScrollDir} />
            <main className="flex relative  md:pt-[121px] pt-[52px] pr-6 xl:pr-0 bg-[#e8eaed]">
                <Sidebar sidebarHandler={sidebarHandler} navVisible={navVisible} />
                <Article isSidebarVisible={isSidebarVisible} />
                <RightSide navVisible={navVisible} />
            </main>
            {createPortal(<CookiesAlert />, document.getElementById("modal"))}
        </div>
    );
}

export default App;
