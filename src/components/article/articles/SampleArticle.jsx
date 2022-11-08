import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoLinkOutline } from "react-icons/io5";
import ScrollSpy from "react-ui-scrollspy";
import { useEffect } from "react";
import { useLike } from "../../../hooks/useLike";
import TakeOpinion from "../../TakeOpinion";
import Breadcramp from ".././Breadcramp";
import RightSide from "../../RightSide";

import CopiedAlert from ".././CopiedAlert";

import { useSavePagesAndCreateCategories } from "../../../hooks/useSavePagesAndCreateCategories";
import Bookmark from "../Bookmark";

const SampleArticle = ({ isSidebarVisible, navVisible }) => {
    const { liked, disliked, clickLike, removeLike, clickDislike, removeDislike } = useLike();
    const { showAlert, alertText, alertHandler, closeAlert } = useSavePagesAndCreateCategories();

    useEffect(() => {
        const timer = setTimeout(() => {
            closeAlert();
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [showAlert, closeAlert]);
    return (
        <article
            className={`flex-1  ${
                isSidebarVisible ? "md:ml-[294px]" : "md:ml-[194px]"
            } xl:mr-[192px] max-w-[936px] p-6 md:p-10 bg-white  shadow-lg md:border border-gray-200 rounded `}
        >
            <Breadcramp opinions={{ liked, disliked, clickLike, removeLike, clickDislike, removeDislike }} />

            {/* Description */}
            <div className="text-3xl flex items-center gap-3 mb-4">
                <h1 className="text-gray-800">YouTube Data API (v3) Code Samples</h1>
                <Bookmark />
            </div>

            {/* Page navigator */}
            <RightSide navVisible={navVisible} />

            <div className="text-gray-900 mb-8">
                <p className="mb-4">
                    You can explore common use cases for the YouTube Data API and YouTube Live Streaming API
                    on the{" "}
                    <a href="https://console.developers.google.com/" className="text-blue-500">
                        use cases and code samples page
                    </a>
                    .
                </p>
                <p>
                    The page lets you select an API resource and method and then lists common use cases for
                    that method. You can then click on any use case to populate the APIs Explorer widget with
                    sample parameter and property values for that use case. You can also open the fullscreen
                    APIs Explorer widget to see working code samples for Java, JavaScript, PHP, and Python. If
                    you update parameter or property values in the APIs Explorer, the code samples also update
                    to reflect your changes.
                </p>
                <p>The following section lists code samples available in other languages.</p>
            </div>

            <div className="mt-8 md:mt-6 pb-10  flex justify-center border-b border-gray-300">
                <TakeOpinion
                    opinions={{ liked, disliked, clickLike, removeLike, clickDislike, removeDislike }}
                    breadcramp={false}
                />
            </div>

            <div className="pt-5">
                <div className="flex items-center gap-1">
                    <h2 className="text-gray-800 text-2xl">Recommended for you</h2>
                    <div className="relative p-2 rounded-full hover:bg-gray-200 flex items-center cursor-pointer group">
                        <AiOutlineExclamationCircle size={18} className="text-gray-800" />
                        <div className="tooltip top-[-30px] translate-x-[-35%] group-hover:block">
                            About recommendations
                        </div>
                    </div>
                </div>

                <div className="inline-flex flex-col items-start w-full md:w-[250px] p-5 mt-4 rounded border border-gray-200 hover:shadow-[0_0_4px_rgba(0,0,0,.3)]">
                    <a href="list" className="text-blue-600 mb-1 font-medium">
                        Videos: list
                    </a>
                    <p className="text-sm mb-5 text-gray-900">
                        Lets your application retrieve YouTube content while also...
                    </p>
                    <p className="text-sm text-gray-500">Updated Nov 4, 2022</p>
                </div>
            </div>
        </article>
    );
};

export default SampleArticle;
