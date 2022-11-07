import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import NavList from "./NavList";

let lastScrollTop = 0;
const BottomNav = ({ scrollDirHandler }) => {
    const [scrollDir, setScrollDir] = useState("up");
    scrollDirHandler(scrollDir);

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            scrollY > 60 ? setScrollDir(scrollY > lastScrollY ? "down" : "up") : setScrollDir("up");
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    return (
        <nav
            className={`hidden fixed top-[52px] z-[130] w-full md:block md:bg-[#f00] ${
                scrollDir === "down" ? "h-0 overflow-hidden" : ""
            } md:px-1`}
        >
            <NavList />
        </nav>
    );
};

export default BottomNav;
