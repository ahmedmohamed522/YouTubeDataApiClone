import React, { useEffect } from "react";
import { useState } from "react";

const CopiedAlert = ({ showAlert }) => {
    return (
        <div
            className={`${
                showAlert ? "translate-y-0" : "translate-y-[100px]"
            } transition-all duration-300 bg-zinc-800 text-gray-100 p-4 fixed bottom-6 left-6 rounded-lg w-[260px] text-sm`}
        >
            Copied to clipboard{" "}
        </div>
    );
};

export default CopiedAlert;
