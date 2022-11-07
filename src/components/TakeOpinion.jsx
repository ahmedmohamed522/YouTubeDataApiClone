import { FaThumbsUp } from "react-icons/fa";
import { FiThumbsUp } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { IoThumbsDownSharp } from "react-icons/io5";

const TakeOpinion = ({ opinions, breadcramp = true }) => {
    const { liked, disliked, clickLike, clickDislike } = opinions;
    return (
        <div
            className={`flex self-start  text-gray-700 ${
                breadcramp ? "gap-3" : "flex-col items-center gap-1"
            }`}
        >
            <p className="text-[13px] text-black whitespace-nowrap">Was this helpful?</p>
            <div className="flex gap-1">
                <div
                    onClick={clickLike}
                    className={`relative hover:bg-gray-100 ${
                        liked && "hover:bg-blue-100"
                    } rounded-full p-1 cursor-pointer group`}
                >
                    {liked ? <FaThumbsUp className="text-blue-700" /> : <FiThumbsUp />}

                    <div className={`tooltip tooltip-bottom translate-x-[-25%] group-hover:block`}>
                        Helpful
                    </div>
                </div>
                <div
                    onClick={clickDislike}
                    className={`relative hover:bg-gray-100 ${
                        disliked && "hover:bg-blue-100"
                    } rounded-full p-1 cursor-pointer group`}
                >
                    {disliked ? <IoThumbsDownSharp className="text-blue-700" /> : <FiThumbsDown />}
                    <div className={`tooltip tooltip-bottom translate-x-[-25%] group-hover:block`}>
                        Not helpful
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TakeOpinion;
