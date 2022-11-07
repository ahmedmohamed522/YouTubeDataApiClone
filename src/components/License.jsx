import React from "react";

const License = () => {
    return (
        <div className="md:ml-[294px] xl:mr-[192px] px-4 md:px-0 font-[roboto] text-[13px] md:mb-6 ">
            <p className=" text-gray-500 py-4 ">
                Except as otherwise noted, the content of this page is licensed under the{" "}
                <a href="ok" className="text-blue-600 inline">
                    Creative Commons Attribution 4.0 License
                </a>
                , and code samples are licensed under the{" "}
                <a href="ok" className="text-blue-600">
                    Apache 2.0 License
                </a>
                . For details, see the{" "}
                <a href="ok" className="text-blue-600">
                    Google Developers Site Policies
                </a>
                . Java is a registered trademark of Oracle and/or its affiliates.
            </p>
            <p className="py-4 text-gray-500">Last updated 2022-11-04 UTC.</p>
        </div>
    );
};

export default License;
