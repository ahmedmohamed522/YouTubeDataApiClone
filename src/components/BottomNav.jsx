import React from "react";
import { useEffect } from "react";
import { useState } from "react";

let lastScrollTop = 0;
const BottomNav = ({ scrollDirHandler }) => {
    const [scrollDir, setScrollDir] = useState("down");
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
            className={`hidden fixed top-[52px] z-[5] w-full md:block md:bg-[#f00] ${
                scrollDir === "down" ? "h-0 overflow-hidden" : ""
            }`}
        >
            <ul className="list-none">
                <li className="md:inline-block">
                    <a
                        href="https://developers.google.com/youtube/v3/getting-started#intro"
                        className="nav-link"
                    >
                        Home
                    </a>
                </li>
                <li className="md:inline-block">
                    <a
                        href="https://developers.google.com/youtube/v3/getting-started#intro"
                        className="nav-link "
                    >
                        Guides
                    </a>
                </li>
                <li className="md:inline-block">
                    <a
                        href="https://developers.google.com/youtube/v3/getting-started#intro"
                        className="nav-link before:bg-white before:hover:bg-white hover:text-white"
                    >
                        Reference
                    </a>
                </li>
                <li className="md:inline-block">
                    <a
                        href="https://developers.google.com/youtube/v3/getting-started#intro"
                        className="nav-link"
                    >
                        Samples
                    </a>
                </li>
                <li className="md:inline-block">
                    <a
                        href="https://developers.google.com/youtube/v3/getting-started#intro"
                        className="nav-link"
                    >
                        Support
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default BottomNav;
