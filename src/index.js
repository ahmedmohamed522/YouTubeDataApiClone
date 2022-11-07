import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SidebarContextProvider } from "./store/sidebar-context";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <SidebarContextProvider>
                <App />
            </SidebarContextProvider>
        </Router>
    </React.StrictMode>
);
