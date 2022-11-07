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

const ReferenceArticle = ({ isSidebarVisible, navVisible }) => {
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
                <h1 className="text-gray-800">API Reference</h1>
                <Bookmark />
            </div>

            {/* Page navigator */}
            <RightSide navVisible={navVisible} />

            <div className="text-gray-900 mb-8">
                <p className="mb-4">
                    The YouTube Data API lets you incorporate functions normally executed on the YouTube
                    website into your own website or application. The lists below identify the different types
                    of resources that you can retrieve using the API. The API also supports methods to insert,
                    update, or delete many of these resources.
                </p>
                <p>
                    This reference guide explains how to use the API to perform all of these operations. The
                    guide is organized by resource type. A resource represents a type of item that comprises
                    part of the YouTube experience, such as a video, a playlist, or a subscription. For each
                    resource type, the guide lists one or more data representations, and resources are
                    represented as JSON objects. The guide also lists one or more supported methods (LIST,
                    POST, DELETE, etc.) for each resource type and explains how to use those methods in your
                    application.
                </p>
            </div>
            <ScrollSpy>
                <section id="call-api" className="text-gray-900 mb-8">
                    <div className="flex items-center gap-4 group mb-6">
                        <h2 className="text-2xl text-gray-900">Calling the API</h2>
                        <button
                            className="hidden group-hover:block"
                            onClick={() => {
                                navigator.clipboard.writeText(window.location.origin + "/#call-api");
                                alertHandler();
                            }}
                        >
                            <IoLinkOutline size={22} className="hover:text-blue-600" />
                        </button>
                        <CopiedAlert showAlert={showAlert} text={alertText} />
                    </div>

                    <p className="mb-4">The following requirements apply to YouTube Data API requests:</p>
                    <ol className="list-decimal ml-10">
                        <li className="mb-4">
                            <p>
                                Every request must either specify an API key (with the key parameter) or
                                provide an OAuth 2.0 token.
                            </p>
                            <p>
                                Your API key is available in the{" "}
                                <a href="https://console.developers.google.com/" className="text-blue-500">
                                    Developer Console's
                                </a>{" "}
                                <strong>API Access</strong> pane for your project.
                            </p>
                        </li>
                        <li className="mb-4">
                            <p className="mb-4">
                                You <strong>must</strong> send an authorization token for every insert,
                                update, and delete request. You must also send an authorization token for any
                                request that retrieves the authenticated user's private data.
                            </p>
                            <p>
                                In addition, some API methods for retrieving resources may support parameters
                                that require authorization or may contain additional metadata when requests
                                are authorized. For example, a request to retrieve a user's uploaded videos
                                may also contain private videos if the request is authorized by that specific
                                user.
                            </p>
                        </li>
                        <li>
                            <p className="mb-4">
                                The API supports the OAuth 2.0 authentication protocol. You can provide an
                                OAuth 2.0 token in either of the following ways:
                            </p>
                            <ul className="list-disc ml-8 ">
                                <li className="mb-4">
                                    Use the <span className="code">access_token</span> query parameter like
                                    this: <span className="code">?access_token=oauth2-token</span>
                                </li>
                                <li className="mb-4">
                                    Use the HTTP <span className="code">Authorization</span> header like this:
                                    <span className="code">Authorization: Bearer</span>{" "}
                                    <span className="code">oauth2-token</span>
                                </li>
                            </ul>
                            <p className="">
                                <span>
                                    Complete instructions for implementing OAuth 2.0 authentication in your
                                    application can be found in the
                                </span>{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/guides/authentication"
                                    className="text-blue-500"
                                >
                                    authentication guide
                                </a>
                                .
                            </p>
                        </li>
                    </ol>
                </section>

                <section id="resources-types" className="mb-8">
                    <ScrollSpy>
                        <div className="flex items-center gap-4 group mb-8">
                            <h2 className="text-2xl text-gray-900">Resource types</h2>
                            <button
                                className=" hidden group-hover:block"
                                onClick={() => {
                                    navigator.clipboard.writeText(
                                        window.location.origin + "/#resources-types"
                                    );
                                    alertHandler();
                                }}
                            >
                                <IoLinkOutline size={22} className="hover:text-blue-600" />
                            </button>
                        </div>

                        <section id="activities" className="mb-4">
                            <div className="flex items-center gap-4 group mb-6">
                                <h3 className="text-xl text-gray-900">Activities</h3>
                                <button
                                    className=" hidden group-hover:block"
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            window.location.origin + "/#activities"
                                        );
                                        alertHandler();
                                    }}
                                >
                                    <IoLinkOutline size={22} className="hover:text-blue-600" />
                                </button>
                            </div>
                            <p className="mb-4">
                                An <span className="code">activity</span> resource contains information about
                                an action that a particular channel, or user, has taken on YouTube. The
                                actions reported in activity feeds include rating a video, sharing a video,
                                marking a video as a favorite, uploading a video, and so forth. Each{" "}
                                <span className="code">activity</span> resource identifies the type of action,
                                the channel associated with the action, and the resource(s) associated with
                                the action, such as the video that was rated or uploaded.
                            </p>
                            <p className="mb-4">
                                For more information about this resource, see its{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#resource"
                                    className="text-blue-600"
                                >
                                    resource representation
                                </a>{" "}
                                and list of{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#properties"
                                    className="text-blue-600"
                                >
                                    {" "}
                                    properties
                                </a>
                                .
                            </p>

                            <div className=" text-sm text-gray-900 border-y border-gray-200 mb-8">
                                <div className="grid  table-cols bg-gray-200  font-semibold border-b border-gray-200">
                                    <div className="p-2">Method</div>
                                    <div className="p-2">HTTP request</div>
                                    <div className="p-2">Description</div>
                                </div>
                                <div className="bg-gray-100 p-2 border-b border-gray-200">
                                    URIs relative to{" "}
                                    <span className="font-medium">https://www.googleapis.com/youtube/v3</span>
                                </div>
                                <div className="grid  table-cols border-b border-gray-200">
                                    <div className="p-2 ">
                                        <a href="list" className="table-link">
                                            list
                                        </a>
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>GET /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-black">
                                        Returns a list of channel activity events that match the request
                                        criteria. For example, you can retrieve events associated with a
                                        particular channel or with the user's own channel.
                                    </div>
                                </div>

                                <div className="grid  table-cols  ">
                                    <div className="p-2 ">
                                        <a href="insert" className="table-link">
                                            insert
                                        </a>{" "}
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>POST /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-red-500">
                                        <strong>Note</strong>: This method has been deprecated and is no
                                        longer supported.
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Captions */}
                        <section id="captions" className="mb-4">
                            <div className="flex items-center gap-4 group mb-6">
                                <h3 className="text-xl text-gray-900">Captions</h3>
                                <button
                                    className=" hidden group-hover:block"
                                    onClick={() => {
                                        navigator.clipboard.writeText(window.location.origin + "/#captions");
                                        alertHandler();
                                    }}
                                >
                                    <IoLinkOutline size={22} className="hover:text-blue-600" />
                                </button>
                            </div>
                            <p className="mb-4">
                                A <span className="code">caption</span> resource represents a YouTube caption
                                track. A caption track is associated with exactly one YouTube video.
                            </p>
                            <p className="mb-4">
                                For more information about this resource, see its{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#resource"
                                    className="text-blue-600"
                                >
                                    resource representation
                                </a>{" "}
                                and list of{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#properties"
                                    className="text-blue-600"
                                >
                                    {" "}
                                    properties
                                </a>
                                .
                            </p>

                            <div className=" text-sm text-gray-900 border-y border-gray-200 mb-8">
                                <div className="grid  table-cols bg-gray-200  font-semibold border-b border-gray-200">
                                    <div className="p-2">Method</div>
                                    <div className="p-2">HTTP request</div>
                                    <div className="p-2">Description</div>
                                </div>
                                <div className="bg-gray-100 p-2 border-b border-gray-200">
                                    URIs relative to{" "}
                                    <span className="font-medium">https://www.googleapis.com/youtube/v3</span>
                                </div>
                                <div className="grid  table-cols border-b border-gray-200">
                                    <div className="p-2 ">
                                        <a href="delete" className="table-link">
                                            delete
                                        </a>
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>DELETE /</div> <div className="tracking-wider">captions</div>
                                    </div>
                                    <div className="p-2 text-black">Deletes the specified caption track.</div>
                                </div>

                                <div className="grid  grid-cols-[minmax(min-content,66px)_minmax(125px,max-content)_1fr]  ">
                                    <div className="p-2 ">
                                        <a href="download" className="table-link">
                                            download
                                        </a>{" "}
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>GET /</div>{" "}
                                        <div className="tracking-wider">
                                            captions/ <span className="text-red-600">id</span>
                                        </div>
                                    </div>
                                    <div className="p-2 text-black">
                                        Downloads a caption track. The caption track is returned in its
                                        original format unless the request specifies a value for the tfmt
                                        parameter and in its original language unless the request specifies a
                                        value for the tlang parameter.
                                    </div>
                                </div>

                                <div className="grid  table-cols  ">
                                    <div className="p-2 ">
                                        <a href="insert	" className="table-link">
                                            insert
                                        </a>{" "}
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>POST /</div> <div className="tracking-wider">captions</div>
                                    </div>
                                    <div className="p-2 text-black">Uploads a caption track.</div>
                                </div>

                                <div className="grid  table-cols  ">
                                    <div className="p-2 ">
                                        <a href="list" className="table-link">
                                            list
                                        </a>{" "}
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>GET /</div> <div className="tracking-wider">captions</div>
                                    </div>
                                    <div className="p-2 text-black">
                                        Returns a list of caption tracks that are associated with a specified
                                        video. Note that the API response does not contain the actual captions
                                        and that the{" "}
                                        <a href="link" className="text-blue-600">
                                            captions.download
                                        </a>{" "}
                                        method provides the ability to retrieve a caption track.
                                    </div>
                                </div>

                                <div className="grid  table-cols  ">
                                    <div className="p-2 ">
                                        <a href="update" className="table-link">
                                            update
                                        </a>{" "}
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>PUT /</div> <div className="tracking-wider">captions</div>
                                    </div>
                                    <div className="p-2 text-black">
                                        Updates a caption track. When updating a caption track, you can change
                                        the track's
                                        <a href="link" className="text-blue-600">
                                            draft status
                                        </a>{" "}
                                        , upload a new caption file for the track, or both.
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ChannelBanners */}

                        <section id="channel-banners" className="mb-4">
                            <div className="flex items-center gap-4 group mb-6">
                                <h3 className="text-xl text-gray-900">ChannelBanners</h3>
                                <button
                                    className=" hidden group-hover:block"
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            window.location.origin + "/#channel-banners"
                                        );
                                        alertHandler();
                                    }}
                                >
                                    <IoLinkOutline size={22} className="hover:text-blue-600" />
                                </button>
                            </div>
                            <p className="mb-4">
                                An <span className="code">activity</span> resource contains information about
                                an action that a particular channel, or user, has taken on YouTube. The
                                actions reported in activity feeds include rating a video, sharing a video,
                                marking a video as a favorite, uploading a video, and so forth. Each{" "}
                                <span className="code">activity</span> resource identifies the type of action,
                                the channel associated with the action, and the resource(s) associated with
                                the action, such as the video that was rated or uploaded.
                            </p>
                            <p className="mb-4">
                                For more information about this resource, see its{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#resource"
                                    className="text-blue-600"
                                >
                                    resource representation
                                </a>{" "}
                                and list of{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#properties"
                                    className="text-blue-600"
                                >
                                    {" "}
                                    properties
                                </a>
                                .
                            </p>

                            <div className=" text-sm text-gray-900 border-y border-gray-200 mb-8">
                                <div className="grid  table-cols bg-gray-200  font-semibold border-b border-gray-200">
                                    <div className="p-2">Method</div>
                                    <div className="p-2">HTTP request</div>
                                    <div className="p-2">Description</div>
                                </div>
                                <div className="bg-gray-100 p-2 border-b border-gray-200">
                                    URIs relative to{" "}
                                    <span className="font-medium">https://www.googleapis.com/youtube/v3</span>
                                </div>
                                <div className="grid  table-cols border-b border-gray-200">
                                    <div className="p-2 ">
                                        <a href="list" className="table-link">
                                            list
                                        </a>
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>GET /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-black">
                                        Returns a list of channel activity events that match the request
                                        criteria. For example, you can retrieve events associated with a
                                        particular channel or with the user's own channel.
                                    </div>
                                </div>

                                <div className="grid  table-cols  ">
                                    <div className="p-2 ">
                                        <a href="insert" className="table-link">
                                            insert
                                        </a>{" "}
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>POST /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-red-500">
                                        <strong>Note</strong>: This method has been deprecated and is no
                                        longer supported.
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ChannelSections */}

                        <section id="channel-sections" className="mb-4">
                            <div className="flex items-center gap-4 group mb-6">
                                <h3 className="text-xl text-gray-900">ChannelSections</h3>
                                <button
                                    className=" hidden group-hover:block"
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            window.location.origin + "/#channel-sections"
                                        );
                                        alertHandler();
                                    }}
                                >
                                    <IoLinkOutline size={22} className="hover:text-blue-600" />
                                </button>
                            </div>
                            <p className="mb-4">
                                An <span className="code">activity</span> resource contains information about
                                an action that a particular channel, or user, has taken on YouTube. The
                                actions reported in activity feeds include rating a video, sharing a video,
                                marking a video as a favorite, uploading a video, and so forth. Each{" "}
                                <span className="code">activity</span> resource identifies the type of action,
                                the channel associated with the action, and the resource(s) associated with
                                the action, such as the video that was rated or uploaded.
                            </p>
                            <p className="mb-4">
                                For more information about this resource, see its{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#resource"
                                    className="text-blue-600"
                                >
                                    resource representation
                                </a>{" "}
                                and list of{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#properties"
                                    className="text-blue-600"
                                >
                                    {" "}
                                    properties
                                </a>
                                .
                            </p>

                            <div className=" text-sm text-gray-900 border-y border-gray-200 mb-8">
                                <div className="grid  table-cols bg-gray-200  font-semibold border-b border-gray-200">
                                    <div className="p-2">Method</div>
                                    <div className="p-2">HTTP request</div>
                                    <div className="p-2">Description</div>
                                </div>
                                <div className="bg-gray-100 p-2 border-b border-gray-200">
                                    URIs relative to{" "}
                                    <span className="font-medium">https://www.googleapis.com/youtube/v3</span>
                                </div>
                                <div className="grid  table-cols border-b border-gray-200">
                                    <div className="p-2 ">
                                        <a href="list" className="table-link">
                                            list
                                        </a>
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>GET /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-black">
                                        Returns a list of channel activity events that match the request
                                        criteria. For example, you can retrieve events associated with a
                                        particular channel or with the user's own channel.
                                    </div>
                                </div>

                                <div className="grid  table-cols  ">
                                    <div className="p-2 ">
                                        <a href="insert" className="table-link">
                                            insert
                                        </a>{" "}
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>POST /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-red-500">
                                        <strong>Note</strong>: This method has been deprecated and is no
                                        longer supported.
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Channels */}

                        <section id="channels" className="mb-4">
                            <div className="flex items-center gap-4 group mb-6">
                                <h3 className="text-xl text-gray-900">Channels</h3>
                                <button
                                    className=" hidden group-hover:block"
                                    onClick={() => {
                                        navigator.clipboard.writeText(window.location.origin + "/#channels");
                                        alertHandler();
                                    }}
                                >
                                    <IoLinkOutline size={22} className="hover:text-blue-600" />
                                </button>
                            </div>
                            <p className="mb-4">
                                An <span className="code">activity</span> resource contains information about
                                an action that a particular channel, or user, has taken on YouTube. The
                                actions reported in activity feeds include rating a video, sharing a video,
                                marking a video as a favorite, uploading a video, and so forth. Each{" "}
                                <span className="code">activity</span> resource identifies the type of action,
                                the channel associated with the action, and the resource(s) associated with
                                the action, such as the video that was rated or uploaded.
                            </p>
                            <p className="mb-4">
                                For more information about this resource, see its{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#resource"
                                    className="text-blue-600"
                                >
                                    resource representation
                                </a>{" "}
                                and list of{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#properties"
                                    className="text-blue-600"
                                >
                                    {" "}
                                    properties
                                </a>
                                .
                            </p>

                            <div className=" text-sm text-gray-900 border-y border-gray-200 mb-8">
                                <div className="grid  table-cols bg-gray-200  font-semibold border-b border-gray-200">
                                    <div className="p-2">Method</div>
                                    <div className="p-2">HTTP request</div>
                                    <div className="p-2">Description</div>
                                </div>
                                <div className="bg-gray-100 p-2 border-b border-gray-200">
                                    URIs relative to{" "}
                                    <span className="font-medium">https://www.googleapis.com/youtube/v3</span>
                                </div>
                                <div className="grid  table-cols border-b border-gray-200">
                                    <div className="p-2 ">
                                        <a href="list" className="table-link">
                                            list
                                        </a>
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>GET /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-black">
                                        Returns a list of channel activity events that match the request
                                        criteria. For example, you can retrieve events associated with a
                                        particular channel or with the user's own channel.
                                    </div>
                                </div>

                                <div className="grid  table-cols  ">
                                    <div className="p-2 ">
                                        <a href="insert" className="table-link">
                                            insert
                                        </a>{" "}
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>POST /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-red-500">
                                        <strong>Note</strong>: This method has been deprecated and is no
                                        longer supported.
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CommentThreads */}

                        <section id="comment-threads" className="mb-4">
                            <div className="flex items-center gap-4 group mb-6">
                                <h3 className="text-xl text-gray-900">CommentThreads</h3>
                                <button
                                    className=" hidden group-hover:block"
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            window.location.origin + "/#comment-threads"
                                        );
                                        alertHandler();
                                    }}
                                >
                                    <IoLinkOutline size={22} className="hover:text-blue-600" />
                                </button>
                            </div>
                            <p className="mb-4">
                                An <span className="code">activity</span> resource contains information about
                                an action that a particular channel, or user, has taken on YouTube. The
                                actions reported in activity feeds include rating a video, sharing a video,
                                marking a video as a favorite, uploading a video, and so forth. Each{" "}
                                <span className="code">activity</span> resource identifies the type of action,
                                the channel associated with the action, and the resource(s) associated with
                                the action, such as the video that was rated or uploaded.
                            </p>
                            <p className="mb-4">
                                For more information about this resource, see its{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#resource"
                                    className="text-blue-600"
                                >
                                    resource representation
                                </a>{" "}
                                and list of{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#properties"
                                    className="text-blue-600"
                                >
                                    {" "}
                                    properties
                                </a>
                                .
                            </p>

                            <div className=" text-sm text-gray-900 border-y border-gray-200 mb-8">
                                <div className="grid  table-cols bg-gray-200  font-semibold border-b border-gray-200">
                                    <div className="p-2">Method</div>
                                    <div className="p-2">HTTP request</div>
                                    <div className="p-2">Description</div>
                                </div>
                                <div className="bg-gray-100 p-2 border-b border-gray-200">
                                    URIs relative to{" "}
                                    <span className="font-medium">https://www.googleapis.com/youtube/v3</span>
                                </div>
                                <div className="grid  table-cols border-b border-gray-200">
                                    <div className="p-2 ">
                                        <a href="list" className="table-link">
                                            list
                                        </a>
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>GET /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-black">
                                        Returns a list of channel activity events that match the request
                                        criteria. For example, you can retrieve events associated with a
                                        particular channel or with the user's own channel.
                                    </div>
                                </div>

                                <div className="grid  table-cols  ">
                                    <div className="p-2 ">
                                        <a href="insert" className="table-link">
                                            insert
                                        </a>{" "}
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>POST /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-red-500">
                                        <strong>Note</strong>: This method has been deprecated and is no
                                        longer supported.
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Comments */}

                        <section id="comments" className="mb-4">
                            <div className="flex items-center gap-4 group mb-6">
                                <h3 className="text-xl text-gray-900">Comments</h3>
                                <button
                                    className=" hidden group-hover:block"
                                    onClick={() => {
                                        navigator.clipboard.writeText(window.location.origin + "/#comments");
                                        alertHandler();
                                    }}
                                >
                                    <IoLinkOutline size={22} className="hover:text-blue-600" />
                                </button>
                            </div>
                            <p className="mb-4">
                                An <span className="code">activity</span> resource contains information about
                                an action that a particular channel, or user, has taken on YouTube. The
                                actions reported in activity feeds include rating a video, sharing a video,
                                marking a video as a favorite, uploading a video, and so forth. Each{" "}
                                <span className="code">activity</span> resource identifies the type of action,
                                the channel associated with the action, and the resource(s) associated with
                                the action, such as the video that was rated or uploaded.
                            </p>
                            <p className="mb-4">
                                For more information about this resource, see its{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#resource"
                                    className="text-blue-600"
                                >
                                    resource representation
                                </a>{" "}
                                and list of{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#properties"
                                    className="text-blue-600"
                                >
                                    {" "}
                                    properties
                                </a>
                                .
                            </p>

                            <div className=" text-sm text-gray-900 border-y border-gray-200 mb-8">
                                <div className="grid  table-cols bg-gray-200  font-semibold border-b border-gray-200">
                                    <div className="p-2">Method</div>
                                    <div className="p-2">HTTP request</div>
                                    <div className="p-2">Description</div>
                                </div>
                                <div className="bg-gray-100 p-2 border-b border-gray-200">
                                    URIs relative to{" "}
                                    <span className="font-medium">https://www.googleapis.com/youtube/v3</span>
                                </div>
                                <div className="grid  table-cols border-b border-gray-200">
                                    <div className="p-2 ">
                                        <a href="list" className="table-link">
                                            list
                                        </a>
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>GET /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-black">
                                        Returns a list of channel activity events that match the request
                                        criteria. For example, you can retrieve events associated with a
                                        particular channel or with the user's own channel.
                                    </div>
                                </div>

                                <div className="grid  table-cols  ">
                                    <div className="p-2 ">
                                        <a href="insert" className="table-link">
                                            insert
                                        </a>{" "}
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>POST /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-red-500">
                                        <strong>Note</strong>: This method has been deprecated and is no
                                        longer supported.
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* GuideCategories */}

                        <section id="guide-categories" className="mb-4">
                            <div className="flex items-center gap-4 group mb-6">
                                <h3 className="text-xl text-gray-900">GuideCategories</h3>
                                <button
                                    className=" hidden group-hover:block"
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            window.location.origin + "/#guide-categories"
                                        );
                                        alertHandler();
                                    }}
                                >
                                    <IoLinkOutline size={22} className="hover:text-blue-600" />
                                </button>
                            </div>
                            <p className="mb-4">
                                An <span className="code">activity</span> resource contains information about
                                an action that a particular channel, or user, has taken on YouTube. The
                                actions reported in activity feeds include rating a video, sharing a video,
                                marking a video as a favorite, uploading a video, and so forth. Each{" "}
                                <span className="code">activity</span> resource identifies the type of action,
                                the channel associated with the action, and the resource(s) associated with
                                the action, such as the video that was rated or uploaded.
                            </p>
                            <p className="mb-4">
                                For more information about this resource, see its{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#resource"
                                    className="text-blue-600"
                                >
                                    resource representation
                                </a>{" "}
                                and list of{" "}
                                <a
                                    href="https://developers.google.com/youtube/v3/docs/activities#properties"
                                    className="text-blue-600"
                                >
                                    {" "}
                                    properties
                                </a>
                                .
                            </p>

                            <div className=" text-sm text-gray-900 border-y border-gray-200 mb-8">
                                <div className="grid  table-cols bg-gray-200  font-semibold border-b border-gray-200">
                                    <div className="p-2">Method</div>
                                    <div className="p-2">HTTP request</div>
                                    <div className="p-2">Description</div>
                                </div>
                                <div className="bg-gray-100 p-2 border-b border-gray-200">
                                    URIs relative to{" "}
                                    <span className="font-medium">https://www.googleapis.com/youtube/v3</span>
                                </div>
                                <div className="grid  table-cols border-b border-gray-200">
                                    <div className="p-2 ">
                                        <a href="list" className="table-link">
                                            list
                                        </a>
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>GET /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-black">
                                        Returns a list of channel activity events that match the request
                                        criteria. For example, you can retrieve events associated with a
                                        particular channel or with the user's own channel.
                                    </div>
                                </div>

                                <div className="grid  table-cols  ">
                                    <div className="p-2 ">
                                        <a href="insert" className="table-link">
                                            insert
                                        </a>{" "}
                                    </div>
                                    <div className="p-2 text-gray-900 font-medium">
                                        <div>POST /</div> <div className="tracking-wider">activities</div>
                                    </div>
                                    <div className="p-2 text-red-500">
                                        <strong>Note</strong>: This method has been deprecated and is no
                                        longer supported.
                                    </div>
                                </div>
                            </div>
                        </section>
                    </ScrollSpy>
                </section>
            </ScrollSpy>

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

export default ReferenceArticle;
