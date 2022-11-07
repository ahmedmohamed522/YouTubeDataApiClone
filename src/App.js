import BottomNav from "./components/Navbar/BottomNav";
import TopNav from "./components/Navbar/TopNav";
import { createPortal } from "react-dom";
import CookiesAlert from "./components/CookiesAlert";
import { useState } from "react";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Guides from "./pages/Guides";
import References from "./pages/References";
import Samples from "./pages/Samples";
import Support from "./pages/Support";
import { Route, Routes } from "react-router-dom";

function App() {
    const [navVisible, setNavVisible] = useState(false);
    const getScrollDir = (scrollDir) => {
        setNavVisible(scrollDir === "down");
    };

    return (
        <div>
            <TopNav />
            <BottomNav scrollDirHandler={getScrollDir} />
            <Routes>
                <Route element={<Home navVisible={navVisible} />} path="/home" />
                <Route element={<Guides navVisible={navVisible} />} path="/guides" />
                <Route element={<References navVisible={navVisible} />} path="/references" />
                <Route element={<Samples navVisible={navVisible} />} path="/samples" />
                <Route element={<Support navVisible={navVisible} />} path="/support" />
            </Routes>

            <Footer />
            {createPortal(<CookiesAlert />, document.getElementById("modal"))}
        </div>
    );
}

export default App;
